import { existsSync } from 'node:fs'
import {
  createResolver,
  addComponentsDir,
  addImportsDir,
  addPlugin,
  installModule,
} from '@nuxt/kit'
import { defineDesktopTheme } from '@owdproject/nuxt'
import { registerThemeTailwindPath } from '@owdproject/kit-tailwind/kit/registerTailwindPath'
import { paperAppearanceBootstrapScript } from './runtime/utils/paperAppearance'

export default defineDesktopTheme({
  meta: {
    name: 'desktop-theme-paper',
  },
  defaults: {
    name: 'paper',
    systemBar: { enabled: true, position: 'top', startButton: true },
    dockBar: { enabled: false },
    workspaces: { enabled: false },
    windows: { position: 'fixed' },
  },
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    await installModule('@owdproject/kit-primevue', { explorer: false })

    registerThemeTailwindPath(nuxt, import.meta.url)

    addComponentsDir({
      path: resolve('./runtime/components'),
      global: true,
    })

    addImportsDir(resolve('./runtime/composables'))

    const css = resolve('./runtime/assets/styles/index.css')
    nuxt.options.css.push(existsSync(css) ? css : resolve('./runtime/assets/styles/index.scss'))

    const head = nuxt.options.app.head ?? {}
    const existingScripts = Array.isArray(head.script)
      ? head.script
      : head.script
        ? [head.script]
        : []

    nuxt.options.app.head = {
      ...head,
      htmlAttrs: {
        'data-owd-appearance': 'light',
        ...(head.htmlAttrs ?? {}),
      },
      script: [
        {
          key: 'paper-appearance-bootstrap',
          innerHTML: paperAppearanceBootstrapScript,
          tagPosition: 'head',
          type: 'text/javascript',
        },
        ...existingScripts,
      ],
    }

    addPlugin({
      src: resolve('./runtime/plugins/paper-appearance.client'),
      mode: 'client',
      order: 1,
    })
  },
})
