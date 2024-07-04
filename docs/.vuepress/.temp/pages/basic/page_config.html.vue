<template><h1 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h1>
<p>app.json 中的部分配置，也支持对单个页面进行配置，可以在页面对应的 .json 文件来对当前页面进行配置。页面中配置项在当前页面会覆盖 app.json 中相同的配置项（样式相关的配置项属于 app.json 中的 window 属性，但这里不需要额外指定 window 字段），具体的取值和含义可参考全局配置文档中说明。</p>
<p>我们在 logs 页面中进行演示.</p>
<ol>
<li>首先创建 <code>pages/logs/logs.json</code> 文件</li>
</ol>
<p><img src="/images/page0.png" alt=""></p>
<ol start="2">
<li>在 <code>logs.json</code> 中进行页面配置</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#f00"</span><span class="token punctuation">,</span>
  <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
  <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span>
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#0f0"</span><span class="token punctuation">,</span>
  <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">,</span>
  <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"disableScroll"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3">
<li>配置效果</li>
</ol>
<p><img src="/images/page1.png" alt=""></p>
<ol start="4">
<li>配置项说明
<blockquote>
<p>上面配置代码中其他配置项和全局配置中的作用相同,不在赘述</p>
</blockquote>
</li>
</ol>
<ul>
<li>disableScroll (默认值为 false) 设置为 true 则页面整体不能上下滚动,只在页面配置中有效</li>
</ul>
</template>
