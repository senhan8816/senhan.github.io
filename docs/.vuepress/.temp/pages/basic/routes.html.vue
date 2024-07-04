<template><h1 id="小程序路由跳转" tabindex="-1"><a class="header-anchor" href="#小程序路由跳转" aria-hidden="true">#</a> 小程序路由跳转</h1>
<blockquote>
<p>小程序中实现了页面路由,在小程序中所有页面的路由全部由框架进行管理</p>
</blockquote>
<h2 id="声明式导航" tabindex="-1"><a class="header-anchor" href="#声明式导航" aria-hidden="true">#</a> 声明式导航</h2>
<p>navigator 组件会在页面上渲染一段导航文本, 点击导航文本</p>
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
      <span class="token comment">// url描述目标页面的路径, 路径后面可以拼接要传递的参数</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/logs/logs?name=zs&amp;age=18'</span><span class="token punctuation">,</span>
      <span class="token comment">// 页面切换成功的回调函数</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index'</span><span class="token punctuation">,</span> <span class="token string">'切换成功'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>页面间通信</p>
<blockquote>
<p>基础库 2.7.3 开始支持。
如果一个页面由另一个页面通过 wx.navigateTo 打开，这两个页面间将建立一条数据通道：被打开的页面可以通过 this.getOpenerEventChannel() 方法来获得一个 EventChannel 对象；
wx.navigateTo 的 success 回调中也包含一个 EventChannel 对象。
这两个 EventChannel 对象间可以使用 emit 和 on 方法相互发送、监听事件。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/logs/logs?name=zs&amp;age=18'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据</span>
        <span class="token function-variable function">acceptDataFromOpenedPage</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">someEvent</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过eventChannel向被打开页面传送数据</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index'</span><span class="token punctuation">,</span> <span class="token string">'切换成功'</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span>eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'acceptDataFromOpenerPage'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'index-test'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// logs.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token comment">//{name: "zs", age: "18"}</span>
    <span class="token keyword">const</span> eventChannel <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 触发index页面中通过eventChannel绑定的两个事件,传递参数</span>
    eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'acceptDataFromOpenedPage'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'logs-test'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'someEvent'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'logs-test'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据</span>
    eventChannel<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'acceptDataFromOpenerPage'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'logs'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>调试器-&gt;控制台输出结果</p>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>index 切换成功
{name: &quot;zs&quot;, age: &quot;18&quot;}
index {data: &quot;logs-test&quot;}
index {data: &quot;logs-test&quot;}
logs {data: &quot;index-test&quot;}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="wx-navigateback" tabindex="-1"><a class="header-anchor" href="#wx-navigateback" aria-hidden="true">#</a> wx.navigateBack</h3>
<p>关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 不写delta 默认值为 1, 则返回1层. delta: 2 则返回2层</span>
wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="wx-redirectto" tabindex="-1"><a class="header-anchor" href="#wx-redirectto" aria-hidden="true">#</a> wx.redirectTo</h3>
<p>关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/logs/logs?id=1'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="wx-switchtab" tabindex="-1"><a class="header-anchor" href="#wx-switchtab" aria-hidden="true">#</a> wx.switchTab</h3>
<p>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/index/index'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="wx-relaunch" tabindex="-1"><a class="header-anchor" href="#wx-relaunch" aria-hidden="true">#</a> wx.reLaunch</h3>
<p>关闭所有页面，打开到应用内的某个页面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">reLaunch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/index/index?id=1'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
