'use client';
import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  name: string;
  content: string;
  article_slug: string;
  created_at: string;
}

export default function Comments({ articleSlug }: { articleSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { loadComments(); }, [articleSlug]);

  const loadComments = async () => {
    try {
      const res = await fetch(`/api/comments?slug=${articleSlug}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch {} finally {
      setLoading(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: articleSlug, name: name.trim() || 'Anonymous', email: email.trim(), content: content.trim() }),
      });
      if (res.ok) {
        setContent('');
        loadComments();
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to post');
      }
    } catch {
      setError('Network error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-12 border-t border-border pt-8">
      <h2 className="text-base font-medium">Comments ({comments.length})</h2>

      <form onSubmit={submit} className="mt-4 space-y-3">
        <div className="flex gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="flex-1 border border-border bg-transparent px-3 py-2 text-sm"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email (optional, not shown)"
            className="flex-1 border border-border bg-transparent px-3 py-2 text-sm"
          />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts..."
          rows={3}
          className="w-full border border-border bg-transparent p-3 text-sm resize-none"
          required
        />
        {error && <p className="text-[10px] text-accent font-mono">{error}</p>}
        <button
          type="submit"
          disabled={submitting || !content.trim()}
          className="border border-border px-4 py-2 text-sm hover:border-accent transition-colors disabled:opacity-30"
        >
          {submitting ? 'Posting...' : 'Post comment'}
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {loading && <p className="text-xs text-tertiary font-mono">Loading comments...</p>}
        {!loading && comments.length === 0 && (
          <p className="text-xs text-tertiary font-mono">No comments yet. Be the first!</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="border border-border p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-[8px] font-mono text-accent">
                {(c.name || 'A')[0].toUpperCase()}
              </div>
              <span className="text-xs font-medium">{c.name || 'Anonymous'}</span>
              <span className="text-[10px] text-tertiary font-mono">{new Date(c.created_at + 'Z').toLocaleDateString()}</span>
            </div>
            <p className="text-sm text-secondary">{c.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
