import Link from 'next/link';

interface AffiliateCardProps {
  title: string;
  description?: string;
  price?: string;
  href: string;
  cta?: string;
  badge?: string;
  accent?: 'pink' | 'blue' | 'cyan' | 'purple';
}

export default function AffiliateCard({
  title,
  description,
  price,
  href,
  cta = 'Check price',
  badge = 'Partner offer',
  accent = 'pink',
}: AffiliateCardProps) {
  const neonClass = {
    pink: 'neon-card',
    blue: 'neon-card-blue',
    cyan: 'neon-card-cyan',
    purple: 'neon-card-purple',
  }[accent];

  const badgeColor = {
    pink: 'bg-neon-pink/10 text-neon-pink border-neon-pink/30',
    blue: 'bg-neon-blue/10 text-neon-blue border-neon-blue/30',
    cyan: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30',
    purple: 'bg-neon-purple/10 text-neon-purple border-neon-purple/30',
  }[accent];

  const ctaColor = {
    pink: 'bg-neon-pink text-white hover:bg-neon-pink/90',
    blue: 'bg-neon-blue text-black hover:bg-neon-blue/90',
    cyan: 'bg-neon-cyan text-black hover:bg-neon-cyan/90',
    purple: 'bg-neon-purple text-white hover:bg-neon-purple/90',
  }[accent];

  const isExternal = href.startsWith('http');

  const Comp = isExternal ? 'a' : Link;
  const extraProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer sponsored' }
    : {};

  return (
    <div
      className={`relative rounded-lg p-5 bg-bg-surface border transition-all duration-300 hover:-translate-y-1 ${
        accent === 'pink'
          ? 'border-neon-pink/20 hover:border-neon-pink/50 hover:shadow-[0_0_15px_rgba(255,45,149,0.2)]'
          : accent === 'blue'
            ? 'border-neon-blue/20 hover:border-neon-blue/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]'
            : accent === 'cyan'
              ? 'border-neon-cyan/20 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,245,212,0.2)]'
              : 'border-neon-purple/20 hover:border-neon-purple/50 hover:shadow-[0_0_15px_rgba(180,77,255,0.2)]'
      }`}
    >
      {/* Badge */}
      <span
        className={`inline-block text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 border rounded-sm ${badgeColor}`}
      >
        {badge}
      </span>

      {/* Title */}
      <h3 className="mt-3 text-sm font-medium text-text-main leading-snug">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="mt-1.5 text-xs text-text-muted leading-relaxed">
          {description}
        </p>
      )}

      {/* Price */}
      {price && (
        <p className="mt-2 text-lg font-display font-bold text-neon-cyan">
          {price}
        </p>
      )}

      {/* CTA */}
      <Comp
        href={href}
        {...(extraProps as Record<string, string>)}
        className={`mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all duration-200 ${ctaColor}`}
        aria-label={`${cta} for ${title}`}
      >
        {cta}
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Comp>
    </div>
  );
}
