import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { redirect } from 'next/navigation';
import { AUTH } from '@/constants/auth';
import { NAV_LINKS } from '@/constants/nav_links';
import { SessionPayload } from '@/types/auth';

const secretKey = process.env.SESSION_SECRET!;
const encodedKey = new TextEncoder().encode(secretKey);
const isProduction = process.env.NODE_ENV === 'production';

export async function encrypt(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(
  session: string | undefined = '',
): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload as SessionPayload;
  } catch (error) {
    console.log('Failed to verify session');
    return null;
  }
}

export async function createSession(userId: string) {
  const sessionExists = (await cookies()).get(AUTH.SESSION_COOKIE)?.value;
  if (sessionExists) {
    await deleteSession();
    console.log('session exist, delete');
    // return;
  }
  const expiresAt = new Date(
    Date.now() + AUTH.SESSION_EXPIRY_DAYS * 24 * 60 * 60 * 1000,
  );
  const session = await encrypt({ userId, expiresAt: expiresAt.toISOString() });
  const cookieStore = await cookies();

  cookieStore.set(AUTH.SESSION_COOKIE, session, {
    httpOnly: true,
    secure: isProduction,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function updateSession() {
  const session = (await cookies()).get(AUTH.SESSION_COOKIE)?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(
    Date.now() + AUTH.SESSION_EXPIRY_DAYS * 24 * 60 * 60 * 1000,
  );

  const cookieStore = await cookies();
  cookieStore.set(AUTH.SESSION_COOKIE, session, {
    httpOnly: true,
    secure: isProduction,
    expires: expires,
    sameSite: 'lax',
    path: '/',
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH.SESSION_COOKIE);
}

export const verifySession = cache(async (withoutRedirect = false ): Promise<SessionPayload> => {
  const cookie = (await cookies()).get(AUTH.SESSION_COOKIE)?.value;

  const session = await decrypt(cookie);

  if (!session) {
    if (withoutRedirect) {
      return null as unknown as SessionPayload;
    }
      redirect(NAV_LINKS.login);
  }

  const expiresAt = session.exp! * 1000;

  if (expiresAt - Date.now() < AUTH.SESSION_REFRESH_THRESHOLD_MS) {
    await updateSession();
  }

  return session;
});
