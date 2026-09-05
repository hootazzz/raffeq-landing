import Image from 'next/image';
import CountUp from '@/components/CountUp';
import {
  IconUsers, IconGlobe, IconChat,
  IconPlane, IconHotel, IconDoc, IconPin, IconTag,
  IconPlay, IconApple,
} from '@/components/Icons';

// Direct local APK — served from Railway (no external redirect).
const APK = '/downloads/raffeq.apk';
const IOS = '#'; // real App Store URL goes here

// Editable social-proof data
const STATS = [
  { icon: IconUsers, value: 150, label: 'مستخدم', tint: 'bg-[#F6D8DE] text-[#B85C7A]' },
  { icon: IconGlobe, value: 27, label: 'مسافر حول العالم', tint: 'bg-[#DED0F0] text-[#6C5AA6]' },
  { icon: IconChat, value: 20, label: 'محادثة يومية', tint: 'bg-[#EAD8E9] text-[#6C5AA6]' },
];

const FEATURES = [
  { icon: IconPlane, label: 'احجز رحلاتك بسهولة' },
  { icon: IconHotel, label: 'اختر أفضل الفنادق' },
  { icon: IconDoc, label: 'تأشيرتك في دقائق' },
  { icon: IconPin, label: 'اكتشف وجهات جديدة' },
  { icon: IconUsers, label: 'تواصل مع مجتمع المسافرين' },
  { icon: IconTag, label: 'عروض وخصومات حصرية' },
];

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
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#B7A9DC] to-[#6C5AA6] grid place-items-center shadow-md">
        <IconPlane className="w-5 h-5 text-white" />
      </div>
      <div className="leading-tight">
        <div className="text-xl font-black text-[#1E1B4B]">رفيق</div>
        <div className="text-[10px] tracking-[0.3em] font-bold text-[#6C5AA6]">RAFFEQ</div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* ─── HEADER + HERO ─── */}
      <section className="hero-bg relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-6 pb-16 sm:pb-24 lg:pb-32">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Logo />
            <span className="hidden sm:flex items-center gap-2 text-sm text-[#3D3766]">
              <span className="text-[#6C5AA6]">✦</span> تطبيق السفر المتكامل
            </span>
          </div>

          {/* Hero grid */}
          <div className="mt-10 md:mt-16 grid md:grid-cols-12 gap-10 md:gap-6 lg:gap-16 items-center">
            {/* Text column (right in RTL) */}
            <div className="order-2 md:order-1 md:col-span-5 text-right">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1] text-[#1E1B4B]">
                رفيقك في<br />
                كل <span className="text-[#6C5AA6]">رحلـة</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#3D3766] leading-relaxed max-w-md ml-auto mr-0">
                حجوزات طيران، فنادق، تأشيرات،<br className="hidden sm:block" />
                وكل خدمات السفر في تطبيق واحد.
              </p>
              <StoreButtons className="mt-8 justify-end" />
            </div>

            {/* Visual column (left in RTL) — full clean artwork, uncropped */}
            <div className="order-1 md:order-2 md:col-span-7 relative mx-auto w-full max-w-xl lg:max-w-none">
              <Image
                src="/hero.png"
                alt="تطبيق رفيق للسفر"
                width={1199}
                height={1312}
                priority
                sizes="(max-width: 768px) 92vw, (max-width: 1280px) 55vw, 720px"
                className="w-full h-auto"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="px-5 sm:px-8 -mt-6 sm:-mt-10 relative z-10">
        <div className="mx-auto max-w-5xl bg-white rounded-3xl shadow-xl shadow-purple-100/60 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4 justify-center sm:justify-start">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${s.tint} grid place-items-center flex-shrink-0`}>
                <s.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-black text-[#1E1B4B] tabular-nums">
                  <CountUp end={s.value} suffix=" ألف" prefix="+" />
                </div>
                <div className="text-xs sm:text-sm text-[#7A7295] mt-0.5">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-4 mb-10 sm:mb-12">
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

      {/* ─── SECONDARY PROMO ─── */}
      <section className="px-5 sm:px-8 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl bg-white rounded-3xl shadow-xl shadow-purple-100/60 p-5 sm:p-8 lg:p-10 grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="relative h-40 sm:h-44 lg:h-56 rounded-2xl overflow-hidden order-2 md:order-1">
            <Image src="/wing.png" alt="Airplane wing" fill sizes="(max-width: 1024px) 90vw, 500px" className="object-cover" />
          </div>
          <div className="text-right order-1 md:order-2">
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

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-[#EFE7F0]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 sm:py-10 grid sm:grid-cols-3 gap-6 text-right">
          <div>
            <Logo />
            <p className="mt-3 text-xs sm:text-sm text-[#7A7295] leading-relaxed">
              تطبيق السفر المتكامل — حجوزات الطيران، الفنادق، التأشيرات، ومجتمع المسافرين في مكان واحد.
            </p>
          </div>
          <div>
            <div className="font-bold text-[#1E1B4B] mb-2 text-sm">تواصل معنا</div>
            <ul className="space-y-1 text-xs sm:text-sm text-[#7A7295]">
              <li>hello@raffeq.app</li>
              <li>support@raffeq.app</li>
              <li>الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[#1E1B4B] mb-2 text-sm">تابعنا</div>
            <ul className="space-y-1 text-xs sm:text-sm text-[#7A7295]">
              <li>@raffeq · X</li>
              <li>@raffeq.app · Instagram</li>
              <li>@raffeq · TikTok</li>
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
