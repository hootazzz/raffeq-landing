'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { end: number; duration?: number; suffix?: string; prefix?: string };

export default function CountUp({ end, duration = 1800, suffix = '', prefix = '+' }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || startedRef.current) return;
          startedRef.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(end * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} aria-label={`${prefix}${end.toLocaleString('ar-EG')}${suffix}`}>
      {prefix}
      {value.toLocaleString('ar-EG')}
      {suffix}
    </span>
  );
}
