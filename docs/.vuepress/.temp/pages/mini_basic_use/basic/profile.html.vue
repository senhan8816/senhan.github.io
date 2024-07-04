<template><h1 id="获取用户信息" tabindex="-1"><a class="header-anchor" href="#获取用户信息" aria-hidden="true">#</a> 获取用户信息</h1>
<blockquote>
<p>wx.getUserProfile(Object object)用来获取用户信息. 基础库 2.10.4 开始支持</p>
</blockquote>
<p>注意点:</p>
<ul>
<li>必须定义 desc 描述获取用户信息的目的</li>
<li>必须在用户触发的 tap 事件中调用</li>
<li>每次请求都会弹出授权窗口，用户同意后返回 userInfo</li>
</ul>
<p>示例代码:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">getUserProfile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'获取用户信息'</span><span class="token punctuation">,</span>
      <span class="token comment">// 陈宫的回调</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token comment">// res存储了用户信息</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">userInfo</span><span class="token operator">:</span> res<span class="token punctuation">.</span>userInfo
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 失败的回调</span>
      <span class="token function-variable function">fail</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></template>
