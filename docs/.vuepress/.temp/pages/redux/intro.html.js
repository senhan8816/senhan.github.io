export const data = {
  "key": "v-ea74ae3e",
  "path": "/redux/intro.html",
  "title": "redux",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "为什么要做状态管理",
      "slug": "为什么要做状态管理",
      "children": []
    },
    {
      "level": 2,
      "title": "redux 三个核心概念",
      "slug": "redux-三个核心概念",
      "children": [
        {
          "level": 3,
          "title": "action",
          "slug": "action",
          "children": []
        },
        {
          "level": 3,
          "title": "reducer",
          "slug": "reducer",
          "children": []
        },
        {
          "level": 3,
          "title": "store",
          "slug": "store",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "redux/intro.md"
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
