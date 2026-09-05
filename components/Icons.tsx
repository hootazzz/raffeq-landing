type P = { className?: string };
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export const IconUsers = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...s}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
export const IconGlobe = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...s}>
    <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
);
export const IconChat = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...s}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <circle cx="8" cy="10" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="10" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="10" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
export const IconPlane = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...s}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 20 3s-3 0-4.5 1.5L12 8 3.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);
export const IconHotel = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...s}>
    <rect x="3" y="7" width="18" height="14" rx="1" /><path d="M3 11h18M8 7V3h8v4M7 15h2M11 15h2M15 15h2M7 18h2M11 18h2M15 18h2" />
  </svg>
);
export const IconDoc = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...s}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" />
  </svg>
);
export const IconPin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...s}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
export const IconTag = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...s}>
    <path d="M20.6 13.4 12 22l-9-9V4l9-.6z" /><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);
export const IconPlay = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);
export const IconApple = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);
