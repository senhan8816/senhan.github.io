# react-router 使用

> react-router 提供了三个包:
>
> - react-router 核心包
>
> - react-router-dom web 单页面应用使用的包,包含 react-router 核心包(我们下载并使用这个包)
>
> - react-router-native 原生 app 单页面应用使用的包,包含 react-router 核心包

## 基本使用

1. 下包

   ```jsx
     npm i react-router-dom
   ```

2. 在入口文件中使用`BrowserRouter`包裹整个应用结构

   > `<BrowserRouter>`包裹整个应用,只需要使用一次。

   ```jsx{3,7-9}
   // index.js
   import * as React from 'react'
   import * as ReactDOM from 'react-dom/client'
   import { BrowserRouter } from 'react-router-dom'

   ReactDOM.createRoot(document.getELementById('root')).render(
     <BrowserRouter>
       <App />
     </BrowserRouter>
     )
   ```

3. 在根组件中配置前端路由规则:

   > `<Route>` 用于配置前端路由规则
   >
   > `<Routes>` 每当路径发生变化时,都会查看其所有子 `<Route>` 元素以找到最佳匹配并呈现 UI

   ```jsx
   import { Routes, Route } from 'react-router-dom'
   function App() {
     return (
       <>
         {/* Route必须被Routes包裹 */}
         {/* Route写在哪里,则Route对应的组件就渲染在哪里(这一点只针对一级路由) */}
         <Routes>
           {/* path属性用于定义路径  element属性用于定义当前路径所对应的组件 */}
           <Route path="/login" element={<Login />}></Route>
           {/* path也可以忽略 /  */}
           <Route path="home" element={<Home />}></Route>
           {/*Route 也可以不写element. 入按照下面的方式定义,则展示Demo组件的路径为: /users/xxx */}
           <Route path="users">
             <Route path="xxx" element={<Demo />} />
           </Route>
         </Routes>
       </>
     )
   }
   ```

4. 利用 Link 组件定义导航按钮

   > 作用: 修改浏览器的地址栏路径,并且不发送请求(最终渲染的是 a 标签)

   ```js
   import { Link } from 'react-router-dom'

   function Test() {
     return (
       <div>
         <Link to="/home">点击展示home页面</Link>
       </div>
     )
   }
   ```

## 嵌套路由

![嵌套路由](/images/router_demo.gif)

```jsx{4-8,20-22}
// App.js
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
// 路由组件推荐使用懒加载的方式引入
const Home = React.lazy(()=>import('./pages/Home'))
const Login = React.lazy(()=>import('./pages/Login'))
const Test1 = React.lazy(()=>import('./pages/Test1'))
const Test2 = React.lazy(()=>import('./pages/Test2'))
import './App.css'
export default function App() {
  return (
    <>
      <div>
        <Link to="/home">首页</Link>
        <Link to="/login">登录页</Link>
        <hr />
      </div>
      <Routes>
        <Route path="/home" element={<Home />}>
          {/*Route里面的Route就是嵌套路由,Test1和Test2渲染在Home组件中*/}
          <Route path="/home/test1" element={<Test1 />}></Route>
          <Route path="/home/test2" element={<Test2 />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}
```

```jsx{12,13}
// Home.js
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ height: '100vh', backgroundColor: 'pink' }}>
      <h1>home</h1>
      <Link to="/home/test1">test1</Link> <br />
      <Link to="/home/test2">test2</Link>
      <hr />
      {/*Outlet组件决定了嵌套路由组件渲染的位置*/}
      <Outlet></Outlet>
    </div>
  )
}
```
