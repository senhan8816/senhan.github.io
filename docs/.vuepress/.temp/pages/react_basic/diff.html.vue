<template><h1 id="虚拟-dom-和-diff-算法" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-和-diff-算法" aria-hidden="true">#</a> 虚拟 DOM 和 diff 算法</h1>
<h2 id="虚拟-dom" tabindex="-1"><a class="header-anchor" href="#虚拟-dom" aria-hidden="true">#</a> 虚拟 dom</h2>
<p>虚拟 dom 就是 react 解析 jsx 之后,在内存中生成的用来描述即将要创建的真实 dom 的普通对象. 虚拟 dom 之间也有层级关系,形成虚拟 dom 树.</p>
<p><img src="/images/vdom.png" alt="虚拟dom"></p>
<h2 id="diff-算法" tabindex="-1"><a class="header-anchor" href="#diff-算法" aria-hidden="true">#</a> diff 算法</h2>
<blockquote>
<p>Diff 算法有一些通用的解决方案，即生成将一棵树转换成另一棵树的最小操作次数。然而，即使使用<a href="http://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf" target="_blank" rel="noopener noreferrer">最优的算法<ExternalLinkIcon/></a>，该算法的复杂程度仍为 O(n 3 )，其中 n 是树中元素的数量。</p>
<p>如果在 React 中使用该算法，那么展示 1000 个元素则需要 10 亿次的比较。这个开销实在是太过高昂。于是 React 在以下两个假设的基础之上提出了一套 O(n) 的启发式算法：</p>
<ol>
<li>两个不同类型的元素会产生出不同的树；</li>
<li>开发者可以通过设置 <code>key</code> 属性，来告知渲染哪些子元素在不同的渲染下可以保存不变；</li>
</ol>
<p>在实践中，我们发现以上假设在几乎所有实用的场景下都成立</p>
</blockquote>
<h3 id="对比不同类型的元素" tabindex="-1"><a class="header-anchor" href="#对比不同类型的元素" aria-hidden="true">#</a> 对比不同类型的元素</h3>
<blockquote>
<p>React 组件也被视为 React 元素. 所以对比不同类型的元素,不仅局限于<code>&lt;div&gt;&lt;/div&gt;</code>这类元素,也包含组件元素</p>
</blockquote>
<p>当根节点为不同类型的元素时，React 会拆卸原有的树并且创建新的树。比如，当一个元素从 <code>&lt;a&gt;</code> 变成 <code>&lt;img/&gt;</code>，从 <code>&lt;Article&gt;</code> 变成 <code>&lt;Comment&gt;</code>，或从 <code>&lt;Button&gt;</code> 变成 <code>&lt;div&gt;</code> 都会触发一个完整的重建流程。</p>
<p>当卸载一棵树时，对应的 DOM 节点也会被销毁。组件实例将执行 <code>componentWillUnmount()</code> 方法。当建立一棵新的树时，对应的 DOM 节点会被创建以及插入到 DOM 中。组件实例将执行 <code>componentDidMount()</code> 方法。所有与之前的树相关联的 state 也会被销毁。</p>
<p>在根节点以下的组件也会被卸载，它们的状态会被销毁。比如</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 旧树</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">// 新树</span>
<span class="token comment">// React 会销毁Counter组件并且重新实例化一个新的Counter。</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="对比同一类型的元素" tabindex="-1"><a class="header-anchor" href="#对比同一类型的元素" aria-hidden="true">#</a> 对比同一类型的元素</h3>
<p>当对比两个相同类型的 React 元素时，React 会保留 DOM 节点，仅比对及更新有改变的属性。比如：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stuff<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>after<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stuff<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>通过对比这两个元素，React 知道只需要修改 DOM 元素上的 <code>className</code> 属性。</p>
<p>当更新 <code>style</code> 属性时，React 仅更新有所更变的属性。比如：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">'bold'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'green'</span><span class="token punctuation">,</span> <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">'bold'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>通过对比这两个元素，React 知道只需要修改 DOM 元素上的 <code>color</code> 样式，无需修改 <code>fontWeight</code>。</p>
<p>在处理完当前节点之后，React 继续对子节点进行递归</p>
<h3 id="对比同类型的组件元素" tabindex="-1"><a class="header-anchor" href="#对比同类型的组件元素" aria-hidden="true">#</a> 对比同类型的组件元素</h3>
<p>当一个组件更新时，组件实例会保持不变，因此可以在不同的渲染时保持 state 一致。React 将更新该组件实例的 props 以保证与最新的元素保持一致，并调用 <code>componentDidUpdate()</code> 方法。</p>
<p>下一步，调用 <code>render()</code> 方法，diff 算法将在之前的结果以及新的结果中进行递归。</p>
<h3 id="对子节点进行递归" tabindex="-1"><a class="header-anchor" href="#对子节点进行递归" aria-hidden="true">#</a> 对子节点进行递归</h3>
<p>默认情况下，当递归 DOM 节点的子元素时，React 会同时遍历两个子元素的列表；当产生差异时，根据差异修改真实 DOM 树</p>
<p>在子元素列表末尾新增元素时，更新开销比较小。比如：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">first</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">second</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">first</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">second</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">third</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>React 会先匹配两个 <code>&lt;li&gt;first&lt;/li&gt;</code> 对应的树，然后匹配第二个元素 <code>&lt;li&gt;second&lt;/li&gt;</code> 对应的树，最后插入第三个元素的 <code>&lt;li&gt;third&lt;/li&gt;</code> 树。</p>
<p>如果只是简单的将新增元素插入到表头，那么更新开销会比较大。比如：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Duke</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Villanova</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Connecticut</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Duke</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">Villanova</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>React 并不会意识到应该保留 <code>&lt;li&gt;Duke&lt;/li&gt;</code> 和 <code>&lt;li&gt;Villanova&lt;/li&gt;</code>，而是会重建每一个子元素。这种情况会带来性能问题。</p>
<h3 id="keys" tabindex="-1"><a class="header-anchor" href="#keys" aria-hidden="true">#</a> Keys</h3>
<p>为了解决上述问题，React 引入了 <code>key</code> 属性。当子元素拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素。以下示例在新增 <code>key</code> 之后，使得树的转换效率得以提高：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Duke</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Villanova</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Connecticut</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Duke</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Villanova</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>现在 React 知道只有 key 为 <code>3</code> 的元素是新元素，key 为<code>1</code>,<code>2</code>的元素仅仅移动了。</p>
<p>实际开发中，key 的值只要在当前父元素的范围内 key 值不重复即可. 一般会使用数据中的 id.</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="/images/on.png" alt=""></p>
<p><strong>注意: 你也可以使用元素在数组中的下标作为 key.这种方式适合于在元素不再进行重新排序的情况下使用. 如果元素顺序发生变化,则会导致渲染错误</strong>。</p>
<p>例如:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'html'</span><span class="token punctuation">,</span> <span class="token string">'css'</span><span class="token punctuation">,</span> <span class="token string">'js'</span><span class="token punctuation">,</span> <span class="token string">'react'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 点击按钮之后,将新数据添加到数组的开头,会导致重新渲染之后,元素顺序发生变化</span>
            <span class="token keyword">const</span> newList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span>
            newList<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">'jsx'</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">list</span><span class="token operator">:</span> newList<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          按钮
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
          <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token comment">// 使用index下标作为key的值</span>
              <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>第一次渲染之后,在每一条数据的 input 里面填入对应的下标. 比如 html--&gt;0, css--&gt;1 等</p>
<p><img src="/images/d_k1.png" alt=""></p>
<p>点击按钮之后,新增的元素添加到了开头的位置. react 发现两棵树中存在相同的 key 值. 对相同 key 值的<code>li</code>标签进行复用. 但是原本<code>&lt;li key={0}&gt;&lt;span&gt;html&lt;/span&gt; &lt;input type=&quot;text&quot;/&gt;&lt;li&gt;</code>元素的 key, 变成了<code>&lt;li key={1}&gt;&lt;span&gt;html&lt;/span&gt; &lt;input type=&quot;text&quot;/&gt;&lt;li&gt;</code>所以.复用 input 发生了错误.<code>span</code>的值是根据最新的 state 渲染的,所以渲染没有问题</p>
<p><img src="/images/d_k2.png" alt=""></p>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<ol>
<li>
<p>React 会定期优化算法，让常见用例更高效地执行。在当前的实现中，一棵子树能在其兄弟之间移动，但不能移动到其他位置。例如,下面的这种情况. React 并不会改变 A 树的位置,而是拆除 A 树,在 D 节点下重新创建 A 树.实际开发中应避免这样的操作,不过目前的开发中基本没有这种情况</p>
<p><img src="/images/on1.png" alt=""></p>
</li>
<li>
<p>该算法不会尝试匹配不同组件类型的子树。如果你发现你在两种不同类型的组件中切换，但输出非常相似的内容，建议把它们改成同一类型。</p>
</li>
<li>
<p>Key 应该具有稳定，可预测，以及列表内唯一的特质。不稳定的 key 会导致许多组件实例和 DOM 节点被不必要地重新创建或渲染错误，这反而导航了性能下降</p>
</li>
</ol>
</template>
