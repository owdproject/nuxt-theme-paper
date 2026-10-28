import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/theme-paper',
  modules: ['@owdproject/module-fs', '@owdproject/nuxt-persistence-pinia'],
  apps: [
    '@owdproject/app-dino',
    '@owdproject/app-gridsky',
    '@owdproject/app-terminal',
    '@owdproject/app-youtube',
    '@owdproject/app-soundcloud',
    '@owdproject/app-todo',
  ],
  terminal: {
    welcomeMessage: 'Paper Desktop',
    prompt: '$',
  },
})
