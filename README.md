<p align="center">
  <img width="160" height="160" src="https://avatars.githubusercontent.com/u/65117737?s=160&v=4" />
</p>
<h1 align="center">Paper Theme</h1>
<h3 align="center">
  Paper Theme for your Open Web Desktop client.
</h3>

## Overview

A minimal theme for Open Web Desktop focused on the core shell: windows, a slim system bar, and little else. Use it to test window chrome, layout, and app rendering without the full Nova desktop experience.

**Visual style** — light and dark zinc neutrals, thin borders, compact system typography, and a subtle desktop grid.

**Shell** — top system bar (start menu and clock); fixed window layer with resize and drag; no dock, workspaces, or file-system integration.

**Components**

- `Desktop` — `DesktopCore` with `PaperSystemBar`, stage content, and `DesktopCoreApplicationRender`
- `Window` — title bar and content around `DesktopWindow`
- Playground apps: Dino, Gridsky, Terminal, YouTube, SoundCloud, and To-do.

## Installation

```bash
pnpm desktop add @owdproject/theme-nuxt-paper
```

## Usage

#### Configuration

```typescript
// desktop.config.ts
import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/theme-nuxt-paper',
  apps: ['@owdproject/app-nuxt-about'],
})
```

## Development

```bash
git clone https://github.com/owdproject/theme-paper.git
cd theme-paper
pnpm install
pnpm dev
```

The theme and its playground form a standalone workspace. Use `@owdproject/nuxt` as the Nuxt module; the headless `@owdproject/core` is not a Nuxt module. The playground opens Terminal in development.

To build the module and export the playground:

```bash
pnpm run prepack
pnpm --dir playground run generate
```

## License

The application is released under the [MIT License](LICENSE).
