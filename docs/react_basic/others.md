# 其他

## Fragment

之前介绍 JSX 有且仅有一个根标签, 一般会使用 div 包裹整个 JSX 结构,这样用于包裹的 div 也会渲染到页面中,导致页面中出现大量无用的 div.可以使用 React.Fragment 组件代替 div 标签.React.Fragment 可以作为 JSX 的根标签,但不渲染任何结构

```jsx
import React, { Component } from 'react'
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>app</h1>
        <span>test</span>
      </React.Fragment>
    )
  }
}
```

![](/images/f0.png)

**React.Fragment 简写**

```jsx{3,6}
render() {
    return (
      <>
        <h1>app</h1>
        <span>test</span>
      </>
    )
  }
```

## Portals

默认情况下,组件在哪里使用,组件的结构就渲染在指定的位置. Portals 技术可以让组件的结构渲染你指定的任何位置. 当你在处理组件样式由于受到父组件结构影响时,Portals 是不错的选择.例如: 模态框

**Portals 是 ReactDOM 提供的 API**

需求: Test 组件依然写在 App 的 hr 后面.但是 Test 的结构需要渲染到 html 中的指定节点中

```html
<!-- public/index.html -->
<body>
  <!--test-wrap 用来添加Test结构的节点 -->
  <div id="test-wrap"></div>
  <div id="root"></div>
</body>
```

```jsx
// App.js
render() {
    return (
      <div>
        <h1>App</h1>
        <hr />
        <Test></Test>
      </div>
    )
}
```

```jsx{3}
// Test.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom' // 注意: 这里不加/client

export default class Test extends Component {
  constructor() {
    super()
    // 创建真实dom,添加Test结构
    this.container = document.createElement('div')
  }
  render() {
    // return <div>Test组件的结构</div>
    // ReactDOM根据JSX创建真实DOM,并添加到this.container中
    return ReactDOM.createPortal(<div>Test组件的结构</div>, this.container)
  }
  componentDidMount() {
    // 组件挂载成功时, 将this.container添加到真实DOM树上
    document.querySelector('#test-wrap').appendChild(this.container)
  }
  componentWillUnmount() {
    // 组件卸载时, 将this.container从真实DOM树中移除
    document.querySelector('#test-wrap').removeChild(this.container)
  }
}
```

![](/images/p_d.png)

**注意: 虽然结构渲染位置变化,但是并不影响 props 和 context 特性. 虽然 Test 的结构渲染到了#test-wrap 中,但是事件冒泡依然会冒泡到 Test 的父组件中.也会冒泡到#test-wrap**

## forwardRef

forwardRef 技术和非受控组件中的 refs 技术相关. 在介绍 refs 时,给标签元素添加 ref 属性,可以拿到标签元素的真实 DOM.

接下来,我们讨论一下,如果把 ref 添加到组件的实例会怎么样

- 给类组件添加 ref 属性

  ```jsx
  <Test
    ref={(node) => {
      console.log(node) // 可以获取到Test组件实例
    }}
  ></Test>
  ```

  ![](/images/ref1.png)

- 给函数组件添加 ref 属性

  ```jsx
  // Demo是一个函数组件
  <Demo
    ref={(node) => {
      console.log(node) // 函数没有调用,并提示警告.函数组件不支持ref
    }}
  ></Demo>
  ```

  ![](/images/ref2.png)

**使用`forwardRef`,可以给函数组件添加 ref 属性**. 虽然可以添加了,但是作用并不是拿到函数组件实例,而是将 ref 的值传递到函数组件内

```jsx
// 之前定义的Demo组件
export default function Demo() {
  return (
    <div>Demo</div>
  )
}
// 使用forwardRef定义的Demo组件
export default React.forwardRef(function Demo(props, ref){
  // props 是传递给当前组件的数据
  // ref是添加给Demo组件的ref值,ref的值可以是一个ref对象,也可以是一个函数.一般使用forwardRef时,大多传递的是ref对象
  return <div>Demo</div>
})
```

**使用 forwardRef,将 ref 的值传递到组件内有什么意义呢?**

当我们定义一个公共组件时,可以将组件内真实 DOM,传递出去

比如下面的例子: 红框是一个 List 组件,绿框是一个导航列表.

![](/images/list1.png)

点击绿框中的导航按钮,让所对应的组件进入可视区

![](/images/list2.png)

那么在使用 List 组件的位置,就需要拿到 List 组件所对应的真实 DOM.调用`scrollIntoView()`让指定列表进入可视区.这时就可以使用 forwardRef 来暴露组件内的真实 DOM

**简单示例：**

- 使用 List 组件的位置

```jsx
const refObj = React.createRef() //refObj用于获取List组件内部的真实DOM(div)
<List ref={refObj} ></List>
```

- List 组件

```js
export default React.forwardRef((props, ref) => {
  //ref接收到的就是refObj
  return (
    // 给div标签添加ref属性,值为refObj
    <div ref={ref}>
      <h1>*</h1>
      <ul>...渲染国家和区号的代码</ul>
    </div>
  )
})
```

通过以上代码,就可以在使用 List 组件的位置,拿到 List 组件内部 div 标签的真实 DOM 了

<!-- ## 错误边界(Error Boundaries)

项目中某个组件中的错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。

错误边界是一种 React 组件，这种组件**可以捕获发生在其子组件树任何位置的 JavaScript 错误，并打印这些错误，同时展示降级 UI**，而并不会渲染那些发生崩溃的子组件树。错误边界可以捕获发生在整个子组件树的渲染期间、生命周期方法以及构造函数中的错误。

### 实现:

> 如果一个 class 组件中定义了 `static getDerivedStateFromError()`或 `componentDidCatch()` 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。应该使用 `static getDerivedStateFromError()` 渲染备用 UI ，使用 `componentDidCatch()` 打印错误信息。
>
> 错误边界的工作方式类似于 JavaScript 的 `catch {}`，不同的地方在于错误边界只针对 React 组件。只有 类组件才可以成为错误边界。你只需要声明一次错误边界组件, 然后可以随处使用

#### 定义错误边界

```jsx
import React from 'react'
export default class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    // error 是错误信息
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // 打印错误信息
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something wrong.</h1>
    }

    return this.props.children
  }
}
```

#### 使用错误边界

```jsx
import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Test from './Test'
export default class App extends Component {
  render() {
    return (
      <>
        <h1>App</h1>
        <hr />
        <ErrorBoundary>
          <Test></Test>
        </ErrorBoundary>
      </>
    )
  }
}
```

Test 组件中包含错误代码

```jsx
import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    //打印不存在的props变量
    console.log(props)
    return <div>Test</div>
  }
}
```

![错误边界](/images/e_b.png)

**注意: 错误边界无法捕获以下场景中产生的错误：**

- 事件处理
- 异步代码（例如 `setTimeout`回调函数）
- 服务端渲染
- 它自身抛出来的错误（并非它的子组件） -->

## 组件懒加载

直接使用`es6模块化`语法引入组件,则项目启动之后,所有的组件都会加载到内存中. 但是其实有些组件用户并没有访问,所以项目刚启动的时候,就没有必要加载这些还未访问的组件. 这时就可以使用懒加载技术,当用户访问某个组件的时候,再去加载这个组件.这样可以有效缩短项目启动的时间

```js
import Test from './Test' // Test组件会立刻加载
```

```js
import React from 'react'
const Test = React.lazy(() => import('./Test')) //Test组件再使用之前才会被加载
```

**注意:**

1. React.lazy 加载的组件,只支持默认导出(export default),不支持命名导出(named exports)

2. 懒加载的组件必须被 `Suspense` 组件包裹. Suspense 的作用是在懒加载组件时,展示 loading 信息.提高用户体验.

```jsx{1,2,20}
import React, { Component, Suspense } from 'react'
const Test = React.lazy(() => import('./Test'))
export default class App extends Component {
  state = {
    isShow: false,
  }
  render() {
    const { isShow } = this.state
    return (
        <button
          onClick={() => {
            this.setState({
              isShow: true,
            })
          }}
        >
          点击展示Test组件
        </button>
        <hr />
        {isShow && (
          // fallback的值应该是react元素
          <Suspense fallback={<div>loading...</div>}>
            <Test></Test>
          </Suspense>
        )}
    )
  }
}
```

<!-- ### 组件懒加载失败处理

如果组件加载失败,会触发一个错误。可以通过错误边界（Error boundaries）技术来处理这些情况，提供用户体验

```jsx
import React, { Component, Suspense } from 'react'
// 错误边界组件
import MyErrorBoundary from './MyErrorBoundary'
// 懒加载Test
const Test = React.lazy(() => import('./Test'))

export default class App extends Component {
  state = {
    isShow: false,
  }
  render() {
    const { isShow } = this.state
    return (
      <MyErrorBoundary>
        <button
          onClick={() => {
            this.setState({
              isShow: true,
            })
          }}
        >
          点击展示Test组件
        </button>
        <hr />
        {isShow && (
          <Suspense fallback={<div>loading...</div>}>
            <Test></Test>
          </Suspense>
        )}
      </MyErrorBoundary>
    )
  }
}
``` -->

## 国际化

国际化是指用户可以切换网页中的国际语言

### 处理页面中自定义的文本

1. 下载包:

   ```js
   // i18next 实现国际化的核心包
   // react-i18next 在react中使用i18next的包
   yarn add i18next react-i18next
   ```

2. 定义语言包

   ```json
   // src/locales/lang/en_US.json // 英文语言包
   {
   // "app" 对应的是app组件中的文本
   "app": {
       "helo": "hello",
       "sz": "shenzhen",
       "click": "click",
       "name": "name",
       "age": "age",
       "address": "address",
       "tag": "tag",
       "action": "action"
   },
   // "count" 对应的是count组件中的文本
   "count":{
       "name":"name"
   }
   }
   // src/locales/lang/zh_CN.json  // 中文语言包
   {
   "app": {
       "helo": "你好",
       "sz": "深圳",
       "click": "点击",
       "name": "姓名",
       "age": "年龄",
       "address": "地址",
       "tag": "标记",
       "action": "操作"
   },
   "count":{
       "name":"姓名"
   }
   }

   ```

3. 定义国际化配置文件

   ```js
   // src/locales/i18n.js

   // 引入第三方库
   import i18n from 'i18next'
   import { initReactI18next } from 'react-i18next'

   //导入语言包
   import en_US from './lang/en_Us.json'
   import zh_CN from './lang/zh_CN.json'

   // 初始化i18n
   i18n.use(initReactI18next).init({
     resources: {
       // 配置语言包
       en: en_US,
       zh: zh_CN,
     },
     lng: 'zh', // 默认语言,值是resources的键
     interpolation: {
       //escapeValue:转义传入的值以避免xss注入.
       //react已经处理了,这里设置为false
       escapeValue: false,
     },
   })
   ```

4. 在入口文件中引入国际化配置文件

   ```js
   // 引入国际化配置,使其生效
   import './locales/i18n'
   ```

5. 在组件中使用

   ```jsx
   import React, { useState } from 'react'
   import { Space, Table, Tag, Button } from 'antd'
   import type { ColumnsType } from 'antd/lib/table'

   // 引入国际化hook: useTranslation
   import { useTranslation } from 'react-i18next'

   interface DataType {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
   }

   export default function App() {
    // t表示translate(翻译). 需要国际化的位置,调用t函数
   // i18n.changeLanguage('zh') 用于切换语言, 传入是值是i18n.js中resource的键
   const { t, i18n } = useTranslation(['app']) // ['app']表示使用语言包中app字段下面的内容

   const columns: ColumnsType<DataType> = [
       {
        title: t('name'),
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
       },
       {
        title: t('age'),
        dataIndex: 'age',
        key: 'age',
       },
       {
        title: t('address'),
        dataIndex: 'address',
        key: 'address',
       },
       {
        title: t('tag'),
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
            {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green'
                if (tag === 'loser') {
                color = 'volcano'
                }
                return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
                )
            })}
            </>
        ),
       },
       {
        title: t('action'),
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
            </Space>
        ),
       },
   ]

   const data: DataType[] = [
       {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
       },
   ]
   return (
       <div>
        <button
            onClick={() => {
            i18n.changeLanguage('zh')
            }}
        >
            中文
        </button>
        <button
            onClick={() => {
            i18n.changeLanguage('en')
            }}
        >
            english
        </button>
        <div>{t('helo')}</div>
        <p>{t('sz')}</p>
        <hr />
        <Button>{t('click')}</Button>
        <Table
            columns={columns}
            dataSource={data}
            pagination={{
                total: 50,
                showSizeChanger: true,
            }}
        ></Table>
       </div>
    )
   }

   ```

### 处理 antd 中内置的文本

上面的例子中,table 中的分页的文本还未实现国际化. antd 中内置文本默认使用 en_US

1. 引入 ConfigProvider 组件

   ```jsx
   import { Space, Table, Tag, Button, ConfigProvider } from 'antd'
   ```

2. 引入 antd 中内置的语言包

   ```jsx
   import zhCN from 'antd/lib/locale/zh_CN'
   import en_US from 'antd/lib/locale/en_US'
   // 其他语言包可查询antd官网
   ```

3. 使用 ConfigProvider 包裹 jsx 结构, 一般用来包裹整个应用结构

   ```jsx
   // 如需切换语言,只需动态修改传入locale属性的语言包即可
   <ConfigProvider locale={en_US}>
     {/*... 忽略其他*/}
     <Table
       columns={columns}
       dataSource={data}
       pagination={{
         total: 50,
         showSizeChanger: true,
       }}
     ></Table>
   </ConfigProvider>
   ```
