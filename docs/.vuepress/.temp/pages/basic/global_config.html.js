export const data = {
  "key": "v-7b2a77b5",
  "path": "/basic/global_config.html",
  "title": "全局配置",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "pages",
      "slug": "pages",
      "children": []
    },
    {
      "level": 2,
      "title": "entryPagePath",
      "slug": "entrypagepath",
      "children": []
    },
    {
      "level": 2,
      "title": "window",
      "slug": "window",
      "children": []
    },
    {
      "level": 2,
      "title": "tabBar",
      "slug": "tabbar",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "basic/global_config.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
