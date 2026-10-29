import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/theme-nuxt-paper',
  modules: ['@owdproject/module-nuxt-pinia-persistence'],
  apps: [
    '@owdproject/app-nuxt-dino',
    '@owdproject/app-gridsky',
    '@owdproject/app-nuxt-terminal',
    '@owdproject/app-nuxt-youtube',
    '@owdproject/app-nuxt-soundcloud',
    '@owdproject/app-nuxt-todo',
  ],
  terminal: {
    welcomeMessage: 'Paper Desktop',
    prompt: '$',
  },
})
