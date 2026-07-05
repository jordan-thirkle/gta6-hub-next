export function YoutubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="aspect-video border border-border overflow-hidden my-6">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
}

export function ImageGallery({ images }: { images: { src: string; alt: string; caption?: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-6">
      {images.map((img, i) => (
        <figure key={i} className="border border-border overflow-hidden">
          <div className="aspect-video bg-surface flex items-center justify-center">
            <span className="text-[10px] text-tertiary font-mono px-4 text-center">
              {img.alt}
              <br />
              <span className="text-[8px]">(Screenshot placeholder — replace with official image)</span>
            </span>
          </div>
          {img.caption && (
            <figcaption className="p-2 text-[10px] text-tertiary font-mono border-t border-border">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export function GallerySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-base font-medium border-b border-border pb-2">{title}</h2>
      {children}
    </section>
  );
}
