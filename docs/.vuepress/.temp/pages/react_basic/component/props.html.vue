<template><h1 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h1>
<blockquote>
<p>作用: 每个组件都是封闭独立的,props 可以让组件接收组件外部的数据</p>
</blockquote>
<p><strong>应用场景:</strong></p>
<p>假设有一个 List 组件,用于渲染无序列表,但是要渲染的数据是无法确定的.只有在使用 List 时才知道要渲染什么数据.这时就可以利用 props 将数据传递给 List,进而渲染出来</p>
<h2 id="props-的基本使用" tabindex="-1"><a class="header-anchor" href="#props-的基本使用" aria-hidden="true">#</a> props 的基本使用</h2>
<blockquote>
<p>props 使用主要是两个步骤: 1. 给组件传递数据 2. 在组件内部接收数据</p>
</blockquote>
<ul>
<li>传数据:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//在App组件的jsx结构中使用List组件</span>
<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 利用props方式给List组件传递数据, 属性名={值}就是传递数据的方法.属性名自定义</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/*第一个List渲染数字*/</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>List arr<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/*第二个List渲染字符*/</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>List arr<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul>
<li>
<p>接收数据</p>
<ul>
<li>
<p>函数组件接收</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如果List组件是函数组件,则通过形参props接收数据.</span>
<span class="token keyword">function</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">//props是对象 {arr: [...]} 对象中的属性,就是传递数据时,组件上的属性</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ul<span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p>类组件接收</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如果List是类组件,则通过this.props接收数据</span>
<span class="token keyword">class</span> <span class="token class-name">List</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token comment">//props是对象 {arr: [...]} 对象中的属性,就是传递数据时,组件上的属性</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ul<span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
</li>
</ul>
<h2 id="props-的注意点" tabindex="-1"><a class="header-anchor" href="#props-的注意点" aria-hidden="true">#</a> props 的注意点:</h2>
<ol>
<li>
<p>props 传递数据是自上而下的(父--&gt;子), 而且必须逐级传递.</p>
<p>如果有三个组件 App --&gt;Far--&gt;Son. 要将 App 的数据,传递给 Son. 只能先将数据从 App 传递给 Far,再从 Far 组件中传递数据给 Son</p>
</li>
<li>
<p>props 可以传递任何类型的数据</p>
<p><strong>除了传递一些普通的数据类型以外, 还可以传递虚拟 dom,组件类型和组件实例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>demo组件<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
<span class="token comment">// node属性传递的是虚拟dom, elementType传递的是Demo组件, element传递的是Demo组件实例</span>
<span class="token punctuation">;</span><span class="token operator">&lt;</span>Test node<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>h1<span class="token operator">></span>虚拟dom<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">}</span> elementType<span class="token operator">=</span><span class="token punctuation">{</span>Demo<span class="token punctuation">}</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Demo <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li>
<li>
<p><strong>props 数据是只读的,不要修改</strong>.并且 react 内部会检查我们是否修改了 props 数据,如果修改数据,会在控制台警告. 但是 react 内部检查是浅层对比.如果 props 中的数据是复杂数据类型,并且修改的是复杂数据类型中的值,则数据会被修改(不建议这样操作).</p>
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
<h2 id="props-校验" tabindex="-1"><a class="header-anchor" href="#props-校验" aria-hidden="true">#</a> props 校验</h2>
<blockquote>
<p>对传入组件的 props 数据进行类型检查</p>
</blockquote>
<p>实现:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在create-react-app创建的项目中,无需额外下载,直接引入就可以</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">'prop-types'</span>

<span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
<span class="token comment">// 组件需要配置props校验,就给组件添加静态属性propTypes</span>
Test<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 校验规则详询React官网</span>
  <span class="token literal-property property">属性</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>数据类型<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><a href="https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html" target="_blank" rel="noopener noreferrer">详细校验规则参考官网<ExternalLinkIcon/></a></p>
<h2 id="props-默认值" tabindex="-1"><a class="header-anchor" href="#props-默认值" aria-hidden="true">#</a> props 默认值</h2>
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
  <span class="token literal-property property">属性</span><span class="token operator">:</span> 默认值<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="props-批量传递数据" tabindex="-1"><a class="header-anchor" href="#props-批量传递数据" aria-hidden="true">#</a> props 批量传递数据</h2>
<blockquote>
<p>如果要将对象中的所有数据,一个一个的传递给某个组件,可以使用 props 批量传递简化代码</p>
</blockquote>
<p>例如:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 假设有一个对象 obj =  {x:1,y:2,z:3}</span>
<span class="token operator">&lt;</span>Test x<span class="token operator">=</span><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>x<span class="token punctuation">}</span> y<span class="token operator">=</span><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>y<span class="token punctuation">}</span> z<span class="token operator">=</span><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>z<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token comment">// 使用批量传递,可以达到和上面代码同样的效果,但是非常简洁</span>
<span class="token operator">&lt;</span>Test <span class="token punctuation">{</span><span class="token operator">...</span>obj<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="props-的-children-属性" tabindex="-1"><a class="header-anchor" href="#props-的-children-属性" aria-hidden="true">#</a> props 的 children 属性</h2>
<p>写在组件子节点的内容,默认为 props 对象中 children 属性的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Test<span class="token operator">></span>测试<span class="token operator">&lt;</span><span class="token operator">/</span>Test<span class="token operator">></span>

<span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 展示`测试`两个字</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
