'use client';
import { useState, useEffect, useCallback } from 'react';
import { HiX, HiMail } from 'react-icons/hi';

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true); // Start hidden
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    // Check if already dismissed
    if (localStorage.getItem('gta6-exit-dismissed')) return;

    let timer: NodeJS.Timeout;
    let enabled = false;

    // Enable after 8s on page
    timer = setTimeout(() => { enabled = true; }, 8000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (enabled && e.clientY <= 0) {
        setVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    localStorage.setItem('gta6-exit-dismissed', 'true');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus('success');
      setTimeout(dismiss, 2000);
    } catch {
      setStatus('idle');
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={dismiss} />

      {/* Popup */}
      <div className="relative max-w-md w-full neon-card rounded-2xl border border-neon-pink/30 bg-bg p-8 shadow-2xl shadow-neon-pink/10 animate-in">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-text-muted hover:text-text-main transition-colors"
          aria-label="Close popup"
        >
          <HiX size={20} />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-pink/10 text-neon-pink mb-4">
            <HiMail size={24} />
          </div>

          {status === 'success' ? (
            <>
              <h2 className="font-display text-xl text-gradient-vice mb-2">You&apos;re in! 🎮</h2>
              <p className="text-text-muted text-sm">Watch for updates on GTA 6 launch, trailers, and preorder deals.</p>
            </>
          ) : (
            <>
              <h2 className="font-display text-xl text-gradient-vice mb-2">Don&apos;t Miss GTA 6 Launch</h2>
              <p className="text-text-muted text-sm mb-6">
                Get notified when new trailers drop, preorders open wider, and launch week events are announced.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-main placeholder:text-text-muted/40 focus:outline-none focus:border-neon-pink/50 transition-colors text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-lg bg-neon-pink text-white font-semibold text-sm hover:bg-neon-pink/80 transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Get GTA 6 Updates'}
                </button>
              </form>

              <p className="text-[11px] text-text-muted/50 mt-4">
                No spam. Unsubscribe anytime. Vice City awaits.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
