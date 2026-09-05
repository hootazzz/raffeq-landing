export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-raffeq-lilac to-raffeq-purple grid place-items-center shadow-soft">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
          <path d="M2.5 19.5l19-7.5-19-7.5 3 7.5-3 7.5zm2.4-6.9L14 12l-9.1-.6.9-3.1L18.7 12 5.8 15.7 4.9 12.6z" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-2xl font-black text-raffeq-ink">رفيق</div>
        <div className="text-[10px] tracking-[0.3em] font-bold text-raffeq-purple">
          RAFFEQ
        </div>
      </div>
    </div>
  );
}
