export const data = {
  "key": "v-7da897b8",
  "path": "/first/",
  "title": "小程序基本使用",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "小程序开发特点概述",
      "slug": "小程序开发特点概述",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "first/README.md"
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
