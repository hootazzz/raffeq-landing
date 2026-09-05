import Image from 'next/image';

// Pixel-perfect landing: the reference design IS the hero.
// Coordinates are % of the 1024x1536 reference image.
const APK = '/downloads/raffeq.apk';
const IOS = '#'; // swap with real App Store URL when live

const hotspots = [
  // Hero row (left side, side by side)
  { label: 'Google Play (hero)', href: APK, download: 'Raffeq-1.1.0.apk', top: 38.5, left: 3.9, width: 20.5, height: 4.7 },
  { label: 'App Store (hero)', href: IOS, top: 38.5, left: 24.9, width: 20.5, height: 4.7 },
  // Bottom CTA (inside plane-wing card)
  { label: 'App Store (CTA)', href: IOS, top: 94.0, left: 47.8, width: 19.0, height: 4.3 },
  { label: 'Google Play (CTA)', href: APK, download: 'Raffeq-1.1.0.apk', top: 94.0, left: 67.5, width: 19.7, height: 4.3 },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F1E8F1]">
      {/* SR-only text for SEO/accessibility */}
      <h1 className="sr-only">رفيق RAFFEQ — رفيقك في كل رحلة. حجوزات طيران، فنادق، تأشيرات، وكل خدمات السفر في تطبيق واحد.</h1>
      <p className="sr-only">حمّل تطبيق رفيق الآن — متوفر على Google Play و App Store.</p>

      {/* Pixel-perfect design canvas */}
      <div className="relative mx-auto w-full max-w-[1024px]">
        <Image
          src="/reference.png"
          alt="رفيق RAFFEQ - تطبيق السفر المتكامل"
          width={1024}
          height={1536}
          priority
          sizes="100vw"
          className="w-full h-auto block select-none"
        />

        {hotspots.map((h) => (
          <a
            key={h.label}
            href={h.href}
            {...(h.download ? { download: h.download } : {})}
            aria-label={h.label}
            className="absolute rounded-2xl transition hover:bg-white/10 focus:outline focus:outline-2 focus:outline-white/60"
            style={{
              top: `${h.top}%`,
              left: `${h.left}%`,
              width: `${h.width}%`,
              height: `${h.height}%`,
            }}
          />
        ))}
      </div>
    </main>
  );
}
