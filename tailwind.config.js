/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0D',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E6CB6B',
          dark: '#A8842A',
        },
        rose: {
          DEFAULT: '#E8B4B8',
          light: '#F3D6D8',
          dark: '#D08E93',
        },
        ivory: '#FDF8F3',
        charcoal: '#1E1E1E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 20px 60px -15px rgba(13,13,13,0.25)',
        gold: '0 10px 40px -10px rgba(212,175,55,0.45)',
        'inner-line': 'inset 0 0 0 1px rgba(212,175,55,0.25)',
      },
      backgroundImage: {
        'gold-sheen': 'linear-gradient(120deg, #D4AF37 0%, #F3E5AB 25%, #D4AF37 50%, #A8842A 75%, #D4AF37 100%)',
        'rose-fade': 'linear-gradient(135deg, #E8B4B8 0%, #FDF8F3 100%)',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      maxWidth: {
        'screen-2xl': '1440px',
      },
    },
  },
  plugins: [],
};
