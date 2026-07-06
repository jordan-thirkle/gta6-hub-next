'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url?: string;
  description?: string;
  className?: string;
}

export default function ShareButtons({
  title,
  url,
  description,
  className = '',
}: ShareButtonsProps) {
  const shareUrl = url ?? (typeof window !== 'undefined' ? window.location.href : '');
  const shareText = `${title}${description ? ` — ${description}` : ''}`;
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title,
          text: shareText,
          url: shareUrl,
        });
      } catch {
        // user cancelled
      }
    } else {
      // fallback to copy link
      handleCopyLink();
    }
  };

  const btnClass =
    'inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider border rounded transition-all duration-200 hover:-translate-y-0.5';

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted mr-1">
        Share
      </span>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue/60`}
        aria-label="Share on Twitter/X"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span className="hidden sm:inline">X</span>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue/60`}
        aria-label="Share on Facebook"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span className="hidden sm:inline">FB</span>
      </a>

      {/* Reddit */}
      <a
        href={`https://reddit.com/submit?url=${encodedUrl}&title=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} border-neon-orange/30 text-neon-orange hover:bg-neon-orange/10 hover:border-neon-orange/60`}
        aria-label="Share on Reddit"
        style={
          {
            '--neon-orange': '#ff4500',
            borderColor: 'rgba(255, 69, 0, 0.3)',
            color: '#ff4500',
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 69, 0, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(255, 69, 0, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.borderColor = 'rgba(255, 69, 0, 0.3)';
        }}
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0012 24 12 12 0 0012 0zm5.83 8.82a1.4 1.4 0 01.48 1.07 1.43 1.43 0 01-.57 1.14c.02.17.04.34.04.52 0 2.41-2.72 4.37-6.08 4.37s-6.08-1.96-6.08-4.37c0-.17.02-.35.04-.52a1.47 1.47 0 01-.6-1.15 1.4 1.4 0 011.42-1.42c.42 0 .8.18 1.07.48a5.94 5.94 0 013.2-.96l.6-2.82a.3.3 0 01.36-.24l2.02.42a1.06 1.06 0 011-.82c.59 0 1.07.48 1.07 1.07s-.48 1.07-1.07 1.07-1.07-.48-1.07-1.07l-1.8-.38-.54 2.5a5.9 5.9 0 013.17.96c.27-.3.65-.49 1.07-.49.41 0 .78.17 1.05.44zm-6.8 3.5c-.41 0-.74.33-.74.74s.33.74.74.74.74-.33.74-.74-.33-.74-.74-.74zm4.49.74c0-.4.33-.74.74-.74s.74.33.74.74-.33.74-.74.74-.74-.33-.74-.74zm-4.54 2.73c.84.68 2.1 1.03 3.32 1.03 1.22 0 2.48-.35 3.32-1.03a.38.38 0 10-.48-.6c-.7.56-1.8.87-2.84.87-1.04 0-2.14-.31-2.84-.87a.38.38 0 10-.48.6z" />
        </svg>
        <span className="hidden sm:inline">Reddit</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan/60`}
        aria-label="Share on WhatsApp"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:inline">WA</span>
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        className={`${btnClass} border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple/60`}
        aria-label="Copy link"
      >
        {copied ? (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        )}
        <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
      </button>

      {/* Native share (mobile) */}
      {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
        <button
          onClick={handleNativeShare}
          className={`${btnClass} border-neon-pink/30 text-neon-pink hover:bg-neon-pink/10 hover:border-neon-pink/60`}
          aria-label="Share"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <span className="hidden sm:inline">Share</span>
        </button>
      )}
    </div>
  );
}
