<template><h1 id="组件通讯" tabindex="-1"><a class="header-anchor" href="#组件通讯" aria-hidden="true">#</a> 组件通讯</h1>
<h3 id="_3-5-react-组件通讯" tabindex="-1"><a class="header-anchor" href="#_3-5-react-组件通讯" aria-hidden="true">#</a> 3.5 React 组件通讯</h3>
<blockquote>
<p>实际开发中,组件和组件之间,经常需要互相传递数据. 这就是组件通讯</p>
</blockquote>
<h4 id="_3-5-1-利用-props-实现组件通讯" tabindex="-1"><a class="header-anchor" href="#_3-5-1-利用-props-实现组件通讯" aria-hidden="true">#</a> 3.5.1 利用 props 实现组件通讯</h4>
<blockquote>
<p>这种传递数据的方式,主要适用于父组件给子组件传递数据</p>
</blockquote>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\props传值.png" alt=""></p>
<ul>
<li>传数据:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//在App组件的JSX结构中使用Far组件. 所以App是父组件, Far是子组件</span>
<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello props'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 利用props方式给Far组件传递数据, 属性名={值}就是传递数据的方法.属性名自定义</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>Far xxx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>msg<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>
<p>接收数据</p>
<ul>
<li>
<p>函数组件接收</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如果Far组件是函数组件,则通过形参props接收数据.</span>
<span class="token keyword">function</span> <span class="token function">Far</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">//props是对象 {xxx: 'hello props'} 对象中的属性,就是传递数据时,组件上的属性</span>
  <span class="token keyword">return</span> <span class="token constant">JSX</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>
<p>类组件接收</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如果Far是类组件,则通过组件实例.props接收数据</span>
<span class="token keyword">class</span> <span class="token class-name">Far</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">//props是对象 {xxx: 'hello props'} 对象中的属性,就是传递数据时,组件上的属性</span>
    <span class="token keyword">return</span> <span class="token constant">JSX</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>
<p>props 的注意点:</p>
<ol>
<li>
<p>props 传递数据是自上而下的(父--&gt;子), 而且必须逐级传递.</p>
<p>如果有三个组件 App --&gt;Far--&gt;Son. 要将 App 的数据,传递给 Son. 只能先将数据从 App 传递给 Far,再从 Far 组件中传递数据给 Son</p>
</li>
<li>
<p>props 可以传递任何类型的数据</p>
<p>除了传递一些普通的数据类型以外, 还可以传递虚拟 dom,组件类型和组件实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>demo组件<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
<span class="token comment">// node属性传递的是虚拟dom, elementType传递的是Demo组件, element传递的是Demo组件实例</span>
<span class="token punctuation">;</span><span class="token operator">&lt;</span>Test
  node<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>h1<span class="token operator">></span>虚拟dom<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">}</span>
  elementType<span class="token operator">=</span><span class="token punctuation">{</span>Demo<span class="token punctuation">}</span>
  element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Demo <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">></span>

<span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token comment">// 渲染虚拟DOM</span>
      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>node<span class="token punctuation">}</span>
      <span class="token comment">// 渲染组件实例</span>
      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>element<span class="token punctuation">}</span>
      <span class="token comment">// 使用Demo组件</span>
      <span class="token operator">&lt;</span>props<span class="token punctuation">.</span>elementType <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li>
<li>
<p>props 数据是只读的,不要修改.并且 react 内部会检查我们是否修改了 props 数据,如果修改数据,会在控制台警告.react 内部检查时浅层对比.如果 props 中的数据是复杂数据类型,并且修改的是复杂数据类型中的值,则 react 检查失效</p>
</li>
<li>
<p>在类组件的 constructor 中,无法直接通过 this.props 获取到数据.如需获取,必须在 constructor 的形参接收 props.并传递给 super()</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token comment">// 这样拿不到数据</span>
<span class="token punctuation">}</span>

<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token comment">// 这样就可以拿到数据了</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
</ol>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>props 校验</p>
<blockquote>
<p>对传入组件的 props 数据进行类型检查</p>
</blockquote>
<p>实现:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在本地开发环境中,无需额外下载,直接引入就可以</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">'prop-types'</span>

<span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
<span class="token comment">// 组件需要配置props校验,就给组件添加静态属性propTypes</span>
Test<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 校验规则详询React官网</span>
  <span class="token literal-property property">属性</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>数据类型<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
<li>
<p>props 默认值</p>
<blockquote>
<p>给传入组件的 props 数据配置默认值</p>
</blockquote>
<p>实现:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
<span class="token comment">// 组件需要配置props默认值,就给组件添加静态属性defaultProps</span>
<span class="token comment">// 当没有传递对应的属性时,默认值生效</span>
Test<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 校验规则详询React官网</span>
  <span class="token literal-property property">属性</span><span class="token operator">:</span> 默认值<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
</ul>
<h4 id="_3-5-2-利用-context-实现组件通讯" tabindex="-1"><a class="header-anchor" href="#_3-5-2-利用-context-实现组件通讯" aria-hidden="true">#</a> 3.5.2 利用 context 实现组件通讯</h4>
<blockquote>
<p>这种方式主要适用于父级组件给子级组件传递数据.也是自上而下的,但是跟 props 的区别: 可以跨级传递数据</p>
</blockquote>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\context传值.png" alt=""></p>
<ul>
<li>
<p>传数据:</p>
<ol>
<li>
<p>创建 context 对象</p>
<p>const context = React.createContext('默认值')</p>
<p>注意: 默认值是在不写 Provider 的时候生效</p>
</li>
<li>
<p>从 context 中解构 Provider 组件.</p>
<p>const {Provider} = context</p>
</li>
<li>
<p>在要传递数据的组件中使用 Provider 包裹整个组件的 JSX. 并添加 value 属性,值就是要传递的数据</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>&lt;Provider value={数据}&gt;
      &lt;div&gt;
        &lt;h1&gt;App&lt;/h1&gt;
        &lt;Far&gt;&lt;/Far&gt;
      &lt;/div&gt;
 &lt;/Provider&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ol>
</li>
<li>
<p>接收数据</p>
<ul>
<li>
<p>方式一</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 原本的Son组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Son<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 利用context接收App传递的数据的Son组件</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>Consumer<span class="token punctuation">}</span> <span class="token operator">=</span> context <span class="token comment">//注意:context要求和传递数据的context是同一个对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Consumer<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Son<span class="token punctuation">,</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Consumer<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li>
<li>
<p>方式二</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 给当前组件添加一个静态属性 contextType, 值就是context对象 注意:context要求和传递数据的context是同一个对象</span>
  <span class="token keyword">static</span> contextType <span class="token operator">=</span> context
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//   this.context属性的值就是利用context技术传递过来的数据</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Son1<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
</li>
</ul>
<h4 id="_3-5-3-利用第三方库实现组件通讯" tabindex="-1"><a class="header-anchor" href="#_3-5-3-利用第三方库实现组件通讯" aria-hidden="true">#</a> 3.5.3 利用第三方库实现组件通讯</h4>
<blockquote>
<p>pubsub-js 是一个独立的 js 库,而 props 和 context 是 react 技术.这一点很不一样</p>
<p>props 和 context 再传递数据时,要求组件之间有嵌套关系.但是 pubsub-js 不需要</p>
<p>pubsub-js 是基于发布订阅模式的 js 库, 传递数据的组件就是发布者, 接收数据的组件就是订阅者.</p>
<p>一个组件既可以是发布者,也可以是订阅者.</p>
<p>一个发布者,可以对应多个订阅者</p>
</blockquote>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\pubsub传值.png" alt=""></p>
<p><strong>实现:</strong></p>
<ul>
<li>
<p>安装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">在项目根目录下</span><span class="token operator">:</span> npm install pubsub<span class="token operator">-</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>哪里需要就在那里导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> PubSub <span class="token keyword">from</span> <span class="token string">'pubsub-js'</span> <span class="token comment">// 导入的PubSub是一个对象.提供了发布/订阅的功能</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>pubsubjs 提供的方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// PubSub.subscribe(话题, 回调) 用于接收数据</span>
<span class="token comment">// 第一个参数: 话题. 传递数据时的标记</span>
<span class="token comment">// 第二个参数: 用于接收数据的函数</span>
<span class="token comment">// 返回值 当前订阅的唯一标识符. 用于清除当前订阅. 一般都会在组件挂载时订阅</span>
<span class="token keyword">var</span> subId <span class="token operator">=</span> PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// msg 话题</span>
    <span class="token comment">// data 传递的数据</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> msg<span class="token punctuation">,</span> data <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 以异步的形式的发布一个话题</span>
<span class="token comment">// 'car'是话题, 所有订阅了'car'这个话题对应的回调函数都会被调用</span>
<span class="token comment">// 'hello world!' 具体要传递的数据</span>
PubSub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">,</span> <span class="token string">'hello world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 发布的同步使用方法</span>
<span class="token comment">// 慎用!!!! 因为会阻塞发布者的代码执行</span>
PubSub<span class="token punctuation">.</span><span class="token function">publishSync</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">,</span> <span class="token string">'hello world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取消指定的订阅 一般在组件卸载的时候,取消指定订阅</span>
PubSub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span>subId<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取消某个话题的所有订阅</span>
PubSub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span>话题<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取消所有订阅</span>
PubSub<span class="token punctuation">.</span><span class="token function">clearAllSubscriptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//为什么要取消订阅:</span>
	因为pubsub<span class="token operator">-</span>js内部<span class="token punctuation">,</span>管理了一个对象<span class="token punctuation">.</span>每一次订阅的就是往对象中添加属性<span class="token punctuation">,</span>值是数组<span class="token punctuation">,</span>数组中存放了当前话题所对应的所有订阅的回调函数
	<span class="token punctuation">{</span>
        <span class="token literal-property property">car</span><span class="token operator">:</span> <span class="token punctuation">[</span>callback1<span class="token punctuation">,</span> callback2<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
 如果组件卸载了<span class="token punctuation">,</span>当时组件的订阅还在<span class="token punctuation">,</span>这就浪费了内存<span class="token punctuation">.</span> 所以组件卸载的时候要清除订阅<span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></li>
</ul>
</template>
