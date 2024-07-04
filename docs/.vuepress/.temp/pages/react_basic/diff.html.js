export const data = {
  "key": "v-0a36698c",
  "path": "/react_basic/diff.html",
  "title": "虚拟 DOM 和 diff 算法",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "虚拟 dom",
      "slug": "虚拟-dom",
      "children": []
    },
    {
      "level": 2,
      "title": "diff 算法",
      "slug": "diff-算法",
      "children": [
        {
          "level": 3,
          "title": "对比不同类型的元素",
          "slug": "对比不同类型的元素",
          "children": []
        },
        {
          "level": 3,
          "title": "对比同一类型的元素",
          "slug": "对比同一类型的元素",
          "children": []
        },
        {
          "level": 3,
          "title": "对比同类型的组件元素",
          "slug": "对比同类型的组件元素",
          "children": []
        },
        {
          "level": 3,
          "title": "对子节点进行递归",
          "slug": "对子节点进行递归",
          "children": []
        },
        {
          "level": 3,
          "title": "Keys",
          "slug": "keys",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "react_basic/diff.md"
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
