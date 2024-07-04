export const data = {
  "key": "v-53034194",
  "path": "/react_basic/basic_use/first_use.html",
  "title": "在 html 中引入和使用",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "特殊属性",
      "slug": "特殊属性",
      "children": []
    }
  ],
  "filePathRelative": "react_basic/basic_use/first_use.md"
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
