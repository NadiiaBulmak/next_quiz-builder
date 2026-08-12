import { AUTH } from '@/constants/auth';
import { NextResponse } from 'next/server';
import { client } from '@/lib/google';

export async function GET() {
  const url = client.generateAuthUrl({
    access_type: AUTH.GOOGLE_OAUTH.ACCESS_TYPE,
    scope: [...AUTH.GOOGLE_OAUTH.SCOPE],
    prompt: AUTH.GOOGLE_OAUTH.PROMPT,
  });

  return NextResponse.redirect(url);
}
