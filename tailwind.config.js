/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // blue-600
          light: '#3B82F6',   // blue-500
          dark: '#1E40AF',    // blue-800
        },
        accent: {
          DEFAULT: '#14B8A6', // teal-500
          light: '#5EEAD4',   // teal-300
          dark: '#0F766E',    // teal-700
        },
        'background-light': '#F8FAFC', // slate-50
        'background-dark': '#1E293B',  // slate-800
        'text-dark': '#0F172A',  // slate-900
        'text-light': '#E2E8F0', // slate-200
      },
      spacing: {
        'section': '2rem',
      },
      borderRadius: {
        'container': '0.75rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
