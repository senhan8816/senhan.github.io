# 类组件中函数的 this 问题

> 函数组件中没有 this,所以这里主要讨论类组件中的 this. 在类组件中 constructor 和 render 的 this 一定指向组件实例,这是确定的. 所以下面讨论的 this,主要是组件中事件处理函数的 this 问题

```js
render() {
    const { isEdit} = this.state
    return (
      <li>
        {!isEdit ? (
          <label>
            <input type="checkbox"/>
            <span >学习javascript</span>
          </label>
        ) : (
          <input type="text"/>
        )}
        <button
          onClick={() => {
            this.setState({ isEdit: !isEdit})
          }}>
          {/* 通过判断isEdit的值,控制按钮文本 */}
          {!isEdit ? '编辑' : '取消'}
        </button>
      </li>
    )
  }
```

通过上面的代码,我们可以看到,render 函数中本来就有大量的 JSX 结构, 一般事件处理函数中也可能出现大量复杂的代码,为了提高代码的可读性. 一般我们并不会在 JSX 中直接定义事件处理函数. 更好的处理方式是把事件处理函数定义在 JSX 结构外面.

实际开发中,大部分开发者中会选择,将事件处理函数通过类的语法定义在类的原型上.如下面代码所示:

```js{3,4,9}
import React, { Component } from 'react'
export default class Test extends Component {
  // 按照es6类的语法,把函数写在这里,就是把函数定义在了当前类的原型上
  handle(){}

  render() {
    return (
        <button
          onClick={this.handle}>
         按钮
        </button>
      </li>
    )
  }
}
```

把事件处理函数定义在类的原型上,无疑是非常好的选择,因为当前类的所有实例,都可以访问这个函数. 而且这个函数只在原型上创建了一次,性能也更好.但是这样写也有问题. 就是无法再通过 this 访问到当前组件实例了

接下来,主要讨论一下,如何让 handle 函数中的 this 指向当前组件实例

- 方法一(箭头函数法):

  ```js{8-12}
  import React, { Component } from 'react'
  export default class Test extends Component {
    // 按照es6类的语法,把函数写在这里,就是把函数定义在了当前类的原型上
    handle(){}

    render() {
      return (
          <button
          {/* 注意: 此时的handle其实不是事件处理函数了, 而外层的箭头函数才是事件处理函数. 由于箭头函数没有this,所以这里的this是render的this. render中的this一定指向当前组件实例. 当用户点击按钮,箭头函数作为事件处理函数执行, 里面的代码this.handle()就会执行. 此时handle函数是被对象调用的.所以handle中的this就指向调用的对象,而调用的对象,不就是组件实例嘛 */}
            onClick={()=>{this.handle()}}>
           按钮
          </button>
        </li>
      )
    }
  }
  ```

- 方式二(使用 bind): 这种方式也是 React 官网示例中的处理方式

  ```js{4-7}
  import React, { Component } from 'react'
  export default class Test extends Component {
    constructor(){
      //首先constructor中的this一定是当前组件实例.这行代码是利用原型上的handle函数,克隆了一个新的函数,这个新函数中的this固定指向了当前组件实例.  然后又将这个新的函数,赋值给当前组件实例的handle属性. 所以此时组件实例有一个handle属性,指向新的函数(新函数中的this又指向实例). 原型上有一个handle函数.
      // 由于类组件在加载时,一定先执行constructor,后执行render.所以在render函数中绑定click事件的handle是实例的handle. 而实例handle中的this的指向已经被绑定指向实例.
      // 但是这种处理方式逻辑比较复杂,并且实例和原型都有handle,性能也不是很好,所以不建议使用
  	  this.handle = this.handle.bind(this)
    }

    // 按照es6类的语法,把函数写在这里,就是把函数定义在了当前类的原型上
    handle(){}

    render() {
      return (
          <button
            onClick={this.handle}>
           按钮
          </button>
        </li>
      )
    }
  }
  ```

- 方式三: 利用 es7 中实验性语法,直接添加给实例添加 handle

  ```js
  import React, { Component } from 'react'
  export default class Test extends Component {

    constructor(){
  	   this.handle = ()=>{}
    }

    //这是es7中的实验性语法,不过在create-create-app创建的项目中可以直接使用,因为项目中配置了babel
    //这种写法是将handle直接添加到了组件的实例上面.可以理解为上面构造器中代码的简写形式
    //所以这个handle里面的this,相当于使用的是construtor的this,当然可以指向组件实例.
    handle = () => {}

    // 而且,我们已经定义状态也可以使用简写:
    state = {isEdit: false} // 这就相当于在constructor中写this.state = {isEdit: false}

    render() {
      return (
          <button
            onClick={this.handle}>
           按钮
          </button>
        </li>
      )
    }
  }
  ```

**总结: 如果事件处理函数不需要访问组件实例,则应该添加到原型上. 如果需要访问组件实例,推荐使用 es7 实验性语法**

