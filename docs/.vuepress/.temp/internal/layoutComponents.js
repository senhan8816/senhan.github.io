import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/luodi/Desktop/react-docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Users/luodi/Desktop/react-docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
