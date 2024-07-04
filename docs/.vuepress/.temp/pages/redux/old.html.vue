<template><h1 id="redux-旧版语法" tabindex="-1"><a class="header-anchor" href="#redux-旧版语法" aria-hidden="true">#</a> redux 旧版语法</h1>
<h2 id="redux-的基本使用" tabindex="-1"><a class="header-anchor" href="#redux-的基本使用" aria-hidden="true">#</a> redux 的基本使用</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1.下载redux包</span>
 npm i redux
<span class="token comment">// 2. 定义redecer函数</span>
<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'ADD'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token comment">//不写这行代码,msg的数据就被覆盖了</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> action<span class="token punctuation">.</span>num
      <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 3.引入创建store的方法</span>
<span class="token comment">// 如果在脚手架创建的项目执行,引入的代码必须写在最上面</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token comment">// 4. 创建store</span>
<span class="token comment">// const store = createStore(reducer,初始数据对象)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">'hello redux'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 调用subscribe,监听state的变化 注意: 要在dispatch之前调用</span>
store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'ADD'</span><span class="token punctuation">,</span> <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 触发reducer函数</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'ADD'</span><span class="token punctuation">,</span> <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 触发reducer函数</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="初始化-redux-的另一种方式-推荐" tabindex="-1"><a class="header-anchor" href="#初始化-redux-的另一种方式-推荐" aria-hidden="true">#</a> 初始化 redux 的另一种方式(推荐)</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义reducer的时候,把初始数据作为state的默认值</span>
<span class="token comment">// 原理: 因为创建store的时候,reducer会被调用,此时store中的初始值是undefined.所以reducer接收到的state是undefined.那么默认值就生效了.最终走到default这里,将默认值的数据返回给store.从而完成初始化store数据的操作</span>
<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello redux'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'ADD'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> action<span class="token punctuation">.</span>num<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 3.引入创建store的方法</span>
<span class="token comment">// 如果在脚手架创建的项目执行,引入的代码必须写在最上面</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token comment">// 4. 创建store</span>
<span class="token comment">// const store = createStore(reducer,初始数据对象)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span>

<span class="token comment">// 调用subscribe,监听state的变化 注意: 要在dispatch之前调用</span>
store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'ADD'</span><span class="token punctuation">,</span> <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 触发reducer函数</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'ADD'</span><span class="token punctuation">,</span> <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 触发reducer函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="redux-thunk" tabindex="-1"><a class="header-anchor" href="#redux-thunk" aria-hidden="true">#</a> redux-thunk</h2>
<blockquote>
<p>作用: redux 中默认不支持异步操作. 使用 redux-thunk,就可以在 redux 中执行异步代码</p>
<p>store.dispatch 默认只能传入 action 对象.使用了 redux-thunk, store.dispatch 中就可以传入一个回调函数,在回调函数中执行异步操作</p>
</blockquote>
<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤:</h3>
<ol>
<li>
<p>下载：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i redux<span class="token operator">-</span>thunk
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">'redux-thunk'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>导入 redux 中的一个函数：<code>applyMiddleware</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>配置 redux-thunk</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>执行异步操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里执行异步代码,异步成功之后,调用回调中接收的dispatch</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span>action对象<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ol>
<h3 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明:</h3>
<p>redux 把 redux-thunk 称之为<code>中间件</code>.
何为中间件呢? 中间件本质上其实就是一个函数,在 dispatch 之后,reducer 调用之前执行</p>
<p>默认情况: dispatch 调用 --&gt; reducer 执行
配置了 redux-thunk: dispatch 调用 --&gt; 中间件函数执行 --&gt; reducer 执行</p>
<p>我们现在分析一下刚才 redux-thunk 的第 5 步:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 配置redux-thunk之后,redux会判断dispatch传入的是action对象还是回调函数,如果传入action对象则直接触发reducer,如果传入回调,则执行回调.</span>
<span class="token comment">// 其实这个回调才是真正的中间件,但是开发者交流的时候,会把redux-thunk称之为中间件</span>
<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里执行异步代码,异步成功之后,调用回调中接收的dispatch</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span>action对象<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="chrome-的-redux-插件" tabindex="-1"><a class="header-anchor" href="#chrome-的-redux-插件" aria-hidden="true">#</a> chrome 的 redux 插件</h2>
<ol>
<li>
<p>在 chrome 中安装 Redux DevTools 插件</p>
</li>
<li>
<p>创建 store 的时候进行配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 单独使用 redux 浏览器插件：</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span>
     <span class="token comment">// 单独使用 redux 浏览器插件</span>
     window<span class="token punctuation">.</span>__REDUX_DEVTOOLS_EXTENSION__ <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span><span class="token function">__REDUX_DEVTOOLS_EXTENSION__</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">// 2. 和中间件配合使用</span>
npm i  redux<span class="token operator">-</span>devtools<span class="token operator">-</span>extension <span class="token operator">-</span><span class="token constant">D</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> composeWithDevTools <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux-devtools-extension'</span>

<span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span><span class="token function">composeWithDevTools</span><span class="token punctuation">(</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>logger<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li>
</ol>
<h2 id="combinereducers" tabindex="-1"><a class="header-anchor" href="#combinereducers" aria-hidden="true">#</a> combineReducers</h2>
<blockquote>
<p>实际开发中,大多数情况都是多人协作开发一个项目,为了尽可能避免代码冲突.每个开发者都会定义自己的 reducer 函数.但是创建 store 的时候只能传入一个 reducer 函数,所以就需要将多个 reducer 合并成一个.</p>
</blockquote>
<p><strong>注意: 合并 reducer 之后,store 的数据结构会发生变化</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token keyword">const</span> rootReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">zs</span><span class="token operator">:</span> zs的reducer函数<span class="token punctuation">,</span>
  <span class="token literal-property property">ls</span><span class="token operator">:</span> ls的reducer函数<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 假设:</span>
<span class="token comment">// zs的reducer函数:  function reducer(state={count:0},action){里面只写修改count的case和default}</span>
<span class="token comment">// ls的reducer函数:  function reducer(state={ xxx: 0},action){里面只写修改xxx的case和default}</span>

<span class="token comment">// 合并之后store中的数据结构: {zs:{count:0},ls:{xxx:'abc'}}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="redux-的使用规范" tabindex="-1"><a class="header-anchor" href="#redux-的使用规范" aria-hidden="true">#</a> redux 的使用规范</h2>
<blockquote>
<p>实际开发中,一般会把 redux 的代码分成 4 个文件:</p>
</blockquote>
<ul>
<li>
<p>store.js 创建 store 对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  createStore<span class="token punctuation">,</span>
  composeWithDevTools<span class="token punctuation">,</span>
  applyMiddleware<span class="token punctuation">,</span>
  combineReducers<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token comment">// 合并reducer</span>
<span class="token keyword">const</span> rootRedcuer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 创建store</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>
  rootRedcuer<span class="token punctuation">,</span>
  <span class="token comment">// 使用redux调试工具和redux-thunk</span>
  <span class="token function">composeWithDevTools</span><span class="token punctuation">(</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>
<li>
<p>constants.js 定义常用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 常量或变量有代码提示,直接拼写字符串没有代码提示</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ADD</span> <span class="token operator">=</span> <span class="token string">'ADD'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>actions.js 定义 actionCreator</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 可能项目中好几个地方都要用到同一个type的action对象,所以为了方便,定义一个函数,返回action对象. 这个函数被称为actionCreator</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ADD</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants'</span>
<span class="token comment">// 同步action</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// action中的其他属性的名称,建议定义成payload</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD</span><span class="token punctuation">,</span> payload <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 异步action</span>
<span class="token keyword">function</span> <span class="token function">asyncAdd</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li>
<li>
<p>reducer.js 定义 reducer 函数</p>
<blockquote>
<p>如果有多个 reducer 函数,则需要定义多个 reducer 文件</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> 初始数据<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">ADD</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>忽略 <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
</template>
