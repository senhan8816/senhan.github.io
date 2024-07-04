export const data = {
  "key": "v-01080f51",
  "path": "/registe_wmp/one.html",
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
  "filePathRelative": "registe_wmp/one.md"
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
