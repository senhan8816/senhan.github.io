# 操作表单

react 项目中操作表单有两种方式

1.  受控组件: 表单元素通常自己维护 state，并根据用户输入进行更新.被 React 以这种方式控制取值的表单输入元素就叫做`受控组件`(表单元素的值被 react 的 state 或 props 控制)

2.  非受控组件: 直接操作真实 DOM

## 受控组件

- 先以一个简单的文本框为例,学习受控组件方式

  ```js
  import React, { Component } from 'react'

  export default class Form extends Component {
  state = {
      username: '', //将用户在文本框中输入的内容,存储到当前组件状态中
  }

  // change事件处理函数. 原生中给文本框注册的change事件,在文本框失去焦点时触发. 但是react中change事件,只要输入变化就会触发change事件
  handle = (e) => {
      // 每一次用户输入,都会将用户输入的值,通过setState存储到state中
      this.setState({
          username: e.target.value
      })
      }
  }
  render() {
      return (
      <form>
          用户名:
          <input
          type="text"
          {/*
              文本框 value属性被组件state控制,此时用户在输入框中输入的内容,无法渲染到页面中的文本框里面.因为文本框的value的值被状态控制, 所以一定要定义change事件配合.在change事件处理函数中,将用户输入的内容赋值给state, state的值发生变化,文本框value的值也跟着变化,才会将用户输入渲染到文本框中
          */}
          value={this.state.username}
          onChange={this.handle}
          />
      </form>
      )
    }
  }
  ```

- 再来看下,其他的表单元素如何处理

  ```js
  import React, { Component } from 'react'

  export default class Test extends Component {
    state = {
      username: '',
      isAgree: false,
      city: 'bj',
      sex: '',
    }

    handle = (name) => {
      return (e) => {
        const value =
          e.target.type === 'checked' ? e > target.checked : e.target.value

        this.setState({
          [name]: value,
        })
      }
    }

    render() {
      const { username, isAgree, city } = this.state
      return (
        <form>
          用户名:
          <input
            type="text"
            value={username}
            onChange={this.handle('username')}
          />
          <br />
          性别:
          <input
            type="text"
            name="sex"
            value="male"
            onChange={this.handle('sex')}
          />
          男
          <input
            type="text"
            name="sex"
            value="female"
            onChange={this.handle('sex')}
          />
          女 <br />
          选择地区:
          <select value={city} onChange={this.handle('city')}>
            <option value="bj">北京</option>
            <option value="sz">深圳</option>
            <option value="sh">上海</option>
          </select>
          <br />
          同意协议:
          <input
            type="checkbox"
            checked={isAgree}
            onChange={this.handle('isAgree')}
          />
          <br />
        </form>
      )
    }
  }
  ```

## 非受控组件

> 非受控组件的方式就是直接操作真实 dom,所以我们主要讨论,如何获取真实 dom

- 事件处理函数中 e.target 可以获取到事件目标的真实 DOM

- 在组件渲染成功之后,通过 DOM 原生获取方式拿到真实 DOM

- React 中提供的 refs 技术,拿到真实 DOM

  - 方式一

    ```js{5,13,16}
    import React, { Component } from 'react'

    // ref使用的第一种写法:
    // 1. 创建ref对象
    const refXXX = React.createRef()
    // 2. 绑定要获取的真实dom所对应的JSX标签和ref对象
    // 3. 直接通过ref对象.current获取到对应的真实dom
    export default class App extends Component {
      render() {
        return (
          <div>
            {/* 2.绑定 */}
            <input type="text" ref={refXXX} />
            <button
              onClick={() => {
                console.log(refXXX.current) //3. input的真实dom
              }}
            >
              按钮
            </button>
          </div>
        )
      }
    }
    ```

  - 方式二

    ```js{13-15}
    // ref使用的第二种写法:
    // 1. 直接给需要获取真实dom所对应的JSX标签添加ref属性
    // 2. ref属性的值是一个函数
    // 3. 当真实dom创建好的时候,函数会调用,会将真实dom传递给函数的形参

    import React, { Component } from 'react'
    export default class App extends Component {
      render() {
        return (
          <div>
            <input
              type="text"
              ref={(node) => {
                this.yyy = node // 将真实dom存储到组件实例的yyy属性,.方便后续操作
              }}
            />
            <button
              onClick={() => {
                console.log(this.yyy)
              }}
            >
              按钮
            </button>
          </div>
        )
      }
    }
    ```
