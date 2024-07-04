<template><h1 id="使用-ui-组件库-vant-webapp" tabindex="-1"><a class="header-anchor" href="#使用-ui-组件库-vant-webapp" aria-hidden="true">#</a> 使用 UI 组件库(Vant Webapp)</h1>
<p>UI 组件库,是指封装了许多小程序常用结构样式组件的库.开发者可以直接引入并使用.这么做的好处是方便开发者,快速搭建小程序项目.</p>
<p>我要使用的 UI 组件库叫做<code>Vant Webapp</code>. 是由有赞前端团队开源的小程序 UI 组件库.</p>
<p>那么一般使用 UI 组件库,都要使用<code>npm</code>进行下载,所以首先要学习的是如何在小程序中使用 npm 下载的包</p>
<h3 id="小程序中使用-npm-包" tabindex="-1"><a class="header-anchor" href="#小程序中使用-npm-包" aria-hidden="true">#</a> 小程序中使用 npm 包</h3>
<blockquote>
<p>从小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始，小程序支持使用 npm 安装第三方包。</p>
</blockquote>
<ul>
<li>
<p>小程序使用 npm 包的三个限制</p>
<ul>
<li>依赖 node.js 的包不能在小程序中使用</li>
<li>依赖浏览器内置对象的包不能在小程序中使用</li>
<li>依赖 C++插件的包不能再小程序中使用</li>
</ul>
</li>
<li>
<p>使用 npm 包的三个步骤</p>
<ul>
<li>使用 npm 下载包</li>
<li>构建 npm 包</li>
<li>构建完成后,即可使用</li>
</ul>
</li>
</ul>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html" target="_blank" rel="noopener noreferrer">小程序中使用 npm 包步骤<ExternalLinkIcon/></a></p>
<h3 id="利用-npm-安装-vant-webapp-的步骤" tabindex="-1"><a class="header-anchor" href="#利用-npm-安装-vant-webapp-的步骤" aria-hidden="true">#</a> 利用 npm 安装 Vant Webapp 的步骤</h3>
<ol>
<li>
<p>在项目根目录通过 npm 安装 Vant Webapp</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i @vant<span class="token operator">/</span>weapp <span class="token operator">-</span><span class="token constant">S</span> <span class="token operator">--</span>production
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>将 app.json 中的 &quot;style&quot;: &quot;v2&quot; 去除
小程序的新版基础组件强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。</p>
</li>
<li>
<p>修改 project.config.json
开发者工具创建的项目，miniprogramRoot 默认为 miniprogram，package.json 在其外部，npm 构建无法正常工作。</p>
<p>需要手动在 project.config.json 内修改<code>packNpmManually</code>和<code>packNpmRelationList</code>,如下配置，使开发者工具可以正确索引到 npm 依赖的位置。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"项目配置文件，详见文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html"</span><span class="token punctuation">,</span>
  <span class="token property">"packOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ignore"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"setting"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"bundle"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"userConfirmedBundleSwitch"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"urlCheck"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"scopeDataCheck"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"coverView"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"es6"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"postcss"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"compileHotReLoad"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"lazyloadPlaceholderEnable"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"preloadBackgroundData"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"minified"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"autoAudits"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"newFeature"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"uglifyFileName"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"uploadWithSourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"useIsolateContext"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"nodeModules"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"enhance"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"useMultiFrameRuntime"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"useApiHook"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"useApiHostProcess"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"showShadowRootInWxmlPanel"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"packNpmManually"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"enableEngineNative"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"packNpmRelationList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"packageJsonPath"</span><span class="token operator">:</span> <span class="token string">"./package.json"</span><span class="token punctuation">,</span>
        <span class="token property">"miniprogramNpmDistDir"</span><span class="token operator">:</span> <span class="token string">"./"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"minifyWXSS"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"showES6CompileOption"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"minifyWXML"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"useStaticServer"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"checkInvalidKey"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"babelSetting"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"ignore"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"disablePlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"outputPath"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"disableUseStrict"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"useCompilerPlugins"</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"compileType"</span><span class="token operator">:</span> <span class="token string">"miniprogram"</span><span class="token punctuation">,</span>
  <span class="token property">"libVersion"</span><span class="token operator">:</span> <span class="token string">"2.19.4"</span><span class="token punctuation">,</span>
  <span class="token property">"appid"</span><span class="token operator">:</span> <span class="token string">"wx1a1229a503f7e641"</span><span class="token punctuation">,</span>
  <span class="token property">"projectname"</span><span class="token operator">:</span> <span class="token string">"miniprogram-92"</span><span class="token punctuation">,</span>
  <span class="token property">"condition"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"editorSetting"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"tabIndent"</span><span class="token operator">:</span> <span class="token string">"insertSpaces"</span><span class="token punctuation">,</span>
    <span class="token property">"tabSize"</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div></li>
<li>
<p>构建 npm</p>
<p>打开微信开发者工具，点击 工具 -&gt; 构建 npm -&gt;在项目根目录会看到多了<code>miniprogram_npm</code>文件夹,表示构建成功 即可引入组件。</p>
<p><strong>注意: 最新版本的微信开发者工具,<code>本地设置</code>中没有<code>使用 npm 模块</code>,所以也不需要勾选了</strong></p>
<p><img src="/images/vant1.png" alt="vant"></p>
<p><strong>注意: 如果后续还要下载其他的 npm 包,则每次下载完之后,都要重新点击<code>构建 npm</code>. 如果构建失败,则删除已有的<code>miniprogram_npm</code>文件夹,然后再次点击<code>构建 npm</code></strong></p>
</li>
</ol>
<h3 id="使用-vant-webapp" tabindex="-1"><a class="header-anchor" href="#使用-vant-webapp" aria-hidden="true">#</a> 使用 Vant Webapp</h3>
<p>以 Icon 图标为例</p>
<ol>
<li>
<p>在 app.json 或 index.json 中引入组件</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// app.json</span>
<span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token property">"van-icon"</span><span class="token operator">:</span> <span class="token string">"@vant/weapp/icon/index"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p>在 index.wxml 中使用</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- index.wxml --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>效果:</p>
<p><img src="/images/vant2.png" alt="icon"></p>
</li>
<li>
<p>如需选择其他图标或进行其他配置,请查看 Vant Webapp 官方文档</p>
</li>
</ol>
<h3 id="定制主题颜色" tabindex="-1"><a class="header-anchor" href="#定制主题颜色" aria-hidden="true">#</a> 定制主题颜色</h3>
<blockquote>
<p>Vant Webapp 中可以利用<code>css变量</code>来进行主题颜色的定制</p>
</blockquote>
<p>以<code>button</code>组件为例, button 组件的主题背景颜色是绿色,如图:</p>
<p><img src="/images/vant3.png" alt="vannt"></p>
<p>假设我们的项目当前主体背景颜色是<code>粉色</code>,则按照下面的步骤进行配置</p>
<ol>
<li>
<p>在 Vant Webapp 文档中找到定制主题-&gt;样式变量-&gt;点击配置文件
<img src="/images/vant4.png" alt="vannt"></p>
</li>
<li>
<p>在配置文件中找到 button 对应的 less 变量名并复制(Vant Webapp 内部使用 less 定义变量)
<img src="/images/vant5.png" alt="vannt"></p>
</li>
<li>
<p>在 app.wxss 中，粘贴 less 变量并改写成 CSS 变量，即可对全局生效</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/**app.wxss**/</span>
<span class="token selector">page</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 按钮的字体颜色 */</span>
  <span class="token property">--button-primary-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token comment">/* 按钮的背景颜色 */</span>
  <span class="token property">--button-primary-background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token comment">/* 按钮的边框颜色 */</span>
  <span class="token property">--button-primary-border-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
<li>
<p>在任何一个页面中使用<code>&lt;van-button type=&quot;primary&quot;&gt;主要按钮&lt;/van-button&gt;</code>,按钮的背景主题颜色都变成了粉色</p>
<p><img src="/images/vant6.png" alt="vannt"></p>
</li>
</ol>
</template>
