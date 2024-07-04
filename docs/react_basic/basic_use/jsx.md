# JSX

## 介绍

> React.createElement()写起来太复杂了,所以推荐使用更加简洁的**JSX**
>
> **JSX**是 JavaScript XML,是 React 提供的 Syntax Sugar(语法糖), 能让我们可以在 JS 中写 html 标记语言

```jsx
const h1 = <h1 className="active">哈哈哈</h1>
```

**注意: 浏览器并不认识 jsx 所以需要引入 babel 将 jsx 编译成 React.createElement 的形式**

> 编译 JSX 语法的包为：@babel/preset-react

```html{2,5}
<!-- 引入babel-->
<script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.20.15/babel.js"></script>

<!-- 并且script要进行设置 -->
<script type="text/babel">
  const h1 = <h1 className="active">哈哈哈</h1>
  ReactDOM.createRoot(document.getElementById('root')).render(h1)
</script>
```

## 注意点

- 一段 JSX 必须有且只有一个根标签

  ```jsx
  // 错误的:
  const title = <h1>嘿嘿嘿</h1> <p>加个微信</p>

  // 正确的:
  const title = <div><h1>嘿嘿嘿</h1><p>加个微信</p></div>
  ```

- JSX 中定义自闭合标签,必须加 `/`

  ```jsx
  // 错误的
  const inp =  <input type="text">

  // 正确的
  const inp =  <input type="text" />
  ```

- JSX 的注释和 js 不一样

  ```jsx{4}
  // 这是js的注释
  const title = (
    <div>
      {/* 这是jsx中的注释 */}
      <h1>嘿嘿嘿</h1>
      <p>加个微信</p>
    </div>
  )
  ```

## 动态插入数据

> JSX 中动态插入数据应该使用**插值表达式:** `{}`

**搞懂插入表达式需要讨论两个问题:**

1. 插值表达式可以写在 jsx 的什么位置?

   - 标签的子节点的位置(为了渲染)

   ```jsx
   const str = '你学或者不学,react就在这里'

   const div = <div>{str}</div>
   ```

   - 标签的属性的位置(为了控制属性的值)

   ```jsx
   const btn = <button disabled={true}>按钮</button>
   ```

2. 插值表达式中可以写什么?

   **答案:插值表达式中可以写任何的 js 表达式.**

   例如:变量,常量,字面量,运算,函数调用都是 js 表达式

   **注意:**

   - 不要直接渲染布尔值,null 和 undefined(不会在页面上渲染出来)
   - 不要直接渲染一个数据对象,如果是对象类型,react 会判断是不是 react 元素,如果不是则报错
   - 如果渲染数组,react 会将数组中的每一个元素,当做一个子节点渲染出来
   - 不要直接渲染一个函数,react 会提出警告
   - 声明语句,分支语句,循环语句不是表达式,不能写入插值表达式

## 条件渲染

- 三元运算

  ```jsx
  let isLoading = true
  let box = (
    <div>{isLoading ? <div>loading...</div> : <h1>数据加载完成~</h1>}</div>
  )
  ReactDOM.createRoot(document.getElementById('root')).render(box)
  ```

- &&

  ```jsx
  let isLoading = true
  let box = (
    <div>
      {isLoading && <div>loading...</div>}
      <h1>数据展示</h1>
    </div>
  )
  ReactDOM.createRoot(document.getElementById('root')).render(box)
  ```

## 列表渲染

由于 react 可以直接将数组中的每一个元素,当做一个子节点渲染到页面上.所以 react 推荐开发者根据数据数组动态创建存储了 react 元素的数组,然后通过插值表达式直接渲染

例如下面的代码:

```jsx
//songs是数据数组
let songs = [
  { id: 1, name: '东风破' },
  { id: 2, name: '菊花残' },
]
// 根据数据数组得到一个存放了react元素的数组
const lis = songs.map((item) => (
  <li>
    <p>
      歌名：<span>{item.name}</span>
    </p>
  </li>
))
// lis ==> [<li><p>歌名：<span>东风破</span></p></li>,<li><p>歌名：<span>东风破</span></p></li>]

// 直接将lis数组插入到ul标签的子节点位置
let ul = <ul>{lis}</ul>

ReactDOM.createRoot(document.getElementById('root')).render(ul)
```

**问题: 上面的代码运行之后,控制台会弹出警告**

![不加key警告](/images/list_render_warn.png)

**解决办法:**
react 基于性能的原因,要求开发者在列表渲染时,jsx 的根标签上必须写 key 属性并且 key 的值在当前父节点范围内不能重复(key 的具体作用在后面的[虚拟 dom 和 diff 算法]()的章节介绍)

```jsx{8,9}
//songs是数据数组
let songs = [
  { id: 1, name: '东风破' },
  { id: 2, name: '菊花残' },
]
// 根据数据数组得到一个存放了react元素的数组
const lis = songs.map((item) => (
  // 一般都会使用数据中的id作为key的值
  <li key={item.id}>
    <p>
      歌名：<span>{item.name}</span>
    </p>
  </li>
))
// lis ==> [<li key=1>...</li>,<li key=2>...</li>]

// 直接将lis数组插入到ul标签的子节点位置
let ul = <ul>{lis}</ul>

ReactDOM.createRoot(document.getElementById('root')).render(ul)
```

## 添加行内样式

> 刚才在介绍 JSX 的时候已经介绍了如何添加类名. 现在主要介绍添加行内样式

JSX 添加行内样式规则:

- 通过 style 属性添加
- style 的值必须是对象
- css 属性名和原来保持一致,但是有`-`的属性名要改写成小驼峰的形式
- 属性的值应该都是字符串,但是如果单位是 px 的值,可以直接写数字,并忽略 px 单位

```jsx
const div = (
  <div style={{ color: 'red', fontSize: 30 }}>红浪漫会所,给你家一般的温暖</div>
)
```

## 绑定事件

React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写.比如：onMouseEnter、onFocus
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串

```jsx
const div = <div onClick={function (e) {}}></div>
```

### 事件对象

React 中的事件对象叫做：合成事件 (兼容所有浏览器，无需担心跨浏览器兼容性问题),使用时和 DOM 中事件对象一样

```jsx
function handleClick(e) {
  // return false //无效
  e.preventDefault() //有效
  console.log('事件对象', e)
}
const div = (
  <a href="https://www.atguigu.com" onClick={handleClick}>
    测试
  </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(div)
```

**注意: 如果是 a 标签的点击事件不能使用 return false 阻止默认行为.需要使用事件对象的 preventDefault()实现**

### 事件处理函数中的 this

在 DOM 阶段,我们知道事件处理函数的 this 指向事件源. 但是 react 中的事件处理函数中 this 指向 undefined

```jsx{4}
function myHandleClick() {
  e.preventDefault()
  debugger // 代码执行到这里会暂停,然后按下shift+F11,代码会回到调用当前函数的位置
  console.log('this: ', this) // undefind
}
const div = (
  <a href="https://www.atguigu.com" onClick={myHandleClick}>
    测试
  </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(div)
```

**原因:**
其实我们写的函数`myHandleClick`不是真正的事件处理函数,我们写的事件处理函数,在 react-dom 包中是这样调用的`func.apply(context, funcArgs);`.

- `func` 就是我们的函数`myHandleClick`
- `context` 是 `undefined`
- `funcArgs` 是数组,里面存储了`合成事件`

![this问题](/images/event.png)

**最终结论:** 如果一个函数被`apply`调用,并且第一个参数传入 undefined,则函数的 this 应该指向`window`. 但我们的代码还被 babel 编译过,babel 编译之后,开启了`严格模式`,所以最终 this 指向 undefined

## 案例练习

**案例效果:**

![案例效果](/images/basic_demo.png)

**案例需求:**

实现评论列表功能

1. 如果有评论数据，就展示一个无序列表. 结构: `ul>li>a>h3+p`

   - h3 标签渲染评论人名称
   - p 标签渲染评论内容

2. 如果没有评论数据，就展示一个 h1 标签，内容为： 暂无评论！

3. 根据自己的喜好添加样式

4. 给 a 标签注册点击事件, 打印事件目标的文本

```js
// 评论数据
const list = [
  { id: 1, name: 'jack', content: 'rose, you jump i jump' },
  { id: 2, name: 'rose', content: 'jack, you see you, one day day' },
  { id: 3, name: 'tom', content: 'jack,。。。。。' },
]
```
