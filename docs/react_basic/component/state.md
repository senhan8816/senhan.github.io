# 类组件的状态

> 状态（state）即组件的私有数据. 函数组件默认没有状态, 类组件有自己的状态，负责更新 UI，让页面“动” 起来

**应用场景:**

购物车界面中增减商品数量的结构很多地方都要用,一般会封装成组件.当用户对某个商品进行增/减操作时,其他商品的数量不应该受到影响,并且页面要展示增/减之后的最新数量.这样的需求用状态来实现是最合适不过的.

![](/images/edit2.png)

## 状态的定义,使用和修改

- 定义和使用状态

  ```js{4,5,8,9}
  class Hello extends React.Component {
    constructor() {
      super()
      // constructor和render函数中的this是当前Hello组件实例对象
      this.state = { count: 0 } // 定义state
    }
    render() {
      // 使用状态(状态总是与页面渲染有关)
      return <div>{this.state.count}</div>
    }
  }
  ```

- 修改状态

  > 修改状态应该使用`this.setState({目标属性: 目标值})`
  >
  > 作用: 1. 修改状态的值 2.让组件更新,从而导致页面展示最新数据

  ```js{10-18}
  class Hello extends React.Component {
    constructor() {
      super()
      this.state = { count: 0 } // 定义state
    }
    render() {
      return <div>
                {this.state.count}
                {/* 点击按钮,修改状态的值 */}
                <button
                  onClick={()=>{
                    // 一定要通过this.setState进行修改
                    this.setState({
                      count: this.state.count + 1
                    })}
                    // 不要直接修改,直接修改无法导致组件更新,页面也就无法展示最新数据
                    // this.state.count = this.state.count + 1 错误的方式
                >按钮</button>
            </div>
      }
    }
  ```

## setState 的注意点

**setState 更新是异步的**

> - `setState()` enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state (`setState()` 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件)
>
> 这句话是从 React 官网中摘抄下来的. setState 对数据的更改是放入队列中等待执行的. 所以 setState 之后,立刻获取数据一定是之前的数据

```js{13}
import React, { Component } from 'react'
export default class Hello extends Component {
  constructor(){
	this.state = {count: 0}
  }
  render() {
    return (
        <button
          onClick={()=>{
        		this.setState({
                    count: this.state.count + 1
				})
        		console.log(this.state.count) // 结果为0
		  }>
         按钮
        </button>
      </li>
    )
  }
}
```

## setState 的其他特性(了解,不常用)

- setState 更新会合并

  > `setState()` does not always immediately update the component. It may batch or defer the update until later(`setState()` 并不总是立即更新组件。它会批量推迟更新)
  >
  > 这句话也是从 React 官网摘抄下来的,很显然,如果 setState 调用之后,立刻渲染.效率一定是低下的.因为可能会出现 setState 连续调用的情况

  ```js{10-24}
  import React, { Component } from 'react'
  export default class Test extends Component {
    constructor(){
  	  this.state = {count: 0, msg: 'hello'}
    }
    render() {
      return (
          <button
            onClick={()=>{
          		this.setState({
                    count: this.state.count + 1,
                    msg: 'halo'
  				})
          		this.setState({
                    count: this.state.count + 2
  				})
          		this.setState({
                    count: this.state.count + 3
  				})
          		// 上面的三次连续调用,会合并成一次. 合并之后的结果,类似于下面的代码
          		this.setState({
                    count: this.state.count + 3
                    msg: 'halo'
  				})}>
           按钮
          </button>
        </li>
      )
    }
  }
  ```

- setState 第一个参数,可以写成回调函数

  ```js
  //如果当前setState是第一个调用的,则回调立刻执行. 如果之前调用过setState,这次setState的回调等待之前数据修改完毕之后执行
  this.setState((state, props) => {
    //state是最新的state数据
    //props是组件外传进来的数据
    return 目标值
  })
  ```

- setState 第二个参数也是回调函数

  ```js
  // setState的第二个参数是一个回调函数,是一个可选参数. 它将在 setState 完成合并并重新渲染组件后执行
  setState(第一个参数, () => {})
  ```

