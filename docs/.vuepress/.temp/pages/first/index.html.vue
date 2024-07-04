<template><h1 id="小程序基本使用" tabindex="-1"><a class="header-anchor" href="#小程序基本使用" aria-hidden="true">#</a> 小程序基本使用</h1>
<h2 id="小程序开发特点概述" tabindex="-1"><a class="header-anchor" href="#小程序开发特点概述" aria-hidden="true">#</a> 小程序开发特点概述</h2>
<ul>
<li>
<p>没有 DOM(小程序并没有遵守 W3C 的语法规范)</p>
</li>
<li>
<p>组件化开发(小程序内置组件协助我们快速开发)</p>
</li>
<li>
<p>体积小，单个压缩包体积不能大于 2M，否则无法上线</p>
</li>
<li>
<p>小程序的四个重要的文件</p>
<ul>
<li>_.js</li>
<li>_.wxml ---&gt; view 结构 ----&gt; html</li>
<li>_.wxss ---&gt; view 样式 -----&gt; css</li>
<li>_. json ----&gt; view 配置 -----&gt; json 文件</li>
</ul>
</li>
<li>
<p>小程序适配方案: rpx (responsive pixel 响应式像素单位)</p>
 <p>可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。</p>
<p>原理就类似于 rem 适配中方式二:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> fontSize <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth
<span class="token comment">// 把屏幕等分为750份  1rpx 相当于就是一个 1rem</span>
document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> fontSize <span class="token operator">/</span> <span class="token number">750</span> <span class="token operator">+</span> <span class="token string">'px'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="/images/rpx.png" alt="rpx"></p>
</li>
</ul>
</template>
