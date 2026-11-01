# Paper theme

This repository owns the Paper Nuxt theme. Read the [Nuxt extension contract](https://github.com/owdproject/nuxt/blob/main/docs/extension-contract.md) before changing its integration. Themes own their own shell and visual design.

Preserve user changes. Never depend on the deprecated unscoped `nuxt-desktop`. Verify the theme in a standalone playground using local packs and Verdaccio, with no desktop distribution in its dependency graph and no public npm publication.
