<template><h1 id="组件介绍及基本使用" tabindex="-1"><a class="header-anchor" href="#组件介绍及基本使用" aria-hidden="true">#</a> 组件介绍及基本使用</h1>
<blockquote>
<p>一个 React 应用就是由一个个的组件组成的</p>
</blockquote>
<p>组件是 react 中非常重要的一个特性.利用组件可以将 UI(页面结构) 拆分为独立可复用的代码片段，并对每个片段进行独立构思。</p>
<h2 id="为什么要使用组件" tabindex="-1"><a class="header-anchor" href="#为什么要使用组件" aria-hidden="true">#</a> 为什么要使用组件</h2>
<p>当我们写网页时,会发现网页中出现大量相同的结构, 传统的处理方式是将重复的标签再写一次. 如下图所示每一个商品的展示都是由多个标签组成.页面中会出现大量相同结构的标签.这样的代码维护起来非常困难.</p>
<p><img src="/images/com_des.png" alt=""></p>
<p>如果可以将这个相同结构的标签封装起来,就好像 js 中将相同的代码封装到函数里面,这样的代码维护性就会非常高.</p>
<p>还有, 轮播图是网页中常见效果,几乎每一个项目都要写. 轮播图中不仅有复杂的 html 结构,也有复杂的 js 逻辑. 如果把轮播图的 js 代码和其他功能的 js 代码写在一起,未来修改代码时,极容易<code>动一发牵全身</code>.如果可以将轮播的结构和 js 封装到一个文件中,这样不仅在写的时候方便查找元素,而且未来维护时也可以快速找到对应的文件进行修改,提高了编程效率</p>
<p><img src="/images/swiper.gif" alt=""></p>
<p>而且如果整个页面将所有结构都进行封装,也可以大大提高代码的解耦程度</p>
<h2 id="创建一个组件并使用" tabindex="-1"><a class="header-anchor" href="#创建一个组件并使用" aria-hidden="true">#</a> 创建一个组件并使用</h2>
<p><strong>react 中分为两类组件:</strong></p>
<ol>
<li>函数组件</li>
<li>类组件</li>
</ol>
<h3 id="创建函数组件" tabindex="-1"><a class="header-anchor" href="#创建函数组件" aria-hidden="true">#</a> 创建函数组件</h3>
<blockquote>
<p>创建函数组件的规则:</p>
<ol>
<li>组件名(函数名) 首字母大写</li>
<li>必须写 return, return 后面写 jsx, 如果无需渲染结构,则 return null</li>
</ol>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Item</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">></span>这是一个函数组件<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="创建类组件" tabindex="-1"><a class="header-anchor" href="#创建类组件" aria-hidden="true">#</a> 创建类组件</h3>
<blockquote>
<p>创建类组件的规则:</p>
<ol>
<li>组件名(类名)首字母大写</li>
<li>必须继承 React.Component 组件</li>
<li>类结构体中必须定义 render 函数</li>
<li>render 函数中必须 return, return 后面可以写 jsx 或 null</li>
</ol>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">class</span> <span class="token class-name">Item</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">></span>这是一个类组件<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件</h3>
<blockquote>
<p>类组件和函数组件使用的方式是一样的</p>
<ol>
<li>组件使用既可以写成双标签也可以写成单标签</li>
<li>使用组件,相当于就是实例化组件</li>
<li>组件使用写在哪里, 组件的结构就渲染在哪里</li>
</ol>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span>

<span class="token keyword">function</span> <span class="token function">Item</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">></span>这是一个函数组件<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token comment">/*使用Item组件*/</span><span class="token punctuation">}</span>
    <span class="token punctuation">{</span><span class="token comment">/* Item组件中的li标签就会渲染到当前位置*/</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>Item<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Item<span class="token operator">></span>
    <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token comment">/*使用Item组件另一种写法*/</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>Item <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><img src="/images/use_com.png" alt=""></p>
<p><strong>如图所示: Item 组件使用了两次,则渲染出来两个 li 标签, Item 组件写在<code>&lt;hr /&gt;</code> 标签之间, 则组件的结构就渲染在<code>&lt;hr /&gt;</code> 标签之间</strong></p>
</template>
