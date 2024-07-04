# 通过路由表定义路由规则

实际开发中一般会使用`路由表`动态创建`Routes`和`Route`.

路由表其实就是一个数组,如下所示:

```js
const routes = [
  {
    path: 'home', //path 对应 Route的path
    element: <Home></Home>, //element 对应Route的element
    // children 对应 嵌套路由
    children: [
      {
        path: 'test1',
        element: <Test1></Test1>,
      },
      {
        path: 'test2',
        element: <Test2></Test2>,
      },
    ],
  },
  {
    path: 'about',
    children: [
      {
        path: ':id',
        element: <About></About>,
      },
      {
        path: '',
        element: <About></About>,
      },
    ],
  },
]
```

## useRoutes

调用 `useRoutes`,传入`路由表`,返回动态创建的 `Routes` 和 `Route`

```jsx
import { useRoutes } from 'react-router-dom'
import routes from './routes' //引入路由表
function App() {
  return <>{useRoutes(routes)}</>
}

// 上面的useRoutes返回的结果:
;<Routes>
  <Route path="home" element={<Home />}>
    <Route path="test1" element={<Test1 />}></Route>
    <Route path="test2" element={<Test2 />}></Route>
  </Route>
  <Route path="about" >
    <Route path=":id" element={<About />}>
    <Route path="" element={<About />}>
  </Route>
</Routes>
```
