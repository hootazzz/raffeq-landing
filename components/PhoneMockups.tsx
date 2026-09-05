export default function PhoneMockups() {
  return (
    <div className="relative h-[520px] md:h-[640px]">
      {/* Arch/window with sky */}
      <div className="absolute inset-x-6 top-0 h-[70%] arch overflow-hidden shadow-card">
        <div className="w-full h-full bg-gradient-to-b from-[#F7D9E6] via-[#E4D2F0] to-[#C7B6E4] relative">
          {/* clouds */}
          <div className="absolute inset-0 opacity-70">
            <div className="absolute top-10 left-6 w-24 h-8 bg-white/60 blur-lg rounded-full" />
            <div className="absolute top-20 right-8 w-32 h-10 bg-white/50 blur-xl rounded-full" />
            <div className="absolute bottom-16 left-1/3 w-40 h-10 bg-white/50 blur-xl rounded-full" />
          </div>
          {/* plane */}
          <svg viewBox="0 0 100 100" className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 text-white/90" fill="currentColor">
            <path d="M50 20l25 30-8 3-12-8-4 20 5 4v3l-6-2-6 2v-3l5-4-4-20-12 8-8-3z" />
          </svg>
        </div>
      </div>

      {/* Ground shelf */}
      <div className="absolute inset-x-0 bottom-14 h-24 bg-gradient-to-b from-[#EDE1EC] to-[#E1D2E1] rounded-3xl" />

      {/* Suitcase + travel props (right side) */}
      <div className="absolute bottom-16 right-2 md:right-4 flex items-end gap-2">
        {/* neck pillow */}
        <div className="w-16 h-10 bg-[#E9D8C7] rounded-full mb-1" />
        {/* coffee */}
        <div className="w-6 h-10 bg-white rounded-b-md rounded-t-sm shadow" />
        {/* suitcase */}
        <div className="relative">
          <div className="w-4 h-3 mx-auto bg-[#8E7BC4] rounded-t" />
          <div className="w-24 h-32 bg-gradient-to-b from-[#B7A9DC] to-[#9E8FCC] rounded-2xl shadow-soft border-4 border-[#C9BCE6]" />
        </div>
      </div>

      {/* Phone: LEFT (welcome screen) */}
      <div className="absolute left-2 md:left-6 top-16 md:top-20 w-[46%] max-w-[210px] rotate-[-4deg] z-10">
        <PhoneFrame>
          <div className="h-full w-full bg-white p-3 flex flex-col gap-3 text-right">
            <div className="text-center">
              <div className="text-[10px] font-bold text-raffeq-ink">مرحباً بك في رفيق</div>
              <div className="text-[7px] text-raffeq-muted mt-1">اكتشف عالم المسافرين وتواصل مع مسافرين مثلك</div>
            </div>
            <div className="rounded-full bg-raffeq-bgSoft h-6 flex items-center justify-end px-3 text-[7px] text-raffeq-muted">
              ابحث عن وجهة أو نشاط 🔍
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {['🧑‍🤝‍🧑', '🏛️', '📄', '✈️'].map((e, i) => (
                <div key={i} className="aspect-square bg-raffeq-bgSoft rounded-xl grid place-items-center text-sm">
                  {e}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[7px] text-raffeq-purple">عرض الكل</div>
              <div className="text-[9px] font-bold text-raffeq-ink">وجهات شائعة</div>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-[4/5] rounded-xl bg-gradient-to-b from-[#C7B6E4] to-[#8E7BC4]" />
              ))}
            </div>
            <div className="mt-auto rounded-xl bg-raffeq-bgSoft p-2 text-[7px] text-raffeq-inkSoft text-center">
              احصل على تأشيرتك بسهولة
            </div>
          </div>
        </PhoneFrame>
      </div>

      {/* Phone: RIGHT (flights screen) */}
      <div className="absolute right-2 md:right-8 top-8 md:top-10 w-[48%] max-w-[220px] rotate-[3deg] z-20">
        <PhoneFrame>
          <div className="h-full w-full bg-white p-3 flex flex-col gap-2 text-right">
            <div className="text-center text-[10px] font-bold text-raffeq-ink">الرحلات</div>
            <div className="flex gap-1 text-[7px] font-bold">
              <div className="flex-1 py-1 rounded-full bg-raffeq-purple text-white text-center">ذهاب وعودة</div>
              <div className="flex-1 py-1 rounded-full bg-raffeq-bgSoft text-raffeq-muted text-center">وجهات متعددة</div>
              <div className="flex-1 py-1 rounded-full bg-raffeq-bgSoft text-raffeq-muted text-center">ذهاب فقط</div>
            </div>
            <div className="rounded-xl border border-raffeq-bgSoft p-2 text-[8px] space-y-1.5">
              <div className="flex justify-between items-center">
                <div className="font-bold text-raffeq-ink">CAI <span className="text-raffeq-muted font-normal">القاهرة</span></div>
                <div className="text-raffeq-purple">→</div>
                <div className="font-bold text-raffeq-ink"><span className="text-raffeq-muted font-normal">دبي</span> DXB</div>
              </div>
              <div className="flex justify-between text-raffeq-muted">
                <span>1</span>
                <span>📅 12 مايو 2024</span>
              </div>
              <div className="flex justify-between text-raffeq-muted">
                <span>1</span>
                <span>المسافر · الدرجة الاقتصادية</span>
              </div>
            </div>
            <button className="w-full py-2 rounded-xl bg-raffeq-purple text-white text-[9px] font-bold">بحث</button>
            <div className="text-[9px] font-bold text-raffeq-ink text-right mt-1">عروض مميزة</div>
            <div className="rounded-xl bg-gradient-to-l from-[#B7A9DC] to-[#8E7BC4] p-2 text-white text-[8px] flex justify-between items-end h-16">
              <div>
                <div>SAR 820</div>
                <div className="opacity-70 line-through text-[7px]">SAR 1200</div>
              </div>
              <div>✈️ دبي</div>
            </div>
            <div className="mt-auto flex justify-between text-[7px] text-raffeq-muted pt-1 border-t border-raffeq-bgSoft">
              <span>🏠 الرئيسية</span>
              <span>✈️ الرحلات</span>
              <span>📄 التأشيرات</span>
              <span>💬 المجتمع</span>
              <span>👤 حسابي</span>
            </div>
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[2rem] bg-neutral-900 p-1.5 shadow-soft aspect-[9/19]">
      <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-white">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3 bg-neutral-900 rounded-full z-30" />
        {children}
      </div>
    </div>
  );
}
