/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          50: '#f4f7fb',
          100: '#e8eef8',
          900: '#0b1220',
        },
        accent: {
          400: '#f97316',
          500: '#ea580c',
        },
      },
      boxShadow: {
        soft: '0 24px 80px -28px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(circle at top left, rgba(14,165,233,0.20), transparent 34%), radial-gradient(circle at top right, rgba(249,115,22,0.18), transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.96))',
        'mesh-dark':
          'radial-gradient(circle at top left, rgba(14,165,233,0.18), transparent 30%), radial-gradient(circle at top right, rgba(249,115,22,0.12), transparent 24%), linear-gradient(145deg, rgba(2,6,23,0.98), rgba(15,23,42,0.96))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        reveal: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        reveal: 'reveal 0.7s ease forwards',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
