import Image from 'next/image';
import CountUp from '@/components/CountUp';
import {
  IconUsers, IconGlobe, IconChat,
  IconPlane, IconHotel, IconDoc, IconPin, IconTag,
  IconPlay, IconApple,
} from '@/components/Icons';

const APK = '/downloads/raffeq.apk';
const IOS = '#'; // swap with real App Store URL

function StoreButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={APK} download="Raffeq-1.1.0.apk" className="store-btn" aria-label="Download on Google Play">
        <IconPlay className="icon" />
        <span className="text-right">
          <span className="caption block">احصل عليه من</span>
          <span className="name block">Google Play</span>
        </span>
      </a>
      <a href={IOS} className="store-btn" aria-label="Download on the App Store">
        <IconApple className="icon" />
        <span className="text-right">
          <span className="caption block">تنزيل من</span>
          <span className="name block">App Store</span>
        </span>
      </a>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B7A9DC] to-[#6C5AA6] grid place-items-center shadow-md">
        <IconPlane className="w-5 h-5 text-white" />
      </div>
      <div className="leading-tight">
        <div className="text-xl font-black text-[#1E1B4B]">رفيق</div>
        <div className="text-[9px] tracking-[0.3em] font-bold text-[#6C5AA6]">RAFFEQ</div>
      </div>
    </div>
  );
}

// Hotspot coordinates as % of the 1024x1536 reference image
const HOTSPOTS = [
  { href: APK, download: 'Raffeq-1.1.0.apk', top: 38.5, left: 3.9, w: 20.5, h: 4.7, label: 'Google Play (hero)' },
  { href: IOS, top: 38.5, left: 24.9, w: 20.5, h: 4.7, label: 'App Store (hero)' },
  { href: IOS, top: 94.0, left: 47.8, w: 19.0, h: 4.3, label: 'App Store (CTA)' },
  { href: APK, download: 'Raffeq-1.1.0.apk', top: 94.0, left: 67.5, w: 19.7, h: 4.3, label: 'Google Play (CTA)' },
];

const STATS = [
  { icon: IconChat, value: 20, suffix: ' ألف', label: 'محادثة يومية', tint: 'bg-[#EAD8E9] text-[#6C5AA6]' },
  { icon: IconGlobe, value: 27, suffix: ' ألف', label: 'مسافر حول العالم', tint: 'bg-[#DED0F0] text-[#6C5AA6]' },
  { icon: IconUsers, value: 150, suffix: ' ألف', label: 'مستخدم', tint: 'bg-[#F6D8DE] text-[#B85C7A]' },
];

const FEATURES = [
  { icon: IconTag, label: 'عروض وخصومات حصرية' },
  { icon: IconUsers, label: 'تواصل مع مجتمع المسافرين' },
  { icon: IconPin, label: 'اكتشف وجهات جديدة' },
  { icon: IconDoc, label: 'تأشيرتك في دقائق' },
  { icon: IconHotel, label: 'اختر أفضل الفنادق' },
  { icon: IconPlane, label: 'احجز رحلاتك بسهولة' },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <h1 className="sr-only">رفيق RAFFEQ — رفيقك في كل رحلة. حجوزات طيران، فنادق، تأشيرات، وكل خدمات السفر في تطبيق واحد.</h1>

      {/* ────────── HERO ────────── */}

      {/* Mobile hero: native responsive layout */}
      <section className="lg:hidden hero-bg px-5 pt-6 pb-10">
        <div className="flex items-center justify-between">
          <Logo />
          <span className="text-xs text-[#3D3766] flex items-center gap-1">
            <span className="text-[#6C5AA6]">✦</span> تطبيق السفر المتكامل
          </span>
        </div>

        <div className="mt-8 text-right">
          <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] text-[#1E1B4B]">
            رفيقك في<br />كل <span className="text-[#6C5AA6]">رحلـة</span>
          </h2>
          <p className="mt-4 text-base text-[#3D3766]">
            حجوزات طيران، فنادق، تأشيرات،<br />وكل خدمات السفر في تطبيق واحد.
          </p>
        </div>

        {/* Cropped hero visual using the reference image, focused on the phones */}
        <div className="relative mx-auto mt-6 w-full max-w-sm aspect-[4/5] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/reference.png"
            alt="RAFFEQ app screens"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-[65%_55%] scale-[1.55]"
            priority
          />
        </div>

        <StoreButtons className="mt-6 justify-center" />
      </section>

      {/* Desktop hero: pixel-perfect reference image with clickable overlays */}
      <section className="hidden lg:block">
        <div className="relative mx-auto w-full max-w-[1024px]">
          <Image
            src="/reference.png"
            alt="رفيق RAFFEQ - تطبيق السفر المتكامل"
            width={1024}
            height={1536}
            priority
            sizes="1024px"
            className="w-full h-auto block select-none"
          />
          {HOTSPOTS.map((h) => (
            <a
              key={h.label}
              href={h.href}
              {...(h.download ? { download: h.download } : {})}
              aria-label={h.label}
              className="absolute rounded-2xl hover:bg-white/10 focus:outline focus:outline-2 focus:outline-white/60"
              style={{ top: `${h.top}%`, left: `${h.left}%`, width: `${h.w}%`, height: `${h.h}%` }}
            />
          ))}
        </div>
      </section>

      {/* ────────── STATS (native, animated) ────────── */}
      <section className="px-5 -mt-4 lg:mt-0 lg:px-6 relative z-10">
        <div className="mx-auto max-w-5xl bg-white rounded-3xl shadow-xl shadow-purple-100/60 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4 justify-center sm:justify-start">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${s.tint} grid place-items-center flex-shrink-0`}>
                <s.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-black text-[#1E1B4B] tabular-nums">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-[#7A7295] mt-0.5">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────── FEATURES ────────── */}
      <section className="px-5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-8 sm:w-10 bg-[#B7A9DC]" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1E1B4B]">
              كل خدمات السفر بين يديك
            </h2>
            <span className="h-px w-8 sm:w-10 bg-[#B7A9DC]" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {FEATURES.map((f) => (
              <div key={f.label} className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-md shadow-purple-100/50 hover:-translate-y-1 transition">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-[#EFE7F0] grid place-items-center text-[#6C5AA6]">
                  <f.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm font-bold text-[#1E1B4B] leading-snug">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── FINAL CTA ────────── */}
      <section className="px-5 pb-16 lg:pb-20">
        <div className="mx-auto max-w-6xl bg-white rounded-3xl shadow-xl shadow-purple-100/60 p-5 sm:p-8 lg:p-10 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="relative h-32 sm:h-40 lg:h-48 rounded-2xl overflow-hidden bg-gradient-to-b from-[#F7D9E6] via-[#E4D2F0] to-[#B7A9DC] order-2 lg:order-1">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute top-4 left-6 w-24 h-8 bg-white/60 blur-lg rounded-full" />
              <div className="absolute bottom-4 right-10 w-32 h-10 bg-white/50 blur-xl rounded-full" />
            </div>
            <IconPlane className="absolute top-6 right-8 w-12 h-12 text-white/95 rotate-12" />
          </div>
          <div className="text-right order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#1E1B4B]">
              رحلتك القادمة تبدأ من هنا
            </h3>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#3D3766]">
              حمّل تطبيق رفيق الآن وابدأ اكتشاف العالم
            </p>
            <StoreButtons className="mt-5 justify-end" />
          </div>
        </div>
      </section>

      {/* ────────── FOOTER ────────── */}
      <footer className="bg-white border-t border-[#EFE7F0]">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:py-10 grid sm:grid-cols-3 gap-6 text-right">
          <div>
            <Logo />
            <p className="mt-3 text-xs sm:text-sm text-[#7A7295] leading-relaxed">
              تطبيق السفر المتكامل — حجوزات الطيران، الفنادق، التأشيرات، ومجتمع المسافرين في مكان واحد.
            </p>
          </div>
          <div>
            <div className="font-bold text-[#1E1B4B] mb-2 text-sm">تواصل معنا</div>
            <ul className="space-y-1 text-xs sm:text-sm text-[#7A7295]">
              <li>hello@raffeq.app</li><li>support@raffeq.app</li><li>الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[#1E1B4B] mb-2 text-sm">تابعنا</div>
            <ul className="space-y-1 text-xs sm:text-sm text-[#7A7295]">
              <li>@raffeq · X</li><li>@raffeq.app · Instagram</li><li>@raffeq · TikTok</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#EFE7F0] py-3 text-center text-[11px] text-[#7A7295]">
          © {new Date().getFullYear()} RAFFEQ. جميع الحقوق محفوظة.
        </div>
      </footer>
    </main>
  );
}
