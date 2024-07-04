# 编程式导航

> 通过运行代码导致的页面切换被叫做编程式导航

页面切换有两种场景:

1. 用户点击导航按钮

2. 程序运行到某个指定阶段自动切换页面(比如: 登录成功之后,页面自动切换到首页)

## 实现

> 引入`useNavigate`并调用,返回一个函数.执行返回的函数就可以实现编程式导航

```jsx{3}
import { useNavigate } from 'react-router-dom'
export default function Test2() {
  const navigate = useNavigate()
  const handle = () => {
    //  navigate('目标页面的路径', {
    //   replace: true, // 是否开启替换历史记录 true为开启,默认值是false
    // })
    navigate('/login', {
      replace: true
    })

    // 或 navigate(-1) //类似于history.go()方法
  }
  return (
    <div>
      <h1>test2</h1>
      <button onClick={handle}>按钮</button>
    </div>
  )
}
```
