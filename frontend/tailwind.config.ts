/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fadeInOut-100': 'fadeInOut 2s 100ms infinite',
        'fadeInOut-200': 'fadeInOut 2s 200ms infinite',
        'fadeInOut-300': 'fadeInOut 2s 300ms infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        custom: '0px 0px 8px 0px rgba(32, 30, 30, 0.40)',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        alt: 'var(--font-pieches)',
        changa: 'var(--font-changa)',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          60: '#d9d9d9',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        purple: {
          50: '#f3eefc',
          100: '#d8cbf7',
          200: '#c6b2f3',
          300: '#ab8eee',
          400: '#9b79ea',
          500: '#8257e5',
          600: '#764fd0',
          700: '#5c3ea3',
          800: '#48307e',
          900: '#372560',
        },
        green: {
          50: '#EAEAEA',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },
        pink: {
          400: '#F62C99',
          500: '#F453AF',
          600: '#C4227F',
        },
        black: '#201E1E',
        yellow: {
          500: '#F7CF06',
        },
      },
      aspectRatio: {
        '2/1': '2 / 1',
      },
      backgroundImage: {
        stripes:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)',
      },
      fontSize: {
        '10xl': '16rem',
        '11xl': '17rem',
        '12xl': '18rem',
        '13xl': '19rem',
        '14xl': '20rem',
        '15xl': '21rem',
        '16xl': '22rem',
        '17xl': '23rem',
      },
      backgroundSize: {
        stripes: '100% 8px',
      },

      blur: {
        full: '194px',
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void
    }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
