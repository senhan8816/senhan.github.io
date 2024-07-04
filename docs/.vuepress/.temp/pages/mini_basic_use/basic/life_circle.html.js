export const data = {
  "key": "v-6e1b7e62",
  "path": "/mini_basic_use/basic/life_circle.html",
  "title": "小程序生命周期",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "app 全局生命周期",
      "slug": "app-全局生命周期",
      "children": []
    },
    {
      "level": 2,
      "title": "page 页面生命周期",
      "slug": "page-页面生命周期",
      "children": []
    }
  ],
  "filePathRelative": "mini_basic_use/basic/life_circle.md"
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
