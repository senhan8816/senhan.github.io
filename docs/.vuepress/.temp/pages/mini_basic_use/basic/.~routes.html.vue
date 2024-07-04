<template><h1 id="小程序路由跳转" tabindex="-1"><a class="header-anchor" href="#小程序路由跳转" aria-hidden="true">#</a> 小程序路由跳转</h1>
<blockquote>
<p>小程序中实现了页面路由,在小程序中所有页面的路由全部由框架进行管理</p>
</blockquote>
<h2 id="声明式导航" tabindex="-1"><a class="header-anchor" href="#声明式导航" aria-hidden="true">#</a> 声明式导航</h2>
<p>navigator 组件会在页面上渲染一段导航文本, 点击导航文本即可跳转</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--

    url： 跳转的目标页面
    open-type： 跳转方式 
        navigate	对应 wx.navigateTo （默认）
        redirect	对应 wx.redirectTo 的功能	
        switchTab	对应 wx.switchTab 的功能	
        reLaunch	对应 wx.reLaunch 的功能	
        navigateBack	对应 wx.navigateBack 的功能
        
--></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/pages/logs/logs<span class="token punctuation">"</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航" aria-hidden="true">#</a> 编程式导航</h2>
<h3 id="wx-navigateto" tabindex="-1"><a class="header-anchor" href="#wx-navigateto" aria-hidden="true">#</a> wx.navigateTo</h3>
<p>保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。小程序中页面栈最多十层.如果超过,则 navigateTo 失效</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// url描述目标页面的路径</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/logs/logs'</span><span class="token punctuation">,</span>
      <span class="token comment">// 页面切换成功的回调函数</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index'</span><span class="token punctuation">,</span> <span class="token string">'切换成功'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="wx-navigateback" tabindex="-1"><a class="header-anchor" href="#wx-navigateback" aria-hidden="true">#</a> wx.navigateBack</h3>
<p>关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 不写delta 默认值为 1, 则返回1层. delta: 2 则返回2层</span>
wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="wx-redirectto" tabindex="-1"><a class="header-anchor" href="#wx-redirectto" aria-hidden="true">#</a> wx.redirectTo</h3>
<p>关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/logs/logs'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="wx-switchtab" tabindex="-1"><a class="header-anchor" href="#wx-switchtab" aria-hidden="true">#</a> wx.switchTab</h3>
<p>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/index/index'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="wx-relaunch" tabindex="-1"><a class="header-anchor" href="#wx-relaunch" aria-hidden="true">#</a> wx.reLaunch</h3>
<p>关闭所有页面，打开到应用内的某个页面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">reLaunch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/index/index'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
