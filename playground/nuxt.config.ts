export default defineNuxtConfig({
    modules: ['@owdproject/nuxt'],
    app: {
        baseURL: process.env.NUXT_APP_BASE_URL || '/',
    },
    i18n: {
        strategy: 'no_prefix',
    },
    ssr: false,
    experimental: {
        viteEnvironmentApi: true,
    },
})
