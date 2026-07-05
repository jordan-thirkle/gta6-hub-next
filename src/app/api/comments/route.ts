import { NextRequest, NextResponse } from 'next/server';
import { getComments, addComment, initDb } from '../../../lib/comments-db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const articleSlug = request.nextUrl.searchParams.get('slug');
  if (!articleSlug) {
    return NextResponse.json({ error: 'slug is required' }, { status: 400 });
  }
  await initDb();
  const comments = await getComments(articleSlug);
  return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, name, email, content } = body;
    
    if (!slug || !content?.trim()) {
      return NextResponse.json({ error: 'slug and content are required' }, { status: 400 });
    }

    await initDb();
    const result = await addComment(slug, name?.trim(), email?.trim(), content.trim());
    return NextResponse.json({ ok: true, id: result.lastInsertRowid });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
