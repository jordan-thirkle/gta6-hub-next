import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email?: string };
    const email = body?.email;
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    // Placeholder: wire Buttondown or Resend API key here before launch
    console.log('[Newsletter] subscribe attempt:', email);

    return NextResponse.json({ ok: true, message: 'Subscribed' });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
