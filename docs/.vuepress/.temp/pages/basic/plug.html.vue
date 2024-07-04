<template><h1 id="使用小程序插件" tabindex="-1"><a class="header-anchor" href="#使用小程序插件" aria-hidden="true">#</a> 使用小程序插件</h1>
<h2 id="添加插件" tabindex="-1"><a class="header-anchor" href="#添加插件" aria-hidden="true">#</a> 添加插件</h2>
<ol>
<li>前往<a href="https://fuwu.weixin.qq.com/search?tab=3&amp;serviceType=3&amp;type=&amp;page=1" target="_blank" rel="noopener noreferrer">微信服务平台<ExternalLinkIcon/></a>查找需要的小程序插件</li>
</ol>
<p><img src="/images/plug1.png" alt="插件"></p>
<ol start="2">
<li>假设我们使用<code>腾讯位置服务城市选择器</code>,则点击,进行添加</li>
</ol>
<p><img src="/images/plug2.png" alt="插件"></p>
<ol start="3">
<li>点击添加后,选择需要这个插件的小程序</li>
</ol>
<p><img src="/images/plug3.png" alt="插件"></p>
<ol start="4">
<li>添加成功的界面</li>
</ol>
<p><img src="/images/plug5.png" alt="插件"></p>
<ol start="5">
<li>由于腾讯服务器问题,可能会添加失败</li>
</ol>
<p><img src="/images/plug4.png" alt="插件"></p>
<p>6.如果添加失败,请移步<a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer">小程序管理后台<ExternalLinkIcon/></a>中进行添加</p>
<blockquote>
<p>选择<code>设置</code> --&gt; <code>第三方设置</code> --&gt; <code>插件管理</code> --&gt; 点击<code>添加插件按钮</code>--&gt; 在搜索框中搜索你需要的插件 --&gt; 点击添加</p>
</blockquote>
<p><img src="/images/plug6.png" alt="插件"></p>
<h2 id="开通定位服务" tabindex="-1"><a class="header-anchor" href="#开通定位服务" aria-hidden="true">#</a> 开通定位服务</h2>
<blockquote>
<p>由于使用的插件中有定位功能,所以需要在<a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer">小程序管理后台<ExternalLinkIcon/></a>,开启定位服务.</p>
</blockquote>
<ol>
<li>查找腾讯位置服务 <code>开发</code> --&gt; <code>开发工具</code> --&gt; <code>开发能力</code> --&gt; <code>腾讯位置服务</code></li>
</ol>
<p><img src="/images/plug7.png" alt="插件"></p>
<ol start="2">
<li>开通位置服务</li>
</ol>
<p><img src="/images/plug8.png" alt="插件"></p>
<ol start="3">
<li>微信账号扫码授权</li>
</ol>
<p><img src="/images/plug9.png" alt="插件"></p>
<ol start="4">
<li>在腾讯位置服务中注册账号</li>
</ol>
<p><img src="/images/plug10.png" alt="插件"></p>
<ol start="5">
<li>进入<a href="https://lbs.qq.com/" target="_blank" rel="noopener noreferrer">腾讯位置服务官方<ExternalLinkIcon/></a>,点击右上角<code>控制台</code></li>
</ol>
<p><img src="/images/plug11.png" alt="插件"></p>
<ol start="6">
<li>在控制台中选择 <code>应用管理</code>--&gt; <code>我的应用</code>--&gt; <code>创建应用</code>
输入应用名称(随意).应用类型(建议选其他)</li>
</ol>
<p><img src="/images/plug12.png" alt="插件"></p>
<ol start="7">
<li>在应用中,点击<code>添加key</code>,书写表单</li>
</ol>
<p><img src="/images/plug13.png" alt="插件"></p>
<ol start="8">
<li>生成 key. 此时已经成功开启定位服务</li>
</ol>
<p><img src="/images/plug14.png" alt="插件"></p>
<p>9 此时, 在<a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer">小程序管理后台<ExternalLinkIcon/></a>中 <code>设置</code> --&gt; <code>第三方设置</code>--&gt; <code>第三方平台授权管理</code>中查看到腾讯位置服务</p>
<p><img src="/images/plug15.png" alt="插件"></p>
<h2 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件" aria-hidden="true">#</a> 使用插件</h2>
<blockquote>
<p>添加插件和开通定位服务完成之后,即可在自己的小程序中使用. 进入指定插件的详情页面, 选择接入文档,按照文档要求使用即可</p>
</blockquote>
<ol>
<li>在你的小程序中引入插件</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// app.json</span>
<span class="token punctuation">{</span>
  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"citySelector"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.1"</span><span class="token punctuation">,</span>
      <span class="token property">"provider"</span><span class="token operator">:</span> <span class="token string">"wx63ffb7b7894e99ae"</span> <span class="token comment">//这是城市选择器appid</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2">
<li>城市选择器插件需要小程序提供定位授权才能够正常使用定位功能：</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// app.json</span>
<span class="token punctuation">{</span>
  <span class="token property">"permission"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"scope.userLocation"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"desc"</span><span class="token operator">:</span> <span class="token string">"你的位置信息将用于小程序定位"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3">
<li>在需要使用插件的页面中定义如下代码
<blockquote>
<p>假设/pages/index/index 页面中点击按钮,使用插件</p>
</blockquote>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">'EXXBZ-BLIKU-PYBVK-B4OMY-AST6J-CWB6J'</span> <span class="token comment">// 使用在腾讯位置服务申请的key</span>
    <span class="token keyword">const</span> referer <span class="token operator">=</span> <span class="token string">'test'</span> <span class="token comment">// 调用插件的app的名称(随便写)</span>
    <span class="token keyword">const</span> hotCitys <span class="token operator">=</span> <span class="token string">'北京,深圳,上海,武汉,西安'</span> <span class="token comment">// 用户自定义的的热门城市(随便写)</span>

    wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">plugin://citySelector/index?key=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;referer=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>referer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;hotCitys=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hotCitys<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="/images/plug16.png" alt="plug"></p>
<ol start="4">
<li>选择任何一个城市之后,会返回到<code>pages/index/index</code>页面. 在<code>pages/index/index</code>中定义代码,可以拿到选择的城市信息</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> citySelector <span class="token operator">=</span> <span class="token function">requirePlugin</span><span class="token punctuation">(</span><span class="token string">'citySelector'</span><span class="token punctuation">)</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 从城市选择器插件返回后，在页面的onShow生命周期函数中能够调用插件接口，获取cityInfo结果对象</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> selectedCity <span class="token operator">=</span> citySelector<span class="token punctuation">.</span><span class="token function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 选择城市后返回城市信息对象，若未选择返回null</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>selectedCity<span class="token punctuation">)</span>
    <span class="token comment">/*
    {
        fullname: "深圳市"
        id: "440300"
        location: {latitude: 22.54286, longitude: 114.05956}
        name: "深圳"
        pinyin: (2) ["shen", "zhen"]
    }
    */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果</span>
    citySelector<span class="token punctuation">.</span><span class="token function">clearCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></template>
