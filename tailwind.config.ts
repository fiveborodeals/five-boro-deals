import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0908',
        coal: '#121110',
        bone: '#F2EDE4',
        fog: '#8B857A',
        brass: '#C9A24B',
        champagne: '#D9C08A',
        nickel: '#B9BEC7',
        bronze: '#9A6B3D',
        line: 'rgba(242, 237, 228, 0.12)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        mega: '0.35em',
      },
      transitionTimingFunction: {
        heavy: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
