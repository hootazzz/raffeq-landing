const features = [
  { icon: '🏷️', label: 'عروض وخصومات حصرية' },
  { icon: '👥', label: 'تواصل مع مجتمع المسافرين' },
  { icon: '📍', label: 'اكتشف وجهات جديدة' },
  { icon: '📄', label: 'تأشيرتك في دقائق' },
  { icon: '🏛️', label: 'اختر أفضل الفنادق' },
  { icon: '✈️', label: 'احجز رحلاتك بسهولة' },
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {features.map((f) => (
        <div
          key={f.label}
          className="bg-white rounded-2xl p-5 text-center shadow-card hover:-translate-y-1 transition"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-raffeq-bgSoft grid place-items-center text-2xl">
            {f.icon}
          </div>
          <div className="mt-4 text-sm font-bold text-raffeq-ink leading-snug">{f.label}</div>
        </div>
      ))}
    </div>
  );
}
