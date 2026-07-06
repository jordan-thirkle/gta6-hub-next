'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [consented, setConsented] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consented) return;
    setStatus('loading');
    setMessage(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consented }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus('success');
        setMessage(data.message || 'Subscribed! Check your inbox.');
        setEmail('');
        setConsented(false);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={submit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={status === 'loading'}
          className="flex-1 border border-border bg-transparent px-3 py-2 text-sm text-text-main placeholder:text-text-muted/50 focus:border-neon-pink/50 focus:outline-none transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading' || !consented || !email}
          className="border border-neon-pink/40 text-neon-pink px-5 py-2 text-sm font-mono uppercase tracking-wider hover:bg-neon-pink/10 hover:border-neon-pink/70 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <span className="inline-flex items-center gap-2">
              <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending
            </span>
          ) : (
            'Subscribe'
          )}
        </button>
      </div>

      {/* Privacy checkbox */}
      <label className="mt-3 flex items-start gap-2 cursor-pointer group">
        <input
          type="checkbox"
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
          disabled={status === 'loading'}
          className="mt-0.5 accent-neon-pink"
        />
        <span className="text-[11px] text-text-muted leading-relaxed group-hover:text-text-secondary transition-colors">
          I agree to receive email updates and acknowledge the{' '}
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-neon-pink transition-colors">
            privacy policy
          </a>
          . No spam, unsubscribe anytime.
        </span>
      </label>

      {/* Status messages */}
      {status === 'success' && (
        <p className="mt-3 text-xs text-neon-cyan flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          {message}
        </p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-xs text-neon-pink flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          {message}
        </p>
      )}
    </form>
  );
}
