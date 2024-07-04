export const data = {
  "key": "v-bcc4c2a6",
  "path": "/react_basic/component/xxx.html",
  "title": "组件通讯",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "3.5 React 组件通讯",
      "slug": "_3-5-react-组件通讯",
      "children": []
    }
  ],
  "filePathRelative": "react_basic/component/xxx.md"
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
