import { createClient } from '@libsql/client';

// Uses local SQLite file for dev. Deploy with Turso remote for production.
function getDb() {
  const url = process.env.TURSO_DB_URL || 'file:comments.db';
  const authToken = process.env.TURSO_DB_TOKEN;
  
  if (url.startsWith('file:')) {
    return createClient({ url });
  }
  
  return createClient({
    url,
    authToken,
  });
}

let initialized = false;

export async function initDb() {
  if (initialized) return;
  const db = getDb();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL DEFAULT 'Anonymous',
      email TEXT,
      content TEXT NOT NULL,
      article_slug TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  `);
  initialized = true;
}

export async function getComments(articleSlug: string) {
  const db = getDb();
  const result = await db.execute({
    sql: 'SELECT id, name, content, article_slug, created_at FROM comments WHERE article_slug = ? ORDER BY created_at DESC',
    args: [articleSlug],
  });
  return result.rows;
}

export async function addComment(articleSlug: string, name: string, email: string, content: string) {
  const db = getDb();
  const now = new Date().toISOString();
  const result = await db.execute({
    sql: 'INSERT INTO comments (name, email, content, article_slug, created_at) VALUES (?, ?, ?, ?, ?)',
    args: [name || 'Anonymous', email || null, content, articleSlug, now],
  });
  return result;
}
