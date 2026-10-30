import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/nuxt-theme-paper',
  modules: ['@owdproject/nuxt-module-pinia-persistence'],
  apps: [
    '@owdproject/nuxt-app-dino',
    '@owdproject/nuxt-app-gridsky',
    '@owdproject/nuxt-app-terminal',
    '@owdproject/nuxt-app-youtube',
    '@owdproject/nuxt-app-soundcloud',
    '@owdproject/nuxt-app-todo',
  ],
  terminal: {
    welcomeMessage: 'Paper Desktop',
    prompt: '$',
  },
})
