import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const DATA_DIR = path.join(process.cwd(), 'data');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {
    // directory exists
  }
}

async function readSubscribers(): Promise<{ email: string; consented: boolean; subscribedAt: string }[]> {
  try {
    await ensureDataDir();
    const raw = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeSubscribers(
  subscribers: { email: string; consented: boolean; subscribedAt: string }[],
) {
  await ensureDataDir();
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      email?: string;
      consented?: boolean;
    };
    const email = body?.email?.trim().toLowerCase();
    const consented = body?.consented === true;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!consented) {
      return NextResponse.json(
        { error: 'You must agree to the privacy policy to subscribe.' },
        { status: 400 },
      );
    }

    const subscribers = await readSubscribers();
    const alreadyExists = subscribers.some((s) => s.email === email);

    if (alreadyExists) {
      return NextResponse.json({ ok: true, message: 'Already subscribed. Thank you!' });
    }

    subscribers.push({
      email,
      consented: true,
      subscribedAt: new Date().toISOString(),
    });

    await writeSubscribers(subscribers);

    console.log(`[Newsletter] New subscriber: ${email} (total: ${subscribers.length})`);

    return NextResponse.json({ ok: true, message: 'Subscribed! Check your inbox for confirmation.' });
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}

export async function GET() {
  const subscribers = await readSubscribers();
  return NextResponse.json({ count: subscribers.length, subscribers });
}
