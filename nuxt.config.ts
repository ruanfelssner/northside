// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  css: ['./app/assets/main.css'],
  build: {
    transpile: ['gsap'],
  },
  vite:{
    plugins: [svgLoader()]
  },
  devtools: { enabled: true }
})
