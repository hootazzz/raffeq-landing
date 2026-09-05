import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-raffeq-bgSoft bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-3 gap-8 text-right">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-raffeq-muted leading-relaxed max-w-xs">
            تطبيق السفر المتكامل — حجوزات الطيران، الفنادق، التأشيرات، ومجتمع
            المسافرين في مكان واحد.
          </p>
        </div>
        <div>
          <div className="font-bold text-raffeq-ink mb-3">تواصل معنا</div>
          <ul className="space-y-2 text-sm text-raffeq-muted">
            <li>البريد: hello@raffeq.app</li>
            <li>الدعم: support@raffeq.app</li>
            <li>الرياض، المملكة العربية السعودية</li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-raffeq-ink mb-3">تابعنا</div>
          <ul className="space-y-2 text-sm text-raffeq-muted">
            <li>@raffeq على تويتر (X)</li>
            <li>@raffeq.app على انستقرام</li>
            <li>@raffeq على تيك توك</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-raffeq-bgSoft py-4 text-center text-xs text-raffeq-muted">
        © {new Date().getFullYear()} RAFFEQ. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
