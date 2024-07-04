# 组件通讯

实际开发中,组件和组件之间,经常需要互相传递数据. 这就是组件通讯

react 组件通讯常用的三种方式:

- props 主要用于父传子,只能一级一级传递
- context react 提供的方案,自上而下传递,允许跨级传递
- pubsub-js 第三方 js 库,不需要考虑组件关系,随意传递

![组件通讯](/images/组件通讯.png)

## 利用 context 实现组件通讯

> 这种方式主要适用于父级组件给子孙级组件传递数据.也是自上而下的,但是跟 props 的区别: 可以跨级传递数据

- 传数据:

  1. 创建 context 对象

     const context = React.createContext('默认值')

     **注意: 默认值是在不写 Provider 的时候生效**

  2. 从 context 中解构 Provider 组件.

     const {Provider} = context

  3. 在要传递数据的组件中使用 Provider 包裹整个组件的 JSX. 并添加 value 属性,值就是要传递的数据

     ```jsx
     <Provider value={数据}>
       <div>
         <h1>App</h1>
         <Far></Far> {/*Far组件的子组件是Son组件,父组件是App组件*/}
       </div>
     </Provider>
     ```

- 接收数据

  - 方式一

    ```js
    // 原本的Son组件
    export default class Son extends Component {
      render() {
        return <div>Son</div>
      }
    }

    // 利用context接收App传递的数据的Son组件
    const {Consumer} = context //注意:context要求和传递数据的context是同一个对象
    export default class Son extends Component {
      render() {
        return (
          <Consumer>{(data) => <div>Son, {data}</div>}</Consumer>
        )
      }
    }
    ```

  - 方式二

    ```js
    export default class Son extends Component {
      // 给当前组件添加一个静态属性 contextType, 值就是context对象 注意:context要求和传递数据的context是同一个对象
      static contextType = context
      render() {
        //   this.context属性的值就是利用context技术传递过来的数据
        return <div>Son1, {this.context}</div>
      }
    }
    ```

## 利用 pubsub-js 实现组件通讯

**注意**

- pubsub-js 是一个独立的 js 库,而 props 和 context 是 react 技术.这一点很不一样

- props 和 context 在传递数据时,要求组件之间有嵌套关系.但是 pubsub-js 不需要

- pubsub-js 是基于发布订阅模式的 js 库, 传递数据的组件就是发布者, 接收数据的组件就是订阅者.一个组件既可以是发布者,也可以是订阅者.一个发布者,可以对应多个订阅者


**实现:**

1. 安装

   ```js
   在项目根目录下: npm i pubsub-js
   ```

2. 哪里需要就在那里导入(发布和订阅的组件都需要引入)

   ```javascript
   import PubSub from 'pubsub-js' // 导入的PubSub是一个对象.提供了发布/订阅的功能
   ```

3. pubsubjs 提供的方法

   ```js
   // PubSub.subscribe(话题, 回调) 用于接收数据
   // 第一个参数: 话题. 传递数据时的标记
   // 第二个参数: 用于接收数据的函数
   // 返回值 当前订阅的唯一标识符. 用于清除当前订阅. 一般都会在组件挂载时订阅
   var subId = PubSub.subscribe('car', function (msg, data) {
     // msg 话题
     // data 传递的数据
     console.log(msg, data)
   })

   // 以异步的形式的发布一个话题
   // 'car'是话题, 所有订阅了'car'这个话题对应的回调函数都会被调用
   // 'hello world!' 具体要传递的数据
   PubSub.publish('car', 'hello world!')

   // 取消指定的订阅 一般在组件卸载的时候,取消指定订阅
   PubSub.unsubscribe(subId)

   // 取消某个话题的所有订阅
   PubSub.unsubscribe(话题)

   // 取消所有订阅
   PubSub.clearAllSubscriptions()

   //为什么要取消订阅?
   //因为pubsub-js内部,管理了一个对象.每一次订阅的就是往对象中添加属性,值是数组,数组中存放了当前话题所对应的所有订阅的回调函数
   {
     car: [callback1, callback2]
   }
   //如果组件卸载了,但是组件的订阅还在,这就浪费了内存. 所以组件卸载的时候要清除订阅.
   ```
