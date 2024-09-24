import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',  // Firefox
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',  // Chrome, Safari
        },
      })
    },
  ],
  daisyui: {
    themes: ["lemonade"], // Solo habilita el tema light
  }
}

