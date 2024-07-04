# 组件介绍及基本使用

> 一个 React 应用就是由一个个的组件组成的

组件是 react 中非常重要的一个特性.利用组件可以将 UI(页面结构) 拆分为独立可复用的代码片段，并对每个片段进行独立构思。

## 为什么要使用组件

当我们写网页时,会发现网页中出现大量相同的结构, 传统的处理方式是将重复的标签再写一次. 如下图所示每一个商品的展示都是由多个标签组成.页面中会出现大量相同结构的标签.这样的代码维护起来非常困难.

![](/images/com_des.png)

如果可以将这个相同结构的标签封装起来,就好像 js 中将相同的代码封装到函数里面,这样的代码维护性就会非常高.

还有, 轮播图是网页中常见效果,几乎每一个项目都要写. 轮播图中不仅有复杂的 html 结构,也有复杂的 js 逻辑. 如果把轮播图的 js 代码和其他功能的 js 代码写在一起,未来修改代码时,极容易`动一发牵全身`.如果可以将轮播的结构和 js 封装到一个文件中,这样不仅在写的时候方便查找元素,而且未来维护时也可以快速找到对应的文件进行修改,提高了编程效率

![](/images/swiper.gif)

而且如果整个页面将所有结构都进行封装,也可以大大提高代码的解耦程度

## 创建一个组件并使用

**react 中分为两类组件:**

1.  函数组件
2.  类组件

### 创建函数组件

> 创建函数组件的规则:
>
> 1.  组件名(函数名) 首字母大写
> 2.  必须写 return, return 后面写 jsx, 如果无需渲染结构,则 return null

```js
function Item() {
  return <li>这是一个函数组件</li>
}
```

### 创建类组件

> 创建类组件的规则:
>
> 1.  组件名(类名)首字母大写
> 2.  必须继承 React.Component 组件
> 3.  类结构体中必须定义 render 函数
> 4.  render 函数中必须 return, return 后面可以写 jsx 或 null

```js
import React from 'react'
class Item extends React.Component {
  render() {
    return <li>这是一个类组件</li>
  }
}
```

### 使用组件

> 类组件和函数组件使用的方式是一样的
>
> 1.  组件使用既可以写成双标签也可以写成单标签
> 2.  使用组件,相当于就是实例化组件
> 3.  组件使用写在哪里, 组件的结构就渲染在哪里

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

function Item() {
  return <li>这是一个函数组件</li>
}
const div = (
  <div>
    <hr />
    {/*使用Item组件*/}
    {/* Item组件中的li标签就会渲染到当前位置*/}
    <Item></Item>
    <hr />
    {/*使用Item组件另一种写法*/}
    <Item />
    <hr />
  </div>
)
ReactDOM.createRoot(document.getElementById('root')).render(div)
```

![](/images/use_com.png)

**如图所示: Item 组件使用了两次,则渲染出来两个 li 标签, Item 组件写在`<hr />` 标签之间, 则组件的结构就渲染在`<hr />` 标签之间**

## react 项目中使用组件的规范:

1. 一个组件应该单独定义在一个.js/.jsx 文件中(这两种类型的文件本质没有区别,只是后缀名不同)

2. 一个 react 项目,应该在项目根目录定义一个名为`App.js`或`App.jsx`的根组件.

3. 入口文件中引入并使用根组件,其他组件在根组件中使用

## 关于组件名首字母大写问题

有时我们会发现,定义组件的时候没有写组件名或组件名首字母没有大写,代码也可以正常运行. 那是因为 react 解析 jsx 时,通过首字母是否大写作为判断我们写在 jsx 中的标签是组件还是普通标签.所以只要在使用组件的时候保证组件首字母大写即可.不过实际开发依然建议定义组件时首字母大写.

例如:

```js{}
// App.js
export default class app extends React.Component {
  render() {
    return <div>{this.state.count}</div>
  }
}
```

```js
// index.js
import App from './App.js'
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
