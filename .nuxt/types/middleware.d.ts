import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/projects/github-vfkizu-uvbg8x/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}