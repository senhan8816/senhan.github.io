<template><h1 id="组件通讯" tabindex="-1"><a class="header-anchor" href="#组件通讯" aria-hidden="true">#</a> 组件通讯</h1>
<p>实际开发中,组件和组件之间,经常需要互相传递数据. 这就是组件通讯</p>
<p>react 组件通讯常用的三种方式:</p>
<ul>
<li>props 主要用于父传子,只能一级一级传递</li>
<li>context react 提供的方案,自上而下传递,允许跨级传递</li>
<li>pubsub-js 第三方 js 库,不需要考虑组件关系,随意传递</li>
</ul>
<p><img src="/images/组件通讯.png" alt="组件通讯"></p>
<h2 id="利用-context-实现组件通讯" tabindex="-1"><a class="header-anchor" href="#利用-context-实现组件通讯" aria-hidden="true">#</a> 利用 context 实现组件通讯</h2>
<blockquote>
<p>这种方式主要适用于父级组件给子孙级组件传递数据.也是自上而下的,但是跟 props 的区别: 可以跨级传递数据</p>
</blockquote>
<ul>
<li>
<p>传数据:</p>
<ol>
<li>
<p>创建 context 对象</p>
<p>const context = React.createContext('默认值')</p>
<p><strong>注意: 默认值是在不写 Provider 的时候生效</strong></p>
</li>
<li>
<p>从 context 中解构 Provider 组件.</p>
<p>const {Provider} = context</p>
</li>
<li>
<p>在要传递数据的组件中使用 Provider 包裹整个组件的 JSX. 并添加 value 属性,值就是要传递的数据</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>数据<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Far</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Far</span></span><span class="token punctuation">></span></span><span class="token plain-text"> </span><span class="token punctuation">{</span><span class="token comment">/*Far组件的子组件是Son组件,父组件是App组件*/</span><span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span>
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
<h2 id="利用-pubsub-js-实现组件通讯" tabindex="-1"><a class="header-anchor" href="#利用-pubsub-js-实现组件通讯" aria-hidden="true">#</a> 利用 pubsub-js 实现组件通讯</h2>
<p><strong>注意</strong></p>
<ul>
<li>
<p>pubsub-js 是一个独立的 js 库,而 props 和 context 是 react 技术.这一点很不一样</p>
</li>
<li>
<p>props 和 context 在传递数据时,要求组件之间有嵌套关系.但是 pubsub-js 不需要</p>
</li>
<li>
<p>pubsub-js 是基于发布订阅模式的 js 库, 传递数据的组件就是发布者, 接收数据的组件就是订阅者.一个组件既可以是发布者,也可以是订阅者.一个发布者,可以对应多个订阅者</p>
</li>
</ul>
<p><strong>实现:</strong></p>
<ol>
<li>
<p>安装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">在项目根目录下</span><span class="token operator">:</span> npm i pubsub<span class="token operator">-</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>哪里需要就在那里导入(发布和订阅的组件都需要引入)</p>
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
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 以异步的形式的发布一个话题</span>
<span class="token comment">// 'car'是话题, 所有订阅了'car'这个话题对应的回调函数都会被调用</span>
<span class="token comment">// 'hello world!' 具体要传递的数据</span>
PubSub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">,</span> <span class="token string">'hello world!'</span><span class="token punctuation">)</span>

<span class="token comment">// 取消指定的订阅 一般在组件卸载的时候,取消指定订阅</span>
PubSub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span>subId<span class="token punctuation">)</span>

<span class="token comment">// 取消某个话题的所有订阅</span>
PubSub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span>话题<span class="token punctuation">)</span>

<span class="token comment">// 取消所有订阅</span>
PubSub<span class="token punctuation">.</span><span class="token function">clearAllSubscriptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//为什么要取消订阅?</span>
<span class="token comment">//因为pubsub-js内部,管理了一个对象.每一次订阅的就是往对象中添加属性,值是数组,数组中存放了当前话题所对应的所有订阅的回调函数</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">car</span><span class="token operator">:</span> <span class="token punctuation">[</span>callback1<span class="token punctuation">,</span> callback2<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">//如果组件卸载了,但是组件的订阅还在,这就浪费了内存. 所以组件卸载的时候要清除订阅.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></li>
</ol>
</template>
