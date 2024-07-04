<template><h1 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h1>
<p>现在我们将 wmp_project 项目中除配置文件以外的其他所有文件全部删除.然后模仿实现一个小程序初始化时的 index 页面
<img src="/images/achieve1.png" alt="">
我们会看到调试器中提示缺少 app.json. 说明小程序中必须有 app.json 文件. 接下来我们在项目中添加 app.json.但是依然提示 app.json 中不能为空
<img src="/images/achieve2.png" alt="">
app.json 是全局配置文件, 所以我们可以在小程序开发文档中查找<a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html" target="_blank" rel="noopener noreferrer">全局配置<ExternalLinkIcon/></a>来学习如何全局配置.
在全局配置文档中,我们可以看到有很多配置项. 其中<code>page</code>是必须设置的配置项
用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的 .json, .js, .wxml, .wxss 四个文件进行处理。</p>
<p>未指定 entryPagePath 时，数组的第一项代表小程序的初始页面（首页）。</p>
<p>小程序中新增/减少页面，都需要对 pages 数组进行修改。</p>
</template>
