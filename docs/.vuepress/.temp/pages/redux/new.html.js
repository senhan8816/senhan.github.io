export const data = {
  "key": "v-017919a6",
  "path": "/redux/new.html",
  "title": "redux 新版语法(@reduxjs/toolkit)",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基本使用:",
      "slug": "基本使用",
      "children": []
    },
    {
      "level": 2,
      "title": "异步操作",
      "slug": "异步操作",
      "children": []
    },
    {
      "level": 2,
      "title": "解决 TS 编译失败的问题",
      "slug": "解决-ts-编译失败的问题",
      "children": []
    }
  ],
  "filePathRelative": "redux/new.md"
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
