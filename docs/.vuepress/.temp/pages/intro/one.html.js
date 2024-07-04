export const data = {
  "key": "v-87a83ca2",
  "path": "/intro/one.html",
  "title": "章节一",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "小结 2",
      "slug": "小结-2",
      "children": [
        {
          "level": 3,
          "title": "小结 3",
          "slug": "小结-3",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "intro/one.md"
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
