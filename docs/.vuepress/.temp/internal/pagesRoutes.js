import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-a857eb52","/react-router/demo.html",{"title":"案例"},["/react-router/demo","/react-router/demo.md"]],
  ["v-03676309","/react-router/navigate.html",{"title":"编程式导航"},["/react-router/navigate","/react-router/navigate.md"]],
  ["v-35ea8ed2","/react-router/others.html",{"title":"其他组件"},["/react-router/others","/react-router/others.md"]],
  ["v-fb301220","/react-router/router-basic.html",{"title":"react-router 使用"},["/react-router/router-basic","/react-router/router-basic.md"]],
  ["v-c15e43a4","/react-router/router-params.html",{"title":"路由传参"},["/react-router/router-params","/react-router/router-params.md"]],
  ["v-d7ffb7d8","/react-router/spa.html",{"title":"单页面应用"},["/react-router/spa","/react-router/spa.md"]],
  ["v-229fd6e7","/react-router/useRoutes.html",{"title":"通过路由表定义路由规则"},["/react-router/useRoutes","/react-router/useRoutes.md"]],
  ["v-0ce5731d","/react_basic/create-react-app.html",{"title":"create-react-app"},["/react_basic/create-react-app","/react_basic/create-react-app.md"]],
  ["v-0a36698c","/react_basic/diff.html",{"title":"虚拟 DOM 和 diff 算法"},["/react_basic/diff","/react_basic/diff.md"]],
  ["v-4403cc77","/react_basic/hoc&rp.html",{"title":"HOC 和 renderprops"},["/react_basic/hoc&rp","/react_basic/hoc&rp.md"]],
  ["v-c0443648","/react_basic/hook.html",{"title":"HOOK"},["/react_basic/hook","/react_basic/hook.md"]],
  ["v-d2dab5c8","/react_basic/others.html",{"title":"其他"},["/react_basic/others","/react_basic/others.md"]],
  ["v-a4984eba","/react_basic/performance.html",{"title":"性能优化"},["/react_basic/performance","/react_basic/performance.md"]],
  ["v-d4bb840c","/react_basic/",{"title":"react 基础"},["/react_basic/index.html","/react_basic/README.md"]],
  ["v-ea74ae3e","/redux/intro.html",{"title":"redux"},["/redux/intro","/redux/intro.md"]],
  ["v-017919a6","/redux/new.html",{"title":"redux 新版语法(@reduxjs/toolkit)"},["/redux/new","/redux/new.md"]],
  ["v-8df7a9f4","/redux/old.html",{"title":"redux 旧版语法"},["/redux/old","/redux/old.md"]],
  ["v-9cb79932","/redux/react-redux.html",{"title":"react-redux"},["/redux/react-redux","/redux/react-redux.md"]],
  ["v-53034194","/react_basic/basic_use/first_use.html",{"title":"在 html 中引入和使用"},["/react_basic/basic_use/first_use","/react_basic/basic_use/first_use.md"]],
  ["v-148ea55d","/react_basic/basic_use/jsx.html",{"title":"JSX"},["/react_basic/basic_use/jsx","/react_basic/basic_use/jsx.md"]],
  ["v-6a4a07e2","/react_basic/component/communication.html",{"title":"组件通讯"},["/react_basic/component/communication","/react_basic/component/communication.md"]],
  ["v-ad7dd86e","/react_basic/component/form.html",{"title":"操作表单"},["/react_basic/component/form","/react_basic/component/form.md"]],
  ["v-0b6f1f39","/react_basic/component/intro.html",{"title":"组件介绍及基本使用"},["/react_basic/component/intro","/react_basic/component/intro.md"]],
  ["v-2b231491","/react_basic/component/life.html",{"title":"类组件的生命周期"},["/react_basic/component/life","/react_basic/component/life.md"]],
  ["v-bfb80296","/react_basic/component/props.html",{"title":"props"},["/react_basic/component/props","/react_basic/component/props.md"]],
  ["v-9a245f98","/react_basic/component/state.html",{"title":"类组件的状态"},["/react_basic/component/state","/react_basic/component/state.md"]],
  ["v-1bfbea2f","/react_basic/component/this.html",{"title":"类组件中函数的 this 问题"},["/react_basic/component/this","/react_basic/component/this.md"]],
  ["v-baf696ee","/react_basic/component/todoList.html",{"title":"todoList 案例"},["/react_basic/component/todoList","/react_basic/component/todoList.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
