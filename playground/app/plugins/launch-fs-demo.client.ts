import { nextTick } from 'vue'
import { defineNuxtPlugin } from 'nuxt/app'
import { useApplicationManager } from '@owdproject/nuxt/runtime/composables/useApplicationManager'

export default defineNuxtPlugin({
  name: 'theme-paper-playground-launch',
  async setup(nuxtApp) {
    if (!import.meta.dev) return

    const applicationManager = useApplicationManager()

    async function runDemo() {
      if (!applicationManager.isAppDefined('org.owdproject.terminal')) {
        return false
      }
      await applicationManager.execAppCommand(
        'org.owdproject.terminal',
        'terminal',
      )
      return true
    }

    nuxtApp.hook('app:mounted', async () => {
      await nextTick()
      for (let i = 0; i < 80; i++) {
        if (await runDemo()) return
        await new Promise((resolve) => setTimeout(resolve, 50))
      }
    })
  },
})
