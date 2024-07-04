<template><h1 id="flex-布局" tabindex="-1"><a class="header-anchor" href="#flex-布局" aria-hidden="true">#</a> flex 布局</h1>
<blockquote>
<p>Flex 是 Flexible Box 的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。</p>
</blockquote>
<blockquote>
<p>任何一个容器都可以指定为 Flex 布局。</p>
</blockquote>
<blockquote>
<p>小程序中支持 flex 布局,也推荐使用 flex 布局</p>
</blockquote>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> <span class="token string">'flex'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noopener noreferrer">这里推荐阮一峰写的 flex 语法篇<ExternalLinkIcon/></a></p>
<h3 id="flex-布局重要知识介绍" tabindex="-1"><a class="header-anchor" href="#flex-布局重要知识介绍" aria-hidden="true">#</a> flex 布局重要知识介绍</h3>
<h4 id="_1-基本概念" tabindex="-1"><a class="header-anchor" href="#_1-基本概念" aria-hidden="true">#</a> 1. 基本概念</h4>
<p>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。项目默认沿主轴排列</p>
<p><img src="/images/flex_basic.png" alt="flex"></p>
<h4 id="_2-容器的属性" tabindex="-1"><a class="header-anchor" href="#_2-容器的属性" aria-hidden="true">#</a> 2. 容器的属性</h4>
<h5 id="_2-1-flex-direction" tabindex="-1"><a class="header-anchor" href="#_2-1-flex-direction" aria-hidden="true">#</a> 2.1 flex-direction</h5>
<blockquote>
<p>flex-direction 属性决定主轴的方向（即项目的排列方向）</p>
</blockquote>
<p>取值:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>
<p>column-reverse：主轴为垂直方向，起点在下沿。</p>
</li>
<li>
<p>column：主轴为垂直方向，起点在上沿。</p>
</li>
<li>
<p>row（默认值）：主轴为水平方向，起点在左端。</p>
</li>
<li>
<p>row-reverse：主轴为水平方向，起点在右端。</p>
<p><img src="/images/flex-direction.png" alt="flex-direction"></p>
</li>
</ul>
<h5 id="_2-2-align-items" tabindex="-1"><a class="header-anchor" href="#_2-2-align-items" aria-hidden="true">#</a> 2.2 align-items</h5>
<blockquote>
<p>align-items 属性定义项目在交叉轴上如何对齐</p>
</blockquote>
<p>取值:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>flex-start：交叉轴的起点对齐。</li>
<li>flex-end：交叉轴的终点对齐。</li>
<li>center：交叉轴的中点对齐。</li>
<li>baseline: 项目的第一行文字的基线对齐。</li>
<li>stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度</li>
</ul>
<p><img src="/images/align-items.png" alt="align-items"></p>
<h5 id="_2-3-justify-content" tabindex="-1"><a class="header-anchor" href="#_2-3-justify-content" aria-hidden="true">#</a> 2.3 justify-content</h5>
<blockquote>
<p>justify-content 属性定义了项目在主轴上的对齐方式.</p>
</blockquote>
<p>取值:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>flex-start（默认值）：左对齐</li>
<li>flex-end：右对齐</li>
<li>center： 居中</li>
<li>space-between：两端对齐，项目之间的间隔都相等。</li>
<li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li>
</ul>
<p><img src="/images/justify-content.png" alt="justify-content"></p>
<p><a href="http://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer">练习 flex 游戏: 小青蛙<ExternalLinkIcon/></a></p>
</template>
