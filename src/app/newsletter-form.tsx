'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Subscribing...');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus(data.ok ? 'Subscribed.' : data.error || 'Error');
      if (data.ok) setEmail('');
    } catch {
      setStatus('Error');
    }
  };
  return (
    <form onSubmit={submit} className="mt-4 flex flex-col sm:flex-row gap-3">
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="border border-border bg-transparent px-3 py-2 text-sm w-full sm:w-auto" />
      <button type="submit" className="border border-border px-4 py-2 text-sm hover:border-border-strong">Subscribe</button>
      {status && <span className="text-xs text-tertiary">{status}</span>}
    </form>
  );
}
