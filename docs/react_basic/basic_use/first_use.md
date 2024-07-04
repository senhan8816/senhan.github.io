# 在 html 中引入和使用

1. 在 html 定义一个根标签

   ```html{10,11}
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
     </head>
     <body>
       <!-- 将通过react创建出来的dom对象插入到这个节点中 -->
       <div id="root"></div>
     </body>
   </html>
   ```

2. 引入两个 JS 文件（ 注意引入顺序 ）

   ```html{13-17}
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
     </head>
     <body>
       <!-- 将通过react创建出来的dom对象插入到这个节点中 -->
       <div id="root"></div>

       <!-- 注意: 要先引入react, 后引入react-dom. 后者依赖前者 -->
       <!-- 提供react核心api. 提供了React对象-->
       <script src="https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.js"></script>
       <!-- 提供了react中操作dom的api, 提供了ReactDOM对象-->
       <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.development.js"></script>
     </body>
   </html>
   ```

3. 创建 react 元素(虚拟 dom)

   ```html{19-26}
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
     </head>
     <body>
        <!-- 将通过react创建出来的dom对象插入到这个节点中 -->
       <div id="root"></div>

       <!-- 注意: 要先引入react, 后引入react-dom. 后者依赖前者 -->
       <!-- 提供react核心api. 提供了React对象-->
       <script src="https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.js"></script>
       <!-- 提供了react中操作dom的api, 提供了ReactDOM对象-->
       <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.development.js"></script>

       <script>
         // 返回值：React元素
         // 第一个参数：要创建的React元素名称 字符串
         // 第二个参数：该React元素的属性 null或者对象 {id: 'box'}
         // 第三个及其以后的参数：该React元素的子节点 文本或者其他react元素
         const title = React.createElement('h1', null, 'Hello React')
         console.log(title) // {$$typeof: Symbol(react.element), ...}
       </script>
     </body>
   </html>
   ```

4. 渲染 react 元素

   ```html{26,27}
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
     </head>
     <body>
       <!-- 将通过react创建出来的dom对象插入到这个节点中 -->
       <div id="root"></div>
       <!-- 注意: 要先引入react, 后引入react-dom. 后者依赖前者 -->
       <!-- 提供react核心api. 提供了React对象-->
       <script src="https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.js"></script>
       <!-- 提供了react中操作dom的api, 提供了ReactDOM对象-->
       <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.development.js"></script>

       <script>
         // 返回值：React元素
         // 第一个参数：要创建的React元素名称 字符串
         // 第二个参数：该React元素的属性 null或者对象 {id: 'box'}
         // 第三个及其以后的参数：该React元素的子节点 文本或者其他react元素
         const title = React.createElement('h1', null, 'Hello React')
         console.log(title) // {$$typeof: Symbol(react.element), ...}

         // 根据react元素(虚拟dom)创建真实dom对象,并插入到dom树中
         ReactDOM.createRoot(document.getElementById('root')).render(title)
       </script>
     </body>
   </html>
   ```

## 特殊属性

- 添加类名时,不应该使用 class,应该使用 className

```js{4}
const title = React.createElement(
  'h1',
  {
    className: 'active',
  },
  'Hello React'
)
```

- label 的 for 属性,要改成 htmlFor

```js{4}
const title = React.createElement(
  'label',
  {
    htmlFor: 'abc',
  },
  'Hello React'
)
```
