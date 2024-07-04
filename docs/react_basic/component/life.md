# 类组件的生命周期

- 什么是组件的生命周期?

  是以拟人化的手法,描述了一个组件从使用到不使用的过程

- 为什么要学习组件的生命周期?

  ​ 在实际开发中,我们需要在组件运行到某个指定阶段的时候执行一段代码. 比如: 当组件渲染到页面上的时候,需要设置一个定时器,在组件不被使用的时候,需要清除这个定时器. 所以我们就必须清楚,组件什么时候渲染完毕了,组件什么时候不被使用了

- 注意:

  1. 函数组件没有生命周期钩子函数
  2. 类组件中所有的生命周期钩子函数中的 this 都指向当前组件实例

## 类组件中常用的生命周期钩子

[生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

> 在类组件的整个运行过程中,不同的阶段会有指定的回调函数被调用. 这些回调函数,被称为生命周期钩子函数. 学习组件的生命周期,其实主要就是学习有哪些生命周期钩子函数,这些生命周期钩子函数分别在什么阶段被调用

![](/images/lifecycle.png)

**整个组件运行过程分为三个阶段**

- 挂载阶段(只执行一次)

  > 当使用组件时,组件进入挂载阶段

  - constructor 主要用于定义状态
  - render 解析 jsx 生成虚拟 dom
  - componentDidMount 表示组件第一次渲染完成(操作真实 DOM,发送异步请求)

- 更新阶段(执行多次)

  > 父组件更新,或执行了 setState,forceUpdate 会让组件进入更新阶段

  - render
  - componentDidUpdate 表示组件重新渲染完成
    **注意: 最好不要在更新阶段的钩子函数里面调用 setState,会造成死循环**

- 卸载阶段(执行一次)

  > { flag && <组件名 /> } 当 flag 为 true 时,组件被使用,组件就挂载了,当 flag 为 false, 组件不被使用,组件就卸载了

  - componentWillUnmount 表示组件即将卸载(清除操作)

## React 类组件中其他不常用生命周期钩子(了解)

- getDerivedStateFromProps(外界传入组件的数据, 组件内 state 的数据)

  > 这个生命周期钩子,在组件的挂载阶段和更新阶段都执行.
  >
  > 如果当前组件的 state 由外界传入到组件的数据决定时使用

  ```js
  import React, { Component } from 'react'

  export default class Count extends Component {
    constructor() {
      super()
      this.state = {
        count: 0,
      }
    }
    // 这个钩子是当前类的静态成员,所以要加static
    static getDerivedStateFromProps(props, state) {
      // props 是组件外部传递进来的数据
      // state 是当前组件的state的数据
      // return的作用就是修改state的值
      return {
        xxx: props.count,
      }
    }
    render() {
      return (
        <div>
          <div>{this.state.xxx}</div>
        </div>
      )
    }
  }
  ```

- getSnapshotBeforeUpdate(上一次外界传入的数据, 上一次 state 的数据)

  > 这个钩子是在更新阶段执行, 是在 render 之后,componentDIdUpdate 之前.正好处于新旧真实 DOM 交替之间.

  - 应用场景: 当聊天的内容高度超过了 ul 的高度,后续的聊天内容看不到了(9 之后的聊天内容看不到了)

    ![](/images/snapShot_before.png)

    ```js
    import React, { Component } from 'react'
    import './SnapShotDemo.css'
    export default class Count extends Component {
      state = {
        messages: [],
      }
      componentDidMount() {
        const arr = []
        this.timeid = setInterval(() => {
          if (arr.length >= 20) return clearInterval(this.timeid)
          arr.push('我和别人的的聊天内容: 哈哈' + arr.length)
          this.setState({
            messages: arr,
          })
        }, 1000)
      }
      render() {
        const { messages } = this.state
        return (
          <div>
            <ul className="box" ref={(node) => (this.rootNode = node)}>
              {messages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )
      }
    }
    ```

  - 使用 getSnapshotBeforeUpdate 解决上面的问题

    ![](/images/snapShot_after.png)

    ```js
    import React, { Component } from 'react'
    import './SnapShotDemo.css'
    export default class Count extends Component {
      state = {
        messages: [],
      }
      componentDidMount() {
        const arr = []
        this.timeid = setInterval(() => {
          if (arr.length >= 20) return clearInterval(this.timeid)
          arr.push('我和别人的聊天内容: 哈哈' + arr.length)
          this.setState({
            messages: arr,
          })
        }, 1000)
      }
      //使用getSnapshotBeforeUpdate需要componentDidUpdate的配合
      getSnapshotBeforeUpdate() {
        // return的结果,传递给了componentDidUpdate的第三个形参
        return this.rootNode.scrollHeight // 这里返回的是ul中添加新数据之前的内容高度
      }
      componentDidUpdate(preProps, preState, snapshot) {
        // preProps 是上一次外面传入的数据(当前案例未使用)
        // preState 是上一次state的值(当前案例未使用)
        // snapShot 是getSnapshotBeforeUpdate中的返回值, 也就是ul更新前的内容高度
        // currentHeight 是ul更新后的内容高度
        const currentHeight = this.rootNode.scrollHeight
        // currentTop 是ul当前顶部滚动出去的距离
        const currentTop = this.rootNode.scrollTop
        // (currentHeight - snapshot) 得到的是ul内容更新前后的高度差
        //  currentTop + (currentHeight - snapshot) 计算出来的是ul更新之后,顶部应该滚动出去的距离
        this.rootNode.scrollTop = currentTop + (currentHeight - snapshot)
      }
      render() {
        const { messages } = this.state
        return (
          <div>
            <ul className="box" ref={(node) => (this.rootNode = node)}>
              {messages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )
      }
    }
    ```

- shouldComponentUpdate(新的 props,新的 state)

  > shouldComponentUpdate 在更新阶段执行, 可以控制 render 函数是否调用.
  >
  > 也就是说 shouldComponentUpdate 可以控制组件是否更新
  >
  > 返回 true 则更新组件, 返回 false 则不更新组件

  **注意:**

  1. 在其他生命周期钩子函数中 this.state 和 this.props 都是最新的数据,但是在 shouldComponentUpdate 中 this.state 和 this.props 是上一次的数据,通过形参接收的是新的数据
  2. forceUpdate 触发的更新,不会执行 shouldComponentUpdate

  ```js
  import React, { Component } from 'react'

  export default class Demo extends Component {
    state = {
      msg: 'hello scu',
    }
    shouldComponentUpdate(nextProps, nextState) {
      // 判断nextState(新的)数据和this.state(旧的数据)如果相同则返回false,不更新组件. 如果不同则返回true,更新组件
      return nextState.msg !== this.state.msg
    }
    render() {
      console.log('demo更新了')
      return (
        <div>
          Demo
          <span>{this.props.count}</span> <br />
          <span>{this.state.msg}</span> <br />
          <button
            onClick={() => {
              this.setState({
                msg: 123,
              })
            }}
          >
            demo-按钮
          </button>
        </div>
      )
    }
  }
  ```
