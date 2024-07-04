<template><h1 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h1>
<p>现在我们将 wmp_project 项目中除配置文件以外的其他所有文件全部删除.
<img src="/images/achieve1.png" alt="">
我们会看到调试器中提示缺少 app.json. 说明小程序中必须有 app.json 文件. 接下来我们在项目中添加 app.json.但是依然提示 app.json 中不能为空
<img src="/images/achieve2.png" alt="">
app.json 是全局配置文件, 所以我们可以在小程序开发文档中查找<a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html" target="_blank" rel="noopener noreferrer">全局配置<ExternalLinkIcon/></a>来学习如何全局配置.在官方文档中我们可以看到全局配置有很多配置项，下面我们将介绍小程序中常用的全局配置，部分全局配置会在后面的课程中讲解（比如： subpackages 分包）</p>
<h2 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> pages</h2>
<p>在全局配置文档中,我们可以看到<code>pages</code>是必须设置的配置项</p>
<p>用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的 .json, .js, .wxml, .wxss 四个文件进行处理。</p>
<blockquote>
<p>数组的第一项代表小程序的初始页面（首页）。小程序中新增/减少页面，都需要对 pages 数组进行修改。</p>
</blockquote>
<p>现在我们在<code>app.json</code>中配置 pages. <strong>需要注意,app.json 中遵循严格的 json 格式,不能写注释,要使用双引号</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages/index/index"</span><span class="token punctuation">,</span> <span class="token string">"pages/logs/logs"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当我们配置完毕 pages 并保存代码之后,开发工具会自动帮我们在项目中创建 pages 目录,并创建 index 和 logs 两个页面。 并且默认展示 index 页面。调试器也不再提示错误
<img src="/images/g1.png" alt="g1"></p>
<h2 id="entrypagepath" tabindex="-1"><a class="header-anchor" href="#entrypagepath" aria-hidden="true">#</a> entryPagePath</h2>
<p>指定小程序的默认启动路径。如果不填，将默认为 pages 列表的第一项。不支持带页面路径参数。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"entryPagePath"</span><span class="token operator">:</span> <span class="token string">"pages/logs/logs"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="/images/g2.png" alt=""></p>
<h2 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h2>
<p>用于设置小程序的状态栏、导航条、标题、窗口背景色。
小程序窗口由三个部分组成，如下图所示：
<img src="/images/window1.jpg" alt=""></p>
<p>配置代码：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"window"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#1890ff"</span><span class="token punctuation">,</span>
    <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span> 
    <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"尚硅谷"</span><span class="token punctuation">,</span>
    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#ff0"</span><span class="token punctuation">,</span>
    <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"navigationStyle"</span><span class="token operator">:</span> <span class="token string">"default"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>配置效果：</p>
<p><img src="/images/window2.png" alt=""></p>
<ul>
<li>navigationBarBackgroundColor 设置导航栏背景颜色,仅支持 16 进制的值</li>
<li>navigationBarTextStyle 设置导航栏字体颜色,仅支持 black / white</li>
<li>navigationBarTitleText 设置导航栏标题</li>
<li>backgroundColor 设置下拉 loading 的背景颜色,仅支持 16 进制的值</li>
<li>enablePullDownRefresh 开启下拉刷新,取值为布尔值</li>
<li>navigationStyle 导航栏样式，仅支持以下值：default 默认样式 / custom 自定义导航栏(只保留右上角胶囊按钮)</li>
</ul>
<p>当 <code>navigationStyle</code> 值为 <code>custom</code> 时
<img src="/images/window3.png" alt=""></p>
<h2 id="tabbar" tabindex="-1"><a class="header-anchor" href="#tabbar" aria-hidden="true">#</a> tabBar</h2>
<p>如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。</p>
<p>配置代码:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#999"</span><span class="token punctuation">,</span>
    <span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"#000"</span><span class="token punctuation">,</span>
    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#ff0"</span><span class="token punctuation">,</span>
    <span class="token property">"borderStyle"</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    <span class="token property">"position"</span><span class="token operator">:</span> <span class="token string">"bottom"</span><span class="token punctuation">,</span>
    <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"./assets/home.png"</span><span class="token punctuation">,</span>
        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"./assets/home-actived.png"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/logs/logs"</span><span class="token punctuation">,</span>
        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"日志"</span><span class="token punctuation">,</span>
        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"./assets/note.png"</span><span class="token punctuation">,</span>
        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"./assets/note-actived.png"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>配置效果:</p>
<p><img src="/images/window4.png" alt=""></p>
<ul>
<li>
<p>在 tabBar 中必须配置 list. 用于配置 tab 列表. 其中 list 接受一个数组，只能配置最少 2 个、最多 5 个 tab。tab 按数组的顺序排序，每个项都是一个对象，其属性值如下：</p>
<ul>
<li>pagePath 必填项. 页面路径,路径必须是 pages 中定义的路径</li>
<li>text tab 上的按钮文字</li>
<li>iconPath 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。当 position 为 top 时，不显示 icon</li>
<li>selectedIconPath 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。当 position 为 top 时，不显示 icon</li>
</ul>
</li>
<li>
<p>color tab 上的文字默认颜色, 仅支持 16 进制</p>
</li>
<li>
<p>selectedColor tab 上的文字选中时的颜色, 仅支持 16 进制</p>
</li>
<li>
<p>backgroundColor tab 的背景颜色,仅支持 16 进制</p>
</li>
<li>
<p>borderStyle tabBar 上边框的颜色， 仅支持 black / white</p>
</li>
<li>
<p>position tabBar 的位置，仅支持 bottom / top</p>
</li>
</ul>
<p>当 <code>position</code> 值为 <code>top</code> 时</p>
<p><img src="/images/window5.png" alt=""></p>
</template>
