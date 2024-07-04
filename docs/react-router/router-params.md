# 路由传参

> 路由传参是值: 页面切换的时候,给目标页面传递数据

路由传参有三种方式:

1. 路由参数(数据在路径中,只能传递简单数据)

2. state(可以传递任何数据)

3. 查询字符串(不推荐)

## 路由参数

1. 定义路由参数

   ```jsx
   function App() {
     return (
       <Routes>
         {/*:id 为路由参数(必填), 可以配置多个*/}
         <Route path="about/:id" element={<About />}></Route>

         {/*:id 为可选路由参数 */}
         <Route path="about/:id?" element={<About />}></Route>
         {/*:id 为可选路由参数 */}
         <Route path="about">
           <Route path=":id" element={<About />} />
           <Route path="" element={<About />} />
         </Route>
       </Routes>
     )
   }
   ```

2. 传递路由参数

   ```jsx
   // 切换页面的时候传递
   navigate('/about/1') //这个1就是路由参数
   <Link to="/about/2"></Link>
   <NavLink to="/about/3"></NavLink> //2 和 3 就是路由参数
   ```

3. 接收路由参数

   ```jsx
   // 在目标路由组件中接收
   import { useParams } from 'react-router-dom'
   // params 是一个对象,里面可以获取到路由参数具体的值
   const params = useParams()
   console.log(params) // {id:1}
   ```

## state

1. 传递

   ```jsx
   <Link to="/目标路径" state={要传递数据}></Link>
   <NavLink to="/目标路径" state={要传递数据}></NavLink>
   navigate('/目标路径', {
    state: 要传递的数据
   })
   ```

2. 接收

   ```js
   import { useLocaiton } from 'react-router-dom'
   const location = useLocation()
   location.state //可以获取到数据
   ```

## 查询字符串

1. 传递

   ```jsx
   <Link to="/目标路径?name=zs&age=18" ></Link>
   <NavLink to="/目标路径?name=zs&age=18" ></NavLink>
   navigate('/目标路径?name=zs&age=18')
   ```

2. 接收

   ```jsx
   const [query, setQuery] = useSearchParams()
   // query是类似formdata对象,获取数据:query.get('name')
   console.log(query.get('name')) // zs
   // setQuery 可以修改地址栏查询字符串 setQuery("x=1&y=2")
   ```
