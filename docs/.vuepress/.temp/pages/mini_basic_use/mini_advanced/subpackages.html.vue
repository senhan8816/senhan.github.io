<template><h1 id="分包" tabindex="-1"><a class="header-anchor" href="#分包" aria-hidden="true">#</a> 分包</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<blockquote>
<p>微信客户端 6.6.0，基础库 1.7.3 及以上版本开始支持。</p>
<p>开发者将一个小程序项目划分成不同的子包，最终在构建时打包成不同的分包</p>
</blockquote>
<h3 id="分包的作用" tabindex="-1"><a class="header-anchor" href="#分包的作用" aria-hidden="true">#</a> 分包的作用</h3>
<ul>
<li>
<p>增加整体项目的体积. 没有分包的情况下项目压缩之后的整体大小不能超过 2M. 使用分包技术,项目压缩之后整体大小不能超过 20M(如果超过限制,则无法发布小程序)</p>
</li>
<li>
<p>利用分包技术可以实现按需加载</p>
</li>
<li>
<p>团队共同开发时可以更好的解耦协作</p>
</li>
</ul>
<h3 id="分包前后对比" tabindex="-1"><a class="header-anchor" href="#分包前后对比" aria-hidden="true">#</a> 分包前后对比</h3>
<ul>
<li>分包之前, 项目中所有的资源都打包成一个包</li>
<li>分包之后,项目的启动页面和 tabbar 页面以及项目公共资源打包成一个主包, 分包页面和分包的私有资源打包成多个分包</li>
</ul>
<p><img src="/images/分包.png" alt="分包前后对比"></p>
<h3 id="分包前后的加载方式对比" tabindex="-1"><a class="header-anchor" href="#分包前后的加载方式对比" aria-hidden="true">#</a> 分包前后的加载方式对比</h3>
<ul>
<li>
<p>分包前: 在小程序启动时,由于只有一个包,所以会一次性加载这个包中所有资源</p>
</li>
<li>
<p>分包后: 在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示。</p>
</li>
</ul>
<h2 id="使用分包" tabindex="-1"><a class="header-anchor" href="#使用分包" aria-hidden="true">#</a> 使用分包</h2>
<h3 id="_1-在app-json中新增subpackages字段配置分包" tabindex="-1"><a class="header-anchor" href="#_1-在app-json中新增subpackages字段配置分包" aria-hidden="true">#</a> 1.在<code>app.json</code>中新增<code>subpackages</code>字段配置分包</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages/index/index"</span><span class="token punctuation">,</span> <span class="token string">"pages/logs/logs"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token comment">// 配置分包</span>
<span class="token property">"subpackages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 数组中有两个对象,表示配置了两个分包</span>
    <span class="token punctuation">{</span>
    <span class="token property">"root"</span><span class="token operator">:</span> <span class="token string">"packageA"</span><span class="token punctuation">,</span> <span class="token comment">// 分包的根目录</span>
    <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages/cat/cat"</span><span class="token punctuation">,</span> <span class="token string">"pages/dog/dog"</span><span class="token punctuation">]</span> <span class="token comment">// 分包中页面路径,基于分包根目录</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
    <span class="token property">"root"</span><span class="token operator">:</span> <span class="token string">"packageB"</span><span class="token punctuation">,</span>
    <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages/apple/apple"</span><span class="token punctuation">,</span> <span class="token string">"pages/banana/banana"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"v2"</span><span class="token punctuation">,</span>
<span class="token property">"sitemapLocation"</span><span class="token operator">:</span> <span class="token string">"sitemap.json"</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_2-分包配置完毕之后-微信小程序开发工具会自动帮我们创建分包的目录" tabindex="-1"><a class="header-anchor" href="#_2-分包配置完毕之后-微信小程序开发工具会自动帮我们创建分包的目录" aria-hidden="true">#</a> 2.分包配置完毕之后,微信小程序开发工具会自动帮我们创建分包的目录</h3>
<p><img src="/images/subp1.png" alt="配置分包创建的目录"></p>
<h3 id="_3-进入分包页面示例代码" tabindex="-1"><a class="header-anchor" href="#_3-进入分包页面示例代码" aria-hidden="true">#</a> 3.进入分包页面示例代码</h3>
<p>3.1 在启动页面<code>index.wxml</code>中定义按钮组件并绑定点击事件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goToSubPackageACat<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转到分包A的Cat页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.2 在<code>index.js</code>中定义事件处理函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">goToSubPackageACat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token comment">// 利用编程式导航切换页面</span>
 wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/packageA/pages/cat/cat'</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="独立分包" tabindex="-1"><a class="header-anchor" href="#独立分包" aria-hidden="true">#</a> 独立分包</h2>
<p>独立分包是小程序中一种特殊类型的分包，可以独立于主包和其他分包运行。从独立分包中的页面进入小程序时，不需要下载主包。当用户进入普通分包或主包内页面时，主包才会被下载。</p>
<p>一个小程序中可以有多个独立分包。</p>
<h3 id="配置独立分包" tabindex="-1"><a class="header-anchor" href="#配置独立分包" aria-hidden="true">#</a> 配置独立分包</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages/index/index"</span><span class="token punctuation">,</span> <span class="token string">"pages/logs/logs"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 配置分包</span>
   <span class="token property">"subpackages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token comment">// 数组中有两个对象,表示配置了两个分包</span>
       <span class="token punctuation">{</span>
       <span class="token property">"root"</span><span class="token operator">:</span> <span class="token string">"packageA"</span><span class="token punctuation">,</span> <span class="token comment">// 分包的根目录</span>
       <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages/cat/cat"</span><span class="token punctuation">,</span> <span class="token string">"pages/dog/dog"</span><span class="token punctuation">]</span> <span class="token comment">// 分包中页面路径,基于分包根目录</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span>
       <span class="token property">"root"</span><span class="token operator">:</span> <span class="token string">"packageB"</span><span class="token punctuation">,</span>
       <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages/apple/apple"</span><span class="token punctuation">,</span> <span class="token string">"pages/banana/banana"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token comment">// 此时packageB为独立分包</span>
       <span class="token property">"independent"</span><span class="token operator">:</span><span class="token boolean">true</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"v2"</span><span class="token punctuation">,</span>
   <span class="token property">"sitemapLocation"</span><span class="token operator">:</span> <span class="token string">"sitemap.json"</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>进入独立分包页面的方式和其他普通分包的方式一致</p>
<p>使用场景: 比如一个电商网站需要临时增加一个双 11 的页面,则可以使用独立分包.在不影响项目其他包的情况下快速添加,使用完毕之后快速剥离</p>
<h2 id="分包预下载" tabindex="-1"><a class="header-anchor" href="#分包预下载" aria-hidden="true">#</a> 分包预下载</h2>
<p>开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。</p>
<h3 id="配置分包预下载" tabindex="-1"><a class="header-anchor" href="#配置分包预下载" aria-hidden="true">#</a> 配置分包预下载</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages/index/index"</span><span class="token punctuation">,</span> <span class="token string">"pages/logs/logs"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 配置分包</span>
   <span class="token property">"subpackages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token comment">// 数组中有两个对象,表示配置了两个分包</span>
       <span class="token punctuation">{</span>
       <span class="token property">"root"</span><span class="token operator">:</span> <span class="token string">"packageA"</span><span class="token punctuation">,</span> <span class="token comment">// 分包的根目录</span>
       <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"pA"</span><span class="token punctuation">,</span> <span class="token comment">// 分包别名</span>
       <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages/cat/cat"</span><span class="token punctuation">,</span> <span class="token string">"pages/dog/dog"</span><span class="token punctuation">]</span> <span class="token comment">// 分包中页面路径,基于分包根目录</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span>
       <span class="token property">"root"</span><span class="token operator">:</span> <span class="token string">"packageB"</span><span class="token punctuation">,</span>
       <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"pB"</span><span class="token punctuation">,</span> <span class="token comment">// 分包别名</span>
       <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages/apple/apple"</span><span class="token punctuation">,</span> <span class="token string">"pages/banana/banana"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token comment">// 此时packageB为独立分包</span>
       <span class="token property">"independent"</span><span class="token operator">:</span><span class="token boolean">true</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token comment">// 配置分包预下载</span>
   <span class="token property">"preloadRule"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// "pages/index/index" 是页面路径,当进入这个页面的时候,预下载指定的包</span>
    <span class="token property">"pages/index/index"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// network是网络环境 值为all(不限网络)或wifi(只在连接wifi时下载)</span>
      <span class="token property">"network"</span><span class="token operator">:</span> <span class="token string">"all"</span><span class="token punctuation">,</span>
      <span class="token comment">// packages是进入页面后预下载分包的 root 或 name。__APP__ 表示主包。</span>
      <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"packageA"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"pages/logs/logs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"network"</span><span class="token operator">:</span> <span class="token string">"wifi"</span><span class="token punctuation">,</span>
      <span class="token comment">// 这里使用分包的别名(name)</span>
      <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pA"</span><span class="token punctuation">,</span> <span class="token string">"pB"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"v2"</span><span class="token punctuation">,</span>
   <span class="token property">"sitemapLocation"</span><span class="token operator">:</span> <span class="token string">"sitemap.json"</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="查看预下载包是否成功" tabindex="-1"><a class="header-anchor" href="#查看预下载包是否成功" aria-hidden="true">#</a> 查看预下载包是否成功</h3>
<p><img src="/images/sub9.png" alt="切换网络"></p>
<p><strong>当网络状态为 4g 时:</strong></p>
<p>进入 logs 页面,分包预加载失败,因为预加载配置为 wifi
<img src="/images/sub8.png" alt="失败"></p>
<p>进入 index 页面,分包预加载成功,因为预加载配置为 all
<img src="/images/sub7.png" alt="成功"></p>
<h3 id="分包预下载的限制" tabindex="-1"><a class="header-anchor" href="#分包预下载的限制" aria-hidden="true">#</a> 分包预下载的限制</h3>
<p>同一个分包中的页面享有共同的预下载大小限额 2M，限额会在工具中打包时校验。</p>
<p>如，页面 A 和 B 都在同一个分包中，A 中预下载总大小 0.5M 的分包，B 中最多只能预下载总大小 1.5M 的分包。</p>
<h2 id="关于分包的其他注意问题" tabindex="-1"><a class="header-anchor" href="#关于分包的其他注意问题" aria-hidden="true">#</a> 关于分包的其他注意问题</h2>
<ul>
<li>
<p>声明 subpackages 后，将按 subpackages 配置路径进行打包，subpackages 配置路径外的目录将被打包到主包中</p>
</li>
<li>
<p>整个小程序所有分包大小不超过 20M,单个分包/主包大小不能超过 2M</p>
</li>
<li>
<p>分包中不能嵌套分包</p>
</li>
<li>
<p>分包之间是独立的,不能互相引用资源.但是普通分包可以引入主包的资源</p>
</li>
<li>
<p>特别注意: 独立分包不能引入主包的资源,甚至连 app.wxss 都无法使用. 独立分包也无法使用插件</p>
</li>
</ul>
<h2 id="分包异步化" tabindex="-1"><a class="header-anchor" href="#分包异步化" aria-hidden="true">#</a> 分包异步化</h2>
<blockquote>
<p>该特性需要基础库版本 2.11.2 或以上</p>
</blockquote>
<p>在小程序中，不同的分包对应不同的下载单元；因此，除了非独立分包可以依赖主包外，分包之间不能互相使用自定义组件或进行 require。「分包异步化」特性将允许通过一些配置和新的接口，使部分跨分包的内容可以等待下载后异步使用，从而一定程度上解决这个限制。</p>
<h3 id="跨分包自定义组件引用" tabindex="-1"><a class="header-anchor" href="#跨分包自定义组件引用" aria-hidden="true">#</a> 跨分包自定义组件引用</h3>
<ul>
<li>
<p>处理前</p>
<ol>
<li>
<p>在分包 packageA 中定义组件<code>simple-list</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- packageA/components/simple-list/simple-list.wxml, 忽略其他文件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{[<span class="token punctuation">'</span>a<span class="token punctuation">'</span>,<span class="token punctuation">'</span>b<span class="token punctuation">'</span>,<span class="token punctuation">'</span>c<span class="token punctuation">'</span>]}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{ item }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p>在分包 packageB 中配置,希望使用 packageA 中的组件</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// /packageB/pages/apple/apple.json 忽略其他文件</span>
<span class="token punctuation">{</span>
  <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"sl"</span><span class="token operator">:</span> <span class="token string">"/packageA/components/simple-list/simple-list"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>当进入/packageB/pages/apple/apple 页面时,控制台提示找不到组件
<img src="/images/sub6.png" alt=""></p>
</li>
</ol>
</li>
<li>
<p>处理后</p>
<p>一个分包使用其他分包的自定义组件时，由于其他分包还未下载或注入，其他分包的组件处于不可用的状态。通过为其他分包的自定义组件设置<code>占位组件</code>，我们可以先渲染占位组件作为替代，在分包下载完成后再进行替换</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"sl"</span><span class="token operator">:</span> <span class="token string">"/packageA/components/simple-list/simple-list"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置 componentPlaceholder.</span>
  <span class="token property">"componentPlaceholder"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 利用内置组件view,为simple-list组件占位</span>
    <span class="token property">"sl"</span><span class="token operator">:</span> <span class="token string">"view"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
</ul>
<h3 id="跨分包-js-代码引用" tabindex="-1"><a class="header-anchor" href="#跨分包-js-代码引用" aria-hidden="true">#</a> 跨分包 JS 代码引用</h3>
<ul>
<li>在 packageA/pages/cat/cat.js 中希望使用 packageB 中的 utils.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//packageA/pages/cat/cat.js</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../../../packageB/utils.js'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">utils</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>utils<span class="token punctuation">)</span> <span class="token comment">// {msg, getRandomIntInclusive}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mod<span class="token punctuation">,</span> errMsg <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">path: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mod<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>errMsg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packageB/utils.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'getRandomIntInclusive函数返回min~max之间的随机整数,包含min和max'</span><span class="token punctuation">,</span>
  <span class="token function">getRandomIntInclusive</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span>
    max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> min <span class="token comment">//含最大值，含最小值</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
