<template><h1 id="wxs" tabindex="-1"><a class="header-anchor" href="#wxs" aria-hidden="true">#</a> WXS</h1>
<blockquote>
<p>WXS（WeiXin Script）是小程序的一套脚本语言.帮助开发者构建页面结构。
WXS 主要使用场景: 在小程序页面对应的.js 文件中定义的函数是无法在.wxml 中使用的. 但是在 WXS 中定义的函数,可以在.wxml 中使用. 主要用于过滤数据.</p>
</blockquote>
<p>WXS 的使用有两种形式: .wxs 文件和 <code>&lt;wxs&gt;</code> 标签</p>
<h2 id="wxs-使用场景示例" tabindex="-1"><a class="header-anchor" href="#wxs-使用场景示例" aria-hidden="true">#</a> wxs 使用场景示例:</h2>
<p>.wxml</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- wxml结构 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{gender}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 假设服务器响应的gender数据为male或female</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'male'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>页面展示:</p>
<p><img src="/images/wxs1.png" alt="wxs1"></p>
<p><strong>如果直接以英文方式展示性别,对于国内的用户来说并不友好,所以我们可以利用 wxs 对数据进行过滤</strong></p>
<h2 id="使用-wxs-方式实现" tabindex="-1"><a class="header-anchor" href="#使用-wxs-方式实现" aria-hidden="true">#</a> 使用<code>&lt;wxs&gt;</code>方式实现</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 此时展示的是中文 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{demo.formatGender(gender)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 注意: 1.wxs中并不支持es6语法 2.module命名规范遵循js中命名规范即可--></span>
  function formatGender(gender){
     return gender === 'male' ? '男' : '女'
  }
  module.exports = {
    formatGender:formatGender
  }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="使用-wxs-方式实现-1" tabindex="-1"><a class="header-anchor" href="#使用-wxs-方式实现-1" aria-hidden="true">#</a> 使用.wxs 方式实现</h2>
<ol>
<li>定义.wxs 文件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//  /pages/com.wxs</span>
<span class="token keyword">function</span> <span class="token function">formatGender</span><span class="token punctuation">(</span><span class="token parameter">gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> gender <span class="token operator">===</span> <span class="token string">'male'</span> <span class="token operator">?</span> <span class="token string">'男'</span> <span class="token operator">:</span> <span class="token string">'女'</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">formatGender</span><span class="token operator">:</span> formatGender<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2">
<li>在 .wxml 文件中利用<code>&lt;wxs&gt;</code>引入</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{demo.formatGender(gender)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../com.wxs<span class="token punctuation">"</span></span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="wxs-中可以利用-require-函数-引入其他-wxs" tabindex="-1"><a class="header-anchor" href="#wxs-中可以利用-require-函数-引入其他-wxs" aria-hidden="true">#</a> .wxs 中可以利用 require 函数,引入其他 .wxs</h2>
<p>示例代码:</p>
<ol>
<li>定义 test.wxs</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /pages/test.wxs</span>

<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">1</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> num<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2">
<li>在我们之前定义的<code>com.wxs</code>中引入</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//  /pages/com.wxs</span>

<span class="token comment">// require 只能用来引入wxs,并且要写相对路径</span>
<span class="token keyword">var</span> aaa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./test.wxs'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aaa<span class="token punctuation">.</span>num<span class="token punctuation">)</span> <span class="token comment">//调试工具控制台可以看到打印的1</span>

<span class="token keyword">function</span> <span class="token function">formatGender</span><span class="token punctuation">(</span><span class="token parameter">gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> gender <span class="token operator">===</span> <span class="token string">'male'</span> <span class="token operator">?</span> <span class="token string">'男'</span> <span class="token operator">:</span> <span class="token string">'女'</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">formatGender</span><span class="token operator">:</span> formatGender<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<ul>
<li>WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。</li>
<li>WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。</li>
<li>WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。</li>
<li>WXS 函数不能作为组件的事件回调。</li>
<li>由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 android 设备上二者运行效率无差异。</li>
</ul>
</template>
