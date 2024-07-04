<template><h1 id="单页面应用" tabindex="-1"><a class="header-anchor" href="#单页面应用" aria-hidden="true">#</a> 单页面应用</h1>
<p>单页面应用（single page web application，SPA），就是只有一张 Web 页面的应用，整个 web 应用只加载一个 HTML 页面并在用户与应用程序交互时动态更新该页面的 Web 应用程序。</p>
<h2 id="单页面应用的优势和缺陷" tabindex="-1"><a class="header-anchor" href="#单页面应用的优势和缺陷" aria-hidden="true">#</a> 单页面应用的优势和缺陷</h2>
<ul>
<li>优点
<ol>
<li>用户体验好. 切换页面不需要再次请求服务器获取页面,页面加载速度更快</li>
<li>减轻服务器压力. 因为只有一个 web 页面,视图切换时,不会再次向服务器发起请求</li>
</ol>
</li>
<li>缺点
<ol>
<li>不利于 SEO. 因为所有的页面都在一个 web 页面中动态展示,SEO 效果不如静态页面</li>
<li>第一次加载耗时长. 整个应用的所有页面都写在一个 web 页面中,包裹 js 和 css 都打包成一个文件.第一次加载时就需要更长的时间</li>
</ol>
</li>
</ul>
<h2 id="单页面应用原理" tabindex="-1"><a class="header-anchor" href="#单页面应用原理" aria-hidden="true">#</a> 单页面应用原理</h2>
<p>​ 在单页 Web 应用程序中，当浏览器向服务器发出第一个请求时，服务器会发回 index.html 文件. 用户需要切换页面时,会改变浏览器地址的路径(但不发送请求). 路径发生变化之后,根据之前配置好的前端路由规则,找到与当前路径匹配的视图,让其视图展示.其他视图隐藏. 展示视图需要渲染的数据,通过 ajax 获取.然后在前端渲染</p>
<p><img src="/images/spa.png" alt=""></p>
<h2 id="实现单页面应用要处理的三个问题" tabindex="-1"><a class="header-anchor" href="#实现单页面应用要处理的三个问题" aria-hidden="true">#</a> 实现单页面应用要处理的三个问题</h2>
<ol>
<li>定义路径和视图的一一对应规则(前端路由)</li>
<li>监听浏览器地址栏路径的变化</li>
<li>当路径变化,根据前端路由找到对应的视图并展示,其他视图不展示(在 react 中每一个页面视图都是一个组件)</li>
</ol>
</template>
