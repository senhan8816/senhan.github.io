# 其他组件

## NavLink

> 作用: 与 Link 组件一样,但是可以快速实现导航高亮

```jsx
// 注意: 默认类名是active, 下面是自定义的style和类名
<NavLink
    to="login"
    style={({ isActive }) => {
        console.log('login', isActive)
        return isActive ? activeStyle : undefined
    }}>
        login
</NavLink>

<NavLink
    to="home"
    className={({ isActive }) => {
        console.log('home', isActive)
        return isActive ? 'base one' : 'base'
    }}>
        home
</NavLink>

// 注意:  默认,当Home的子组件匹配成功,Home的导航也会高亮.当NavLink上添加了end属性,则Home的子组件匹配成功的时候,Home的导航没有高亮效果
<NavLink
    to="home"
    end
	>
        home
</NavLink>
```

## Navigate

> 只要 Navigate 组件被解析,就会修改路径,切换视图
>
> 一般用来展示 404 页面

```js
useRoutes([
  {
    ...忽略,
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
])
```

## HashRouter

> 作用与 BrowserRouter 一样,但是修改的是地址栏的 hash 值.
