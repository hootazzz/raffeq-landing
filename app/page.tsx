import Logo from '@/components/Logo';
import PhoneMockups from '@/components/PhoneMockups';
import StoreButtons from '@/components/StoreButtons';
import StatsRow from '@/components/StatsRow';
import FeaturesGrid from '@/components/FeaturesGrid';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="hero-bg relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-8 pb-16 md:pt-12 md:pb-24">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center gap-2 text-raffeq-inkSoft text-sm">
              <span className="text-raffeq-purple">✦</span>
              <span>تطبيق السفر المتكامل</span>
            </div>
          </div>

          {/* Hero content */}
          <div className="mt-10 grid md:grid-cols-2 gap-10 md:gap-6 items-center">
            {/* Right column in RTL — text */}
            <div className="order-2 md:order-1">
              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] text-raffeq-ink">
                رفيقك في
                <br />
                كل <span className="text-raffeq-purple">رحلـة</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-raffeq-inkSoft max-w-md leading-relaxed">
                حجوزات طيران، فنادق، تأشيرات،
                <br className="hidden md:block" />
                وكل خدمات السفر في تطبيق واحد.
              </p>
              <div className="mt-8">
                <StoreButtons />
              </div>
            </div>

            {/* Left column in RTL — phones + arch */}
            <div className="order-1 md:order-2 relative">
              <PhoneMockups />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-8 md:-mt-14 z-10">
        <div className="mx-auto max-w-6xl px-6">
          <StatsRow />
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-px w-10 bg-raffeq-lilac" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-raffeq-ink">
              كل خدمات السفر بين يديك
            </h2>
            <span className="h-px w-10 bg-raffeq-lilac" />
          </div>
          <FeaturesGrid />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <FinalCta />
        </div>
      </section>

      <Footer />
    </main>
  );
}
