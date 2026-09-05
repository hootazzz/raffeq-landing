const stats = [
  { icon: '💬', value: '+20 ألف', label: 'محادثة يومية', tint: 'bg-[#EAD8E9]' },
  { icon: '🌐', value: '+27 ألف', label: 'مسافر حول العالم', tint: 'bg-[#DED0F0]' },
  { icon: '👥', value: '+150 ألف', label: 'مستخدم', tint: 'bg-[#F6D8DE]' },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-3xl p-6 md:p-8 shadow-card">
      {stats.map((s) => (
        <div key={s.label} className="flex items-center gap-4 justify-center md:justify-start">
          <div className={`w-12 h-12 rounded-full ${s.tint} grid place-items-center text-xl`}>
            {s.icon}
          </div>
          <div className="text-right">
            <div className="text-xl md:text-2xl font-black text-raffeq-ink">{s.value}</div>
            <div className="text-sm text-raffeq-muted">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
