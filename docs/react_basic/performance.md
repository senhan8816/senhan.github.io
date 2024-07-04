# 性能优化

UI 更新需要昂贵的 DOM 操作，因此 React 内部使用了几种巧妙的技术来最小化 DOM 操作次数

## 减轻 state

和渲染相关的数据存储到 state,与渲染无关的数据不要存储在 state 里面 . 如果将与渲染无关的数据存储到 state 中,修改数据时调用 setState.是导致组件更新.造成没有必要的重新渲染

## shouldComponentUpdate

shouldComponentUpdate 在组件的更新阶段执行.

父组件更新或调用当前组件的 setState 会触发 shouldComponentUpdate.

shouldComponentUpdate 的返回值绝对了组件 render 函数是否执行. 返回 true 执行,返回 false 不执行

## PureComponent(纯组件)

`shouldComponentUpdate`有一个缺点: 如果组件中的 state 和 props 很多,则开发者需要写很多判断表达式,令人厌烦.所以 react 提供了一个 `PureComponent` 帮我们解决这个问题

```jsx{3}
import React, { Component, PureComponent } from 'react'
// 在Demo组件中继承PureComponent 可以实现和shouldComponentUpdate相同的效果
export default class Demo extends PureComponent {
  state = {
    msg: 'hello scu',
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

**`React.PureComponent` 与 `React.Component`很相似。两者的区别在于 `React.Component`并未实现 `shouldComponentUpdate()`，而 `React.PureComponent` 中以浅层对比 prop 和 state 的方式来实现了该函数。**

**注意:**`React.PureComponent` 中的 `shouldComponentUpdate()` 仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果

```js
<button
  onClick={() => {
    // 直接修改obj中name的值.纯组件在比较时,只比较obj中存储的对象地址是否发生变化,这时不认为数据变化,则不会正确更新
    this.state.obj.name = 'ls'
    this.setState({
      obj: this.state.obj,
    })
  }}
>
  demo-按钮
</button>
```

解决方式:

```js
<button
  onClick={() => {
    // 根据obj生成新的newObj对象. 将newObj赋值给obj.这时obj的地址发生变化,组件就可以正确更新了
    // 实际开发中,经常会使用第三方组件,第三方组件中可能使用了PureComponent,所以修改数据时,最好都根据旧数据生成新数据,以避免组件无法更新的错误
    const newObj = { ...this.state.obj }
    newObj.name = 'ls'
    this.setState({
      obj: newObj,
    })
  }}
>
  demo-按钮
</button>
```

## useState

> shouldComponentUpdate 和 PureComponent 只使用于类组件,函数组件无法使用. 所以 react 团队在定义`useState`的时候,就考虑到了这个问题. 如果使用 useState 定义状态,则状态没有发生变化,函数组件不会更新.

## useCallback

> 用于缓存函数组件中定义的函数,减少函数创建次数.

## useMemo

> 用于缓存函数计算的结果,减少函数调用次数.

## React.memo

> `useState`已经处理了 state 没有变化,则函数组件不更新. 但是父组件更新,作为子组件的函数组件还是会更新,所以 react 提供了 memo 方法,帮我们解决这个问题

```jsx
import React from 'react'

function Test() {
  // Test组件只在父组件传入新的props时更新
  return <div>Test</div>
}
export default React.memo(Test)
```

React.Memo 默认情况下只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现

```jsx{1-6,13}
function equal(prevProps, nextProps) {
  // prevProps是上一次props数据
  // nextProps是最新的props数据
  // 注意: 如果返回true则不更新,返回false则更新
  return prevProps.属性 === nextProps.属性
}
import React from 'react'

function Test() {
  // Test组件只在父组件传入新的props时更新
  return <div>Test</div>
}
export default React.memo(Test, equal)
```

## key

列表渲染时给子元素添加 key，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素。减少子元素的重新创建. **再次强调:** key 需要在父元素范围内不重复,并具有稳定性
