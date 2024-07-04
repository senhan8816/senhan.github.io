<template><h1 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> redux</h1>
<blockquote>
<p>Redux 是 JavaScript 应用的可预测状态容器，用来集中管理状态(数据)。<br>
特点：集中管理、可预测、易于测试、易于调试、强大的中间件机制满足你所有需求。
注意：redux 是一个独立于 react 的库，可以配合任何 UI 库/框架来使用。</p>
<p>2015 年由 facebook 推出</p>
</blockquote>
<p><img src="/images/redux-1.png" alt="redux logo"></p>
<h2 id="为什么要做状态管理" tabindex="-1"><a class="header-anchor" href="#为什么要做状态管理" aria-hidden="true">#</a> 为什么要做状态管理</h2>
<p>因为项目中有很多组件要用到同一份数据,组件虽然可以通讯,但是传递过程很繁琐. 状态管理可以帮我们将公共数据集中管理起来.逻辑上更加简单</p>
<p><img src="/images/reduxdiff.png" alt="状态管理"></p>
<h2 id="redux-三个核心概念" tabindex="-1"><a class="header-anchor" href="#redux-三个核心概念" aria-hidden="true">#</a> redux 三个核心概念</h2>
<ul>
<li>Action（产品经理）：描述需求</li>
<li>Reducer（程序员）：具体的执行者</li>
<li>Store（项目经理）：管理数据并且是 Action 和 Reducer 的桥梁，将 Action 传递给 Reducer。</li>
</ul>
<p><img src="/images/reduxflow.png" alt=""></p>
<h3 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> action</h3>
<blockquote>
<p>action 本质是一个 js 对象</p>
<p>作用：描述如何修改数据 =&gt; {type: '描述信息', 其他属性: 属性值}</p>
<p>action 相关的规范: 1. 至少有一个 type 属性,值是字符串 2. type 的字符串应该是大写的英文</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'ADD'</span><span class="token punctuation">,</span> <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="reducer" tabindex="-1"><a class="header-anchor" href="#reducer" aria-hidden="true">#</a> reducer</h3>
<blockquote>
<p>reducer 本质是一个函数。</p>
<p>作用：接收 action 和 state(store 中的数据), 对 state 进行修改，并返回新 state。</p>
</blockquote>
<p><strong>注意: reducer 可以接收到一个 state,但是直接修改这个 state 并不能改变 store 中的数据,store 中的数据是由 reducer 函数的返回值决定的</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reducer</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// state是store传递给reducer的数据</span>
    <span class="token comment">// action是store传递给reducer的需求</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'ADD'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state <span class="token operator">+</span> action<span class="token punctuation">.</span>num
    <span class="token comment">//... 忽略其他</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token comment">// default 必须写,而且是固定代码</span>
      <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> store</h3>
<blockquote>
<p>作用: 存储数据以及调用 reducer 函数。</p>
<p>一个应用程序只需要一个 store</p>
</blockquote>
<h4 id="store-提供的-api" tabindex="-1"><a class="header-anchor" href="#store-提供的-api" aria-hidden="true">#</a> store 提供的 api</h4>
<ol>
<li>提供 dispatch 方法，调用则会导致 reducer 函数执行<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'XXX'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>提供 getState 方法，返回当前 store 中存储的数据<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>提供 subscribe 方法，监听数据变化。<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 当数据发生变化,这个回调被调用</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ol>
</template>
