<template><h1 id="分包" tabindex="-1"><a class="header-anchor" href="#分包" aria-hidden="true">#</a> 分包</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<blockquote>
<p>微信客户端 6.6.0，基础库 1.7.3 及以上版本开始支持。</p>
<p>开发者将一个小程序项目划分成不同的子包，最终在构建时打包成不同的分包</p>
</blockquote>
<h3 id="分包的作用" tabindex="-1"><a class="header-anchor" href="#分包的作用" aria-hidden="true">#</a> 分包的作用:</h3>
<ul>
<li>
<p>增加整体项目的体积. 没有分包的情况下项目压缩之后的整体大小不能超过2M. 使用分包技术,项目压缩之后整体大小不能超过20M(如果超过限制,则无法发布小程序)</p>
</li>
<li>
<p>利用分包技术可以实现按需加载</p>
</li>
<li>
<p>团队共同开发时可以更好的解耦协作</p>
</li>
</ul>
<h3 id="分包前后对比" tabindex="-1"><a class="header-anchor" href="#分包前后对比" aria-hidden="true">#</a> 分包前后对比:</h3>
<ul>
<li>分包之前, 项目中所有的资源都打包成一个包</li>
<li>分包之后,项目的启动页面和tabbar页面以及项目公共资源打包成一个主包, 分包页面和分包的私有资源打包成多个分包</li>
</ul>
<p><img src="images/分包.png" alt="分包前后对比"></p>
<h3 id="分包的注意点" tabindex="-1"><a class="header-anchor" href="#分包的注意点" aria-hidden="true">#</a> 分包的注意点:</h3>
<ul>
<li>
<p>在构建小程序分包项目时，构建会输出一个或多个分包。每个使用分包小程序必定含有一个<strong>主包</strong>。所谓的主包，即放置默认启动页面/TabBar 页面，以及一些所有分包都需用到公共资源/JS 脚本；而<strong>分包</strong>则是根据开发者的配置进行划分。</p>
</li>
<li>
<p>整个小程序所有分包大小不超过 20M,单个分包/主包大小不能超过 2M</p>
</li>
</ul>
<h3 id="分包的执行流程" tabindex="-1"><a class="header-anchor" href="#分包的执行流程" aria-hidden="true">#</a> 分包的执行流程</h3>
<p>在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示。</p>
<p>目前小程序分包大小有以下限制：</p>
<ul>
<li></li>
<li></li>
</ul>
<h2 id="使用分包" tabindex="-1"><a class="header-anchor" href="#使用分包" aria-hidden="true">#</a> 使用分包</h2>
<h2 id="独立分包" tabindex="-1"><a class="header-anchor" href="#独立分包" aria-hidden="true">#</a> 独立分包</h2>
<h2 id="分包预下载" tabindex="-1"><a class="header-anchor" href="#分包预下载" aria-hidden="true">#</a> 分包预下载</h2>
<h2 id="分包异步化" tabindex="-1"><a class="header-anchor" href="#分包异步化" aria-hidden="true">#</a> 分包异步化</h2>
</template>
