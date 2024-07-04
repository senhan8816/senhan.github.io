# props

> 作用: 每个组件都是封闭独立的,props 可以让组件接收组件外部的数据

**应用场景:**

假设有一个 List 组件,用于渲染无序列表,但是要渲染的数据是无法确定的.只有在使用 List 时才知道要渲染什么数据.这时就可以利用 props 将数据传递给 List,进而渲染出来

## props 的基本使用

> props 使用主要是两个步骤: 1. 给组件传递数据 2. 在组件内部接收数据

- 传数据:

```js{7-10}
//在App组件的jsx结构中使用List组件
class App extends Component {
  render() {
    // 利用props方式给List组件传递数据, 属性名={值}就是传递数据的方法.属性名自定义
    return (
      <div>
        {/*第一个List渲染数字*/}
        <List arr={[1, 2, 3]} />
        {/*第二个List渲染字符*/}
        <List arr={['a', 'b', 'c']} />
      </div>
    )
  }
}
```

- 接收数据

  - 函数组件接收

    ```js
    // 如果List组件是函数组件,则通过形参props接收数据.
    function List(props) {
      console.log(props) //props是对象 {arr: [...]} 对象中的属性,就是传递数据时,组件上的属性
      return <ul>...</ul>
    }
    ```

  - 类组件接收

    ```js
    // 如果List是类组件,则通过this.props接收数据
    class List extends Component {
      render() {
        console.log(this.props) //props是对象 {arr: [...]} 对象中的属性,就是传递数据时,组件上的属性
        return <ul>...</ul>
      }
    }
    ```

## props 的注意点:

1.  props 传递数据是自上而下的(父-->子), 而且必须逐级传递.

    如果有三个组件 App -->Far-->Son. 要将 App 的数据,传递给 Son. 只能先将数据从 App 传递给 Far,再从 Far 组件中传递数据给 Son

2.  props 可以传递任何类型的数据

    **除了传递一些普通的数据类型以外, 还可以传递虚拟 dom,组件类型和组件实例**

    ```js
    function Demo() {
      return <div>demo组件</div>
    }
    // node属性传递的是虚拟dom, elementType传递的是Demo组件, element传递的是Demo组件实例
    ;<Test node={<h1>虚拟dom</h1>} elementType={Demo} element={<Demo />} />

    function Test(props) {
      return (
        <div>
          // 渲染虚拟DOM
          {props.node}
          // 渲染组件实例
          {props.element}
          // 使用Demo组件
          <props.elementType />
        </div>
      )
    }
    ```

3.  **props 数据是只读的,不要修改**.并且 react 内部会检查我们是否修改了 props 数据,如果修改数据,会在控制台警告. 但是 react 内部检查是浅层对比.如果 props 中的数据是复杂数据类型,并且修改的是复杂数据类型中的值,则数据会被修改(不建议这样操作).

4.  在类组件的 constructor 中,无法直接通过 this.props 获取到数据.如需获取,必须在 constructor 的形参接收 props.并传递给 super()

    ```js
    constructor(){
        super()
        console.log(this.props) // 这样拿不到数据
    }

    constructor(props){
        super(props)
        console.log(this.props) // 这样就可以拿到数据了
    }
    ```

## props 校验

> 对传入组件的 props 数据进行类型检查

实现:

```js
// 在create-react-app创建的项目中,无需额外下载,直接引入就可以
import PropTypes from 'prop-types'

function Test() {
  return <div></div>
}
// 组件需要配置props校验,就给组件添加静态属性propTypes
Test.propTypes = {
  // 校验规则详询React官网
  属性: PropTypes.数据类型.isRequired,
}
```

[详细校验规则参考官网](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)

## props 默认值

> 给传入组件的 props 数据配置默认值

实现:

```js
function Test() {
  return <div></div>
}
// 组件需要配置props默认值,就给组件添加静态属性defaultProps
// 当没有传递对应的属性时,默认值生效
Test.defaultProps = {
  属性: 默认值,
}
```

## props 批量传递数据

> 如果要将对象中的所有数据,一个一个的传递给某个组件,可以使用 props 批量传递简化代码

例如:

```js
// 假设有一个对象 obj =  {x:1,y:2,z:3}
<Test x={obj.x} y={obj.y} z={obj.z} />

// 使用批量传递,可以达到和上面代码同样的效果,但是非常简洁
<Test {...obj} />
```

## props 的 children 属性

写在组件子节点的内容,默认为 props 对象中 children 属性的值

```js
<Test>测试</Test>

function Test(props) {
  // 展示`测试`两个字
  return <div>{props.children}</div>
}
```
