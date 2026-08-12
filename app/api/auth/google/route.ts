import { NextResponse } from 'next/server';
import { client } from '@/lib/google';

export async function GET() {
  const url = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['openid', 'email', 'profile'],
    prompt: 'select_account',
  });

  return NextResponse.redirect(url);
}