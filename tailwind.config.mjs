/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF ',
        primarydm: '#1E1E1E',
        header: '#333333',
        headerdm: '#CCCCCC ',
        textcl: '#444444 ',
        textcldm: '#E0E0E0',
        accentfirst: '#007BFF',
        accentfirstdm: '#4285F4',
        accentsecond: '#48EA58',
        accentdark: '#093d95'
      },
      fontFamily: {
        roboto: ['Roboto'],
        robotoMono: ['Roboto Mono']
      }
    }
  },
  plugins: []
}
