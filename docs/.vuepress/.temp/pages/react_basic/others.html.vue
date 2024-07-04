<template><h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1>
<h2 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h2>
<p>之前介绍 JSX 有且仅有一个根标签, 一般会使用 div 包裹整个 JSX 结构,这样用于包裹的 div 也会渲染到页面中,导致页面中出现大量无用的 div.可以使用 React.Fragment 组件代替 div 标签.React.Fragment 可以作为 JSX 的根标签,但不渲染任何结构</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">app</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">test</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="/images/f0.png" alt=""></p>
<p><strong>React.Fragment 简写</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">app</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">test</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="portals" tabindex="-1"><a class="header-anchor" href="#portals" aria-hidden="true">#</a> Portals</h2>
<p>默认情况下,组件在哪里使用,组件的结构就渲染在指定的位置. Portals 技术可以让组件的结构渲染你指定的任何位置. 当你在处理组件样式由于受到父组件结构影响时,Portals 是不错的选择.例如: 模态框</p>
<p><strong>Portals 是 ReactDOM 提供的 API</strong></p>
<p>需求: Test 组件依然写在 App 的 hr 后面.但是 Test 的结构需要渲染到 html 中的指定节点中</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- public/index.html --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--test-wrap 用来添加Test结构的节点 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test-wrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// App.js</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Test</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Test</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// Test.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span> <span class="token comment">// 注意: 这里不加/client</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 创建真实dom,添加Test结构</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// return &lt;div>Test组件的结构&lt;/div></span>
    <span class="token comment">// ReactDOM根据JSX创建真实DOM,并添加到this.container中</span>
    <span class="token keyword">return</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Test组件的结构</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件挂载成功时, 将this.container添加到真实DOM树上</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#test-wrap'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件卸载时, 将this.container从真实DOM树中移除</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#test-wrap'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><img src="/images/p_d.png" alt=""></p>
<p><strong>注意: 虽然结构渲染位置变化,但是并不影响 props 和 context 特性. 虽然 Test 的结构渲染到了#test-wrap 中,但是事件冒泡依然会冒泡到 Test 的父组件中.也会冒泡到#test-wrap</strong></p>
<h2 id="forwardref" tabindex="-1"><a class="header-anchor" href="#forwardref" aria-hidden="true">#</a> forwardRef</h2>
<p>forwardRef 技术和非受控组件中的 refs 技术相关. 在介绍 refs 时,给标签元素添加 ref 属性,可以拿到标签元素的真实 DOM.</p>
<p>接下来,我们讨论一下,如果把 ref 添加到组件的实例会怎么样</p>
<ul>
<li>
<p>给类组件添加 ref 属性</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Test</span></span>
  <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token comment">// 可以获取到Test组件实例</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Test</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="/images/ref1.png" alt=""></p>
</li>
<li>
<p>给函数组件添加 ref 属性</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// Demo是一个函数组件</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span>
  <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token comment">// 函数没有调用,并提示警告.函数组件不支持ref</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Demo</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="/images/ref2.png" alt=""></p>
</li>
</ul>
<p><strong>使用<code>forwardRef</code>,可以给函数组件添加 ref 属性</strong>. 虽然可以添加了,但是作用并不是拿到函数组件实例,而是将 ref 的值传递到函数组件内</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 之前定义的Demo组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Demo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用forwardRef定义的Demo组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// props 是传递给当前组件的数据</span>
  <span class="token comment">// ref是添加给Demo组件的ref值,ref的值可以是一个ref对象,也可以是一个函数.一般使用forwardRef时,大多传递的是ref对象</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Demo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>使用 forwardRef,将 ref 的值传递到组件内有什么意义呢?</strong></p>
<p>当我们定义一个公共组件时,可以将组件内真实 DOM,传递出去</p>
<p>比如下面的例子: 红框是一个 List 组件,绿框是一个导航列表.</p>
<p><img src="/images/list1.png" alt=""></p>
<p>点击绿框中的导航按钮,让所对应的组件进入可视区</p>
<p><img src="/images/list2.png" alt=""></p>
<p>那么在使用 List 组件的位置,就需要拿到 List 组件所对应的真实 DOM.调用<code>scrollIntoView()</code>让指定列表进入可视区.这时就可以使用 forwardRef 来暴露组件内的真实 DOM</p>
<p><strong>简单示例：</strong></p>
<ul>
<li>使用 List 组件的位置</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> refObj <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//refObj用于获取List组件内部的真实DOM(div)</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>refObj<span class="token punctuation">}</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>List 组件</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//ref接收到的就是refObj</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token comment">// 给div标签添加ref属性,值为refObj</span>
    <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token operator">*</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span><span class="token operator">...</span>渲染国家和区号的代码<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>通过以上代码,就可以在使用 List 组件的位置,拿到 List 组件内部 div 标签的真实 DOM 了</p>
<!-- ## 错误边界(Error Boundaries)

项目中某个组件中的错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。

错误边界是一种 React 组件，这种组件**可以捕获发生在其子组件树任何位置的 JavaScript 错误，并打印这些错误，同时展示降级 UI**，而并不会渲染那些发生崩溃的子组件树。错误边界可以捕获发生在整个子组件树的渲染期间、生命周期方法以及构造函数中的错误。

### 实现:

> 如果一个 class 组件中定义了 `static getDerivedStateFromError()`或 `componentDidCatch()` 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。应该使用 `static getDerivedStateFromError()` 渲染备用 UI ，使用 `componentDidCatch()` 打印错误信息。
>
> 错误边界的工作方式类似于 JavaScript 的 `catch {}`，不同的地方在于错误边界只针对 React 组件。只有 类组件才可以成为错误边界。你只需要声明一次错误边界组件, 然后可以随处使用

#### 定义错误边界

```jsx
import React from 'react'
export default class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    // error 是错误信息
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // 打印错误信息
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something wrong.</h1>
    }

    return this.props.children
  }
}
```

#### 使用错误边界

```jsx
import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Test from './Test'
export default class App extends Component {
  render() {
    return (
      <>
        <h1>App</h1>
        <hr />
        <ErrorBoundary>
          <Test></Test>
        </ErrorBoundary>
      </>
    )
  }
}
```

Test 组件中包含错误代码

```jsx
import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    //打印不存在的props变量
    console.log(props)
    return <div>Test</div>
  }
}
```

![错误边界](/images/e_b.png)

**注意: 错误边界无法捕获以下场景中产生的错误：**

- 事件处理
- 异步代码（例如 `setTimeout`回调函数）
- 服务端渲染
- 它自身抛出来的错误（并非它的子组件） -->
<h2 id="组件懒加载" tabindex="-1"><a class="header-anchor" href="#组件懒加载" aria-hidden="true">#</a> 组件懒加载</h2>
<p>直接使用<code>es6模块化</code>语法引入组件,则项目启动之后,所有的组件都会加载到内存中. 但是其实有些组件用户并没有访问,所以项目刚启动的时候,就没有必要加载这些还未访问的组件. 这时就可以使用懒加载技术,当用户访问某个组件的时候,再去加载这个组件.这样可以有效缩短项目启动的时间</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Test <span class="token keyword">from</span> <span class="token string">'./Test'</span> <span class="token comment">// Test组件会立刻加载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">const</span> Test <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./Test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//Test组件再使用之前才会被加载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>注意:</strong></p>
<ol>
<li>
<p>React.lazy 加载的组件,只支持默认导出(export default),不支持命名导出(named exports)</p>
</li>
<li>
<p>懒加载的组件必须被 <code>Suspense</code> 组件包裹. Suspense 的作用是在懒加载组件时,展示 loading 信息.提高用户体验.</p>
</li>
</ol>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">const</span> Test <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./Test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> isShow <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          点击展示Test组件
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
        <span class="token punctuation">{</span>isShow <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token comment">// fallback的值应该是react元素</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Test</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Test</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><!-- ### 组件懒加载失败处理

如果组件加载失败,会触发一个错误。可以通过错误边界（Error boundaries）技术来处理这些情况，提供用户体验

```jsx
import React, { Component, Suspense } from 'react'
// 错误边界组件
import MyErrorBoundary from './MyErrorBoundary'
// 懒加载Test
const Test = React.lazy(() => import('./Test'))

export default class App extends Component {
  state = {
    isShow: false,
  }
  render() {
    const { isShow } = this.state
    return (
      <MyErrorBoundary>
        <button
          onClick={() => {
            this.setState({
              isShow: true,
            })
          }}
        >
          点击展示Test组件
        </button>
        <hr />
        {isShow && (
          <Suspense fallback={<div>loading...</div>}>
            <Test></Test>
          </Suspense>
        )}
      </MyErrorBoundary>
    )
  }
}
``` -->
<h2 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化" aria-hidden="true">#</a> 国际化</h2>
<p>国际化是指用户可以切换网页中的国际语言</p>
<h3 id="处理页面中自定义的文本" tabindex="-1"><a class="header-anchor" href="#处理页面中自定义的文本" aria-hidden="true">#</a> 处理页面中自定义的文本</h3>
<ol>
<li>
<p>下载包:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// i18next 实现国际化的核心包</span>
<span class="token comment">// react-i18next 在react中使用i18next的包</span>
yarn add i18next react<span class="token operator">-</span>i18next
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>定义语言包</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// src/locales/lang/en_US.json // 英文语言包</span>
<span class="token punctuation">{</span>
<span class="token comment">// "app" 对应的是app组件中的文本</span>
<span class="token property">"app"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"helo"</span><span class="token operator">:</span> <span class="token string">"hello"</span><span class="token punctuation">,</span>
    <span class="token property">"sz"</span><span class="token operator">:</span> <span class="token string">"shenzhen"</span><span class="token punctuation">,</span>
    <span class="token property">"click"</span><span class="token operator">:</span> <span class="token string">"click"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span>
    <span class="token property">"age"</span><span class="token operator">:</span> <span class="token string">"age"</span><span class="token punctuation">,</span>
    <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"address"</span><span class="token punctuation">,</span>
    <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"tag"</span><span class="token punctuation">,</span>
    <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"action"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// "count" 对应的是count组件中的文本</span>
<span class="token property">"count"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"name"</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// src/locales/lang/zh_CN.json  // 中文语言包</span>
<span class="token punctuation">{</span>
<span class="token property">"app"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"helo"</span><span class="token operator">:</span> <span class="token string">"你好"</span><span class="token punctuation">,</span>
    <span class="token property">"sz"</span><span class="token operator">:</span> <span class="token string">"深圳"</span><span class="token punctuation">,</span>
    <span class="token property">"click"</span><span class="token operator">:</span> <span class="token string">"点击"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span>
    <span class="token property">"age"</span><span class="token operator">:</span> <span class="token string">"年龄"</span><span class="token punctuation">,</span>
    <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"地址"</span><span class="token punctuation">,</span>
    <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"标记"</span><span class="token punctuation">,</span>
    <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"操作"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"count"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"姓名"</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></li>
<li>
<p>定义国际化配置文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/locales/i18n.js</span>

<span class="token comment">// 引入第三方库</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">'i18next'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initReactI18next <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-i18next'</span>

<span class="token comment">//导入语言包</span>
<span class="token keyword">import</span> en_US <span class="token keyword">from</span> <span class="token string">'./lang/en_Us.json'</span>
<span class="token keyword">import</span> zh_CN <span class="token keyword">from</span> <span class="token string">'./lang/zh_CN.json'</span>

<span class="token comment">// 初始化i18n</span>
i18n<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>initReactI18next<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">resources</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置语言包</span>
    <span class="token literal-property property">en</span><span class="token operator">:</span> en_US<span class="token punctuation">,</span>
    <span class="token literal-property property">zh</span><span class="token operator">:</span> zh_CN<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token string">'zh'</span><span class="token punctuation">,</span> <span class="token comment">// 默认语言,值是resources的键</span>
  <span class="token literal-property property">interpolation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//escapeValue:转义传入的值以避免xss注入.</span>
    <span class="token comment">//react已经处理了,这里设置为false</span>
    <span class="token literal-property property">escapeValue</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></li>
<li>
<p>在入口文件中引入国际化配置文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入国际化配置,使其生效</span>
<span class="token keyword">import</span> <span class="token string">'./locales/i18n'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>在组件中使用</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Space<span class="token punctuation">,</span> Table<span class="token punctuation">,</span> Tag<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ColumnsType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/lib/table'</span>

<span class="token comment">// 引入国际化hook: useTranslation</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useTranslation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-i18next'</span>

<span class="token keyword">interface</span> <span class="token class-name">DataType</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">key</span><span class="token operator">:</span> string
 <span class="token literal-property property">name</span><span class="token operator">:</span> string
 <span class="token literal-property property">age</span><span class="token operator">:</span> number
 <span class="token literal-property property">address</span><span class="token operator">:</span> string
 <span class="token literal-property property">tags</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// t表示translate(翻译). 需要国际化的位置,调用t函数</span>
<span class="token comment">// i18n.changeLanguage('zh') 用于切换语言, 传入是值是i18n.js中resource的键</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> t<span class="token punctuation">,</span> i18n <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTranslation</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'app'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// ['app']表示使用语言包中app字段下面的内容</span>

<span class="token keyword">const</span> <span class="token literal-property property">columns</span><span class="token operator">:</span> ColumnsType<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DataType</span></span><span class="token punctuation">></span></span><span class="token plain-text"> = [
    </span><span class="token punctuation">{</span>
     <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
     <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
     <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
     <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
     <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
     <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'address'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
     <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
     <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'tag'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'tags'</span><span class="token punctuation">,</span>
     <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'tags'</span><span class="token punctuation">,</span>
     <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> <span class="token punctuation">{</span> tags <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
         </span><span class="token punctuation">{</span>tags<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
             <span class="token keyword">let</span> color <span class="token operator">=</span> tag<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">5</span> <span class="token operator">?</span> <span class="token string">'geekblue'</span> <span class="token operator">:</span> <span class="token string">'green'</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">'loser'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             color <span class="token operator">=</span> <span class="token string">'volcano'</span>
             <span class="token punctuation">}</span>
             <span class="token keyword">return</span> <span class="token punctuation">(</span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>tag<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                 </span><span class="token punctuation">{</span>tag<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
             </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>
             <span class="token punctuation">)</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
         </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
     <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
    </span><span class="token punctuation">{</span>
     <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'action'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'action'</span><span class="token punctuation">,</span>
     <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> record</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
         </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">Invite </span><span class="token punctuation">{</span>record<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
         </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">Delete</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
         </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
     <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
]

const data: DataType[] = [
    </span><span class="token punctuation">{</span>
     <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
     <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John Brown'</span><span class="token punctuation">,</span>
     <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
     <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'New York No. 1 Lake Park'</span><span class="token punctuation">,</span>
     <span class="token literal-property property">tags</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'nice'</span><span class="token punctuation">,</span> <span class="token string">'developer'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token plain-text">,
]
return (
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
         <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
         i18n<span class="token punctuation">.</span><span class="token function">changeLanguage</span><span class="token punctuation">(</span><span class="token string">'zh'</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
     <span class="token punctuation">></span></span><span class="token plain-text">
         中文
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
         <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
         i18n<span class="token punctuation">.</span><span class="token function">changeLanguage</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
     <span class="token punctuation">></span></span><span class="token plain-text">
         english
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'helo'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'sz'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span><span class="token plain-text">
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Table</span></span>
         <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span>
         <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>
         <span class="token attr-name">pagination</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
             <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
             <span class="token literal-property property">showSizeChanger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
         <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
     <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Table</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
 )
}

</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br></div></div></li>
</ol>
<h3 id="处理-antd-中内置的文本" tabindex="-1"><a class="header-anchor" href="#处理-antd-中内置的文本" aria-hidden="true">#</a> 处理 antd 中内置的文本</h3>
<p>上面的例子中,table 中的分页的文本还未实现国际化. antd 中内置文本默认使用 en_US</p>
<ol>
<li>
<p>引入 ConfigProvider 组件</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Space<span class="token punctuation">,</span> Table<span class="token punctuation">,</span> Tag<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>引入 antd 中内置的语言包</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'antd/lib/locale/zh_CN'</span>
<span class="token keyword">import</span> en_US <span class="token keyword">from</span> <span class="token string">'antd/lib/locale/en_US'</span>
<span class="token comment">// 其他语言包可查询antd官网</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>使用 ConfigProvider 包裹 jsx 结构, 一般用来包裹整个应用结构</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 如需切换语言,只需动态修改传入locale属性的语言包即可</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>en_US<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token punctuation">{</span><span class="token comment">/*... 忽略其他*/</span><span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Table</span></span>
    <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span>
    <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span>
    <span class="token attr-name">pagination</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token literal-property property">showSizeChanger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Table</span></span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li>
</ol>
</template>
