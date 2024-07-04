export const siteData = {
  "base": "/react-docs/",
  "lang": "zh-CN",
  "title": "React教程",
  "description": "React是用于构建用户界面的JavaScript库，起源于Facebook(现meta)的内部项目，由于市场上所有 JavaScript框架不满意，决定自行开发一套，用于Instagram的网站。于2013年5月开源。",
  "head": [],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
