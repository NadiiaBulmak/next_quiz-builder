import { AUTH } from '@/constants/auth';
import { API_ENDPOINTS } from '@/constants/api';
import { NAV_LINKS } from '@/constants/nav_links';
import { prisma } from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import { client } from '@/lib/google';
import { createSession } from '@/services/sessions';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get(AUTH.GOOGLE_OAUTH.CODE_PARAM);

  if (!code) {
    const loginErrorUrl = new URL(NAV_LINKS.login, request.url);
    loginErrorUrl.searchParams.set(
      AUTH.GOOGLE_OAUTH.ERROR_PARAM,
      AUTH.GOOGLE_AUTH_ERROR,
    );
    return NextResponse.redirect(loginErrorUrl);
  }

  try {
    const { tokens } = await client.getToken(code);

    const response = await fetch(API_ENDPOINTS.GOOGLE_USER_INFO, {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Google user profile');
    }

    const googleUser = await response.json();

    const { sub: googleId, email, name, picture } = googleUser;

    if (!email || !googleId) {
      throw new Error('Invalid Google user data');
    }

    let user = await prisma.user.findUnique({
      where: {
        googleId,
      },
    });

    if (!user) {
      user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (user) {
        user = await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            googleId,
            image: picture,
          },
        });
      }
    }

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
          image: picture,
          googleId,
        },
      });
    }

    await createSession(user.id);

    return NextResponse.redirect(new URL(NAV_LINKS.quizzes.all, request.url));
  } catch (error) {
    console.error('Google authentication failed:', error);

    const loginErrorUrl = new URL(NAV_LINKS.login, request.url);
    loginErrorUrl.searchParams.set(
      AUTH.GOOGLE_OAUTH.ERROR_PARAM,
      AUTH.GOOGLE_AUTH_ERROR,
    );

    return NextResponse.redirect(loginErrorUrl);
  }
}
