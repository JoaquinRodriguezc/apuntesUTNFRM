/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        '50': '#f2f9f8',
        '100': '#ddf0f0',
        '200': '#bfe2e2',
        '300': '#93cccd',
        '400': '#60adb0',
        '500': '#459295',
        '600': '#3c787e',
        '700': '#356469',
        '800': '#325358',
        '900': '#2d464b',
        '950': '#1a2e32',

      },
    },
  },
  plugins: [],
}
