type Props = { variant?: 'light' | 'dark' };

export default function StoreButtons({ variant = 'dark' }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Google Play → APK */}
      <a
        href="/downloads/raffeq.apk"
        download="Raffeq-1.1.0.apk"
        className="group inline-flex items-center gap-3 bg-black text-white rounded-2xl px-5 py-3 shadow-soft hover:scale-[1.02] transition"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1L13 12.1v-.2L3.7 2.3zM16.8 15.2l-3.2-3.1v-.2l3.2-3.1.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.9 2.2zM13.6 12.6L4.3 22c.4.4 1 .4 1.7 0l10.9-6.2-3.3-3.2zM4.3 2l9.3 9.4 3.3-3.2L6 2c-.7-.4-1.3-.4-1.7 0z" />
        </svg>
        <div className="text-right leading-tight">
          <div className="text-[10px] opacity-80">احصل عليه من</div>
          <div className="text-sm font-bold">Google Play</div>
        </div>
      </a>

      {/* App Store — clean placeholder link, replace href later */}
      <a
        href="#"
        className="group inline-flex items-center gap-3 bg-black text-white rounded-2xl px-5 py-3 shadow-soft hover:scale-[1.02] transition"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <div className="text-right leading-tight">
          <div className="text-[10px] opacity-80">تنزيل من</div>
          <div className="text-sm font-bold">App Store</div>
        </div>
      </a>
    </div>
  );
}
