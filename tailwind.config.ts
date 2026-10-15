import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Warm, quiet retail palette: off-white paper, warm neutrals,
        // deep charcoal ink, one muted brass accent.
        paper: '#FAF8F4',
        cream: '#F2EEE6',
        card: '#FFFFFF',
        imgpanel: '#F4F1EA',
        ink: '#1C1B18',
        stone: '#6F6A62',
        faint: '#A39D94',
        line: '#E3DCCC',
        brass: '#9A7B4F',
        brassdark: '#7E643C',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        mega: '0.18em',
      },
    },
  },
  plugins: [],
};

export default config;
