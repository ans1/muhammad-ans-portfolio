// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/muhammad-ans-portfolio/'
  },
  modules: ['@nuxt/ui', 'nuxt-swiper'],
  css: ['~/assets/css/main.css'],
  swiper: {
    modules: ['navigation', 'pagination', 'a11y']
  },
  vite: {
    resolve: {
      dedupe: ['swiper']
    },
    optimizeDeps: {
      include: ['swiper/element/bundle', 'swiper/element']
    },
    plugins: [
      (await import('@tailwindcss/vite')).default()
    ]
  },
  ssr: false
})
