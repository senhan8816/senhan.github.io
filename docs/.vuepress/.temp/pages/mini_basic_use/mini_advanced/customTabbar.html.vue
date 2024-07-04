<template><h1 id="自定义-tabbar" tabindex="-1"><a class="header-anchor" href="#自定义-tabbar" aria-hidden="true">#</a> 自定义 tabbar</h1>
<h2 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤:</h2>
<ol>
<li>配置自定义 tabbar</li>
<li>添加自定义 tabbar 代码文件</li>
<li>编写自定义 tabar 代码</li>
</ol>
<h3 id="配置自定义-tabbar" tabindex="-1"><a class="header-anchor" href="#配置自定义-tabbar" aria-hidden="true">#</a> 配置自定义 tabbar</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// app.json</span>

<span class="token punctuation">{</span>
  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"components/test1"</span><span class="token punctuation">,</span> <span class="token comment">// 实际上test1和test2是components中的两个组件(如果是page的话会有bug)</span>
    <span class="token string">"components/test2"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//表示使用自定义tabbar. 当解析到这行后,微信小程序会自动解析custom-tab-bar中的组件作为tabbar渲染</span>
    <span class="token comment">//下面的配置项不能删除(自定义tabbar要渲染的页面结构,也要在这里配置)。</span>
    <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"components/test1"</span><span class="token punctuation">,</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"组件"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"components/test2"</span><span class="token punctuation">,</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"接口"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="添加自定义-tabbar-代码文件" tabindex="-1"><a class="header-anchor" href="#添加自定义-tabbar-代码文件" aria-hidden="true">#</a> 添加自定义 tabbar 代码文件</h3>
<p>在项目根目录中创建文件夹<code>custom-tab-bar</code>,在里面新建组件</p>
<p><strong>注意: 必须在项目根目录创建,必须叫 custom-tab-bar,组件名必须叫 index</strong></p>
<p>例如:</p>
<p><img src="/images/ctb1.png" alt="tb"></p>
<h3 id="编写自定义-tabbar-代码" tabindex="-1"><a class="header-anchor" href="#编写自定义-tabbar-代码" aria-hidden="true">#</a> 编写自定义 tabbar 代码</h3>
<p>custom-tab-bar 中的 index.wxml 结构会渲染在 tabbar 的位置上.</p>
<p><strong>推荐用 fixed 在底部的 cover-view + cover-image 组件渲染样式，以保证 tabBar 层级相对较高</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- /custom-tab-bar/index.wxml  --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cover-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-bar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cover-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-bar-border<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cover-view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cover-view</span>
    <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{list}}<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-bar-item<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{item.pagePath}}<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{index}}<span class="token punctuation">"</span></span>
    <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>switchTab<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cover-image</span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{selected === index ? item.selectedIconPath : item.iconPath}}<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cover-image</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cover-view</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">color:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>selected === index ? <span class="token property">selectedColor</span> <span class="token punctuation">:</span> color<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">"</span></span></span>
      <span class="token punctuation">></span></span>{{item.text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cover-view</span>
    <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cover-view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cover-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* /custom-tab-bar/index.wxss*/</span>
<span class="token selector">.tab-bar</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab-bar-border</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.33<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab-bar-item</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab-bar-item cover-image</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 27px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 27px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab-bar-item cover-view</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /custom-tab-bar/index.js</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#7A7E83'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">selectedColor</span><span class="token operator">:</span> <span class="token string">'#3cc51f'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">pagePath</span><span class="token operator">:</span> <span class="token string">'/components/test1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">iconPath</span><span class="token operator">:</span> <span class="token string">'/image/icon_component.png'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selectedIconPath</span><span class="token operator">:</span> <span class="token string">'/image/icon_component_HL.png'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'组件'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">pagePath</span><span class="token operator">:</span> <span class="token string">'/components/test2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">iconPath</span><span class="token operator">:</span> <span class="token string">'/image/icon_API.png'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selectedIconPath</span><span class="token operator">:</span> <span class="token string">'/image/icon_API_HL.png'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'接口'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset
      <span class="token keyword">const</span> url <span class="token operator">=</span> data<span class="token punctuation">.</span>path
      wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">selected</span><span class="token operator">:</span> data<span class="token punctuation">.</span>index<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// /custom-tab-bar/index.json</span>
<span class="token punctuation">{</span>
  <span class="token property">"component"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>效果:</p>
<p><img src="/images/ctb2.gif" alt="ctb"></p>
</template>
