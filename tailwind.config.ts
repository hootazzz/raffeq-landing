import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        raffeq: {
          bg: '#F5EFF5',
          bgSoft: '#EFE7F0',
          lilac: '#B7A9DC',
          lilacDeep: '#8E7BC4',
          purple: '#6C5AA6',
          ink: '#1E1B4B',
          inkSoft: '#3D3766',
          muted: '#7A7295',
          card: '#FFFFFF',
          cream: '#F7EFE8',
        },
      },
      fontFamily: {
        arabic: ['var(--font-tajawal)', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(108,90,166,0.35)',
        card: '0 10px 40px -20px rgba(108,90,166,0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
