import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef5fb',
          100: '#d8e8f4',
          500: '#2b5f7f',
          700: '#193f5f',
          800: '#12324e',
          900: '#0d2941'
        },
        sage: {
          50: '#eff7f1',
          100: '#dcefe1',
          500: '#5c9670',
          600: '#437857',
          700: '#345f46'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 45px rgba(13, 41, 65, 0.09)'
      }
    }
  },
  plugins: [typography]
};
