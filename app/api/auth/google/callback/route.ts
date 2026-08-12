import { prisma } from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import { client } from '@/lib/google';
import { createSession } from '@/services/sessions';
import { NAV_LINKS } from '@/constants/nav_links';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(
      new URL('/login?error=google_auth_failed', request.url),
    );
  }

  try {
    const { tokens } = await client.getToken(code);

    const response = await fetch(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      },
    );

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

    return NextResponse.redirect(
      new URL('/login?error=google_auth_failed', request.url),
    );
  }
}
