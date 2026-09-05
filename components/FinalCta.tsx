import StoreButtons from './StoreButtons';

export default function FinalCta() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-card p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
      <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-b from-[#F7D9E6] via-[#E4D2F0] to-[#B7A9DC]">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-6 left-6 w-24 h-8 bg-white/60 blur-lg rounded-full" />
          <div className="absolute bottom-4 right-10 w-32 h-10 bg-white/50 blur-xl rounded-full" />
        </div>
        <svg viewBox="0 0 100 100" className="absolute top-6 right-6 w-16 text-white/90" fill="currentColor">
          <path d="M15 55l70-20-10 25L35 55l-5 20-10-5z" />
        </svg>
      </div>
      <div className="text-right">
        <h3 className="text-2xl md:text-3xl font-black text-raffeq-ink">
          رحلتك القادمة تبدأ من هنا
        </h3>
        <p className="mt-3 text-raffeq-inkSoft">
          حمّل تطبيق رفيق الآن وابدأ اكتشاف العالم
        </p>
        <div className="mt-6 flex justify-start">
          <StoreButtons />
        </div>
      </div>
    </div>
  );
}
