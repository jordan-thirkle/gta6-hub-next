export function AffiliateLink({ title, href, label = 'Check price' }: { title: string; href: string; label?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener sponsored" className="block border border-border p-4 hover:border-border-strong transition-all">
      <div className="text-[10px] text-tertiary font-mono mb-2">Partner offer</div>
      <div className="text-sm">{title}</div>
      <span className="mt-3 inline-block text-xs underline">{label}</span>
    </a>
  );
}

export function AdSlot({ label = 'Ad' }: { label?: string }) {
  return (
    <div className="border border-dashed border-border p-8 text-center text-[10px] text-tertiary font-mono">
      <span>{label} — wire TinyAdz / Carbon / custom placement</span>
    </div>
  );
}
