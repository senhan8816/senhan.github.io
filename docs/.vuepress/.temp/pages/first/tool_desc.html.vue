<template><h1 id="开发工具介绍" tabindex="-1"><a class="header-anchor" href="#开发工具介绍" aria-hidden="true">#</a> 开发工具介绍</h1>
<h2 id="开发工具界面组成" tabindex="-1"><a class="header-anchor" href="#开发工具界面组成" aria-hidden="true">#</a> 开发工具界面组成</h2>
<p><img src="/images/tool5.png" alt="开发工具界面"></p>
<ul>
<li>
<p>菜单栏 切换项目等操作</p>
</li>
<li>
<p>模拟器 用于展示编译后的效果</p>
</li>
<li>
<p>编辑器 用于编辑代码(也可使用其他编辑器如 vscode 替代)</p>
</li>
<li>
<p>调试器 类似于 chrome 的调试器</p>
</li>
<li>
<p>工具栏</p>
<ul>
<li>模拟器 控制是否使用模拟器</li>
<li>编辑器 控制是否使用编辑器</li>
<li>调试器 用于调试
<strong><p>注意: 上面三个部分,至少保留一个</p></strong></li>
<li>可视化 可以实现拖拽组件等操作,快速搭建页面(一般不使用,代码为王)</li>
<li>云开发 不使用</li>
<li>小程序模式 两种模式: 小程序模式和插件模式 选择小程序模式</li>
<li>普通编译 可以选择编译模式(进入小程序的方式)</li>
<li>编译按钮 点击则重新编译代码(默认保存代码则自动编译,但有时编辑器会出现卡顿,需要手动编译)</li>
<li>预览按钮 可以在真机上查看页面效果</li>
<li>真机调试按钮 在真机上预览页面, 弹出调试窗口</li>
<li>清缓存按钮</li>
<li>上传按钮 可以将项目上传给腾讯进行审核,审核通过则上线</li>
<li>版本管理按钮 利用 git 实现管本管理</li>
<li>详情按钮 展示或修改项目信息</li>
<li>消息按钮 微信小程序推送的通知</li>
</ul>
</li>
</ul>
<h2 id="编辑器项目目录介绍" tabindex="-1"><a class="header-anchor" href="#编辑器项目目录介绍" aria-hidden="true">#</a> 编辑器项目目录介绍</h2>
<p><img src="/images/tool6.png" alt="项目目录"></p>
<div class="language-dir ext-dir line-numbers-mode"><pre v-pre class="language-dir"><code>├── pages 存放小程序页面的目录
│   ├── index  index页面目录
│   │   ├── index.js  index页面的逻辑文件
│   │   ├── index.json index页面的配置文件
│   │   ├── index.wxml index页面的结构文件
│   │   └── index.wxss index页面的样式文件
│   ├── logs
│   │   ├── logs.js
│   │   ├── logs.json
│   │   ├── logs.wxml
│   │   └── logs.wxss
├── utils
│   └── utils.js 存放工具函数
├── .eslintrc.js eslint配置文件
├── app.js 全局逻辑文件 App() 必须在 app.js 中调用，必须调用且只能调用一次
├── app.json 全局配置文件
├── app.wxss 全局样式文件
├── project.config.json 项目的配置文件
├── project.private.config.json 项目私有配置文件。此文件中的内容将覆盖 project.config.json 中的相同字段。项目的改动优先同步到此文件中
└── sitemap.json 用来配置小程序及其页面是否允许被微信索引(小程序是否可以在微信中被检索)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></template>
