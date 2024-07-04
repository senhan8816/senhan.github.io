<template><h1 id="小程序基本使用" tabindex="-1"><a class="header-anchor" href="#小程序基本使用" aria-hidden="true">#</a> 小程序基本使用</h1>
<h2 id="小程序开发特点概述" tabindex="-1"><a class="header-anchor" href="#小程序开发特点概述" aria-hidden="true">#</a> 小程序开发特点概述</h2>
<ul>
<li>
<p>组件化开发(小程序内置组件协助我们快速开发)</p>
</li>
<li>
<p>小程序中一个页面由四个文件组成</p>
<ul>
<li>_.js</li>
<li>_.wxml ---&gt; view 结构 ----&gt; html</li>
<li>_.wxss ---&gt; view 样式 -----&gt; css</li>
<li>_. json ----&gt; view 配置 -----&gt; json 文件</li>
</ul>
</li>
<li>
<p>小程序适配方案: rpx (responsive pixel 响应式像素单位)</p>
 <p>可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。如在 iPhone6 上，布局视口为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。</p>
<p><img src="/images/rpx.png" alt="rpx"></p>
<p>实际开发中,如果是专门为小程序设计的设计稿一般设计稿尺寸是<code>750</code>. 则假如设计稿中标注的设计值是个<code>345px</code>,我们在写小程序时写成<code>345rpx</code>. 如果是为了app设计的设计稿,尺寸的宽度主要为<code>375</code>,那么设计稿中设计值为<code>345px</code>,写小程序时需要<code>345*2</code>,也就是写<code>690rpx</code></p>
<p><img src="/images/mobile_design.png" alt="设计稿"></p>
</li>
</ul>
</template>
