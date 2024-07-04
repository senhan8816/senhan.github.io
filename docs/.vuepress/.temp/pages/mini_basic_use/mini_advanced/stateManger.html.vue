<template><h1 id="小程序的状态管理" tabindex="-1"><a class="header-anchor" href="#小程序的状态管理" aria-hidden="true">#</a> 小程序的状态管理</h1>
<blockquote>
<p>把小程序中多个组件或页面用到的共享数据集中管理起来的方案</p>
</blockquote>
<p>小程序中实现状态管理,是利用<code>mobx-miniprogram</code>和<code>mobx-miniprogram-bindings</code>这两个第三方包实现的</p>
<ul>
<li>mobx-miniprogram 用于创建管理共享数据的仓库</li>
<li>mobx-miniprogram-bindings 用于将共享数据仓库和小程序的组件或页面连接起来</li>
</ul>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<h3 id="创建-store-对象" tabindex="-1"><a class="header-anchor" href="#创建-store-对象" aria-hidden="true">#</a> 创建 store 对象</h3>
<ul>
<li>
<p>下包: npm install mobx-miniprogram mobx-miniprogram-bindings. 重新构建 npm</p>
</li>
<li>
<p>创建 store 对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /model/store.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> observable<span class="token punctuation">,</span> action <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mobx-miniprogram'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 数据字段</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token comment">// 计算属性</span>
  <span class="token keyword">get</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">8</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// actions(方法)</span>
  <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li>
</ul>
<p>此时集中管理数据的仓库已经创建完毕,接下来,我们在页面和组件中操作仓库中的数据</p>
<h3 id="在页面中使用" tabindex="-1"><a class="header-anchor" href="#在页面中使用" aria-hidden="true">#</a> 在页面中使用</h3>
<ol>
<li>
<p>创建 behavior</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /model/behavior.js</span>

<span class="token comment">// BehaviorWithStore 用于创建和store绑定的behavior</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BehaviorWithStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mobx-miniprogram-bindings'</span>
<span class="token comment">// 引入store</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./store'</span>
<span class="token comment">// 创建和store绑定好的behavior</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> countBehavior <span class="token operator">=</span> <span class="token function">BehaviorWithStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// behavior和store绑定的配置项</span>
  <span class="token literal-property property">storeBindings</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">store</span><span class="token operator">:</span> store<span class="token punctuation">,</span> <span class="token comment">//绑定的store</span>
      <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'count'</span><span class="token punctuation">,</span> <span class="token string">'sum'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 绑定store中的数据字段,在引入当前behavior的页面中可以直接使用</span>
      <span class="token comment">// 绑定store中的add函数,在引入当前behavior的页面中可以直接使用</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'add'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li>
<li>
<p>在页面中引入使用 countBehavior</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /pages/index/index.js</span>
<span class="token comment">// 引入countBehavior</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> countBehavior <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../model/behavior'</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// 配置countBehavior</span>
<span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>countBehavior<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p>在页面的 wxml 中直接使用数据和方法</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>index页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>count: {{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>sum: {{sum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>效果</p>
<p><img src="/images/sm1.gif" alt="sm"></p>
</li>
</ol>
<h3 id="在组件中使用" tabindex="-1"><a class="header-anchor" href="#在组件中使用" aria-hidden="true">#</a> 在组件中使用</h3>
<ol>
<li>
<p>在组件的 js 文件中配置和 store 绑定的代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /components/my-comp/my-comp.js</span>
<span class="token comment">// 引入一个和store绑定并注册组件的函数</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentWithStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mobx-miniprogram-bindings'</span>
<span class="token comment">// 引入store</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../model/store'</span>
<span class="token comment">// 注册一个和store绑定的组件</span>
<span class="token function">ComponentWithStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// data 组件自己的数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'my-comp自己的数据'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 组件和store进行绑定</span>
  <span class="token literal-property property">storeBindings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">store</span><span class="token operator">:</span> store<span class="token punctuation">,</span>
    <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'count'</span><span class="token punctuation">,</span> <span class="token string">'sum'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// actions: ["sub"] 这样写可以或写成下面的写法</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// subTap表示my-comp中的函数,subTap触发则调用store中的sub函数</span>
      <span class="token literal-property property">subTap</span><span class="token operator">:</span> <span class="token string">'sub'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li>
<li>
<p>在组件结构中使用数据和方法</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- /components/my-comp/my-comp.wxml --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1rpx solid #ccc<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>my-comp组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>msg: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>count: {{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>sum: {{sum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>subTap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>效果</p>
<p><img src="/images/sm2.gif" alt="sm2"></p>
</li>
</ol>
<p><strong>以上是 mobx 和页面以及组件绑定的新语法,旧语法可以参考文档</strong>: <a href="https://www.npmjs.com/package/mobx-miniprogram-bindings" target="_blank" rel="noopener noreferrer">mobx-miniprogram-bindings 旧版语法<ExternalLinkIcon/></a></p>
</template>
