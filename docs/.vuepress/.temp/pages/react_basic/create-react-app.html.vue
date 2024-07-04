<template><h1 id="create-react-app" tabindex="-1"><a class="header-anchor" href="#create-react-app" aria-hidden="true">#</a> create-react-app</h1>
<blockquote>
<p>create-react-app 被称为<code>脚手架工具</code></p>
</blockquote>
<p><strong>作用:</strong> 开发过程中开发者希望能够使用 <code>es6 模块化语法</code>或代码完成后希望对代码进行<code>打包</code>,这些操作就需要开发者通过打包工具(如 <code>webpack</code>)进行配置. 但是配置过程非常繁琐,所以利<code>create-react-app</code>,就可以帮助开发者快速创建 react 项目目录,配置 webpack 以及下载依赖包等,让开发者只需要关注项目的业务流程,提高开发效率</p>
<h2 id="使用-create-react-app" tabindex="-1"><a class="header-anchor" href="#使用-create-react-app" aria-hidden="true">#</a> 使用 create-react-app</h2>
<ol>
<li>
<p>下载 create-react-app</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 这是一个全局包,只需要下载一次. 未来在命令行窗口中使用</span>
npm i create<span class="token operator">-</span>react<span class="token operator">-</span>app <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>通过 create-react-app 创建项目目录以及 webpack 配置文件和依赖包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 利用npm下载依赖包</span>
<span class="token constant">C</span><span class="token operator">:</span>\Users\用户名\Desktop<span class="token operator">></span> create<span class="token operator">-</span>react<span class="token operator">-</span>app 项目名称

<span class="token comment">// 利用yarn下载依赖包</span>
<span class="token constant">C</span><span class="token operator">:</span>\Users\用户名\Desktop<span class="token operator">></span> yarn create react<span class="token operator">-</span>app 项目名称

<span class="token comment">//执行以上任意一条指令之后,create-react-app 会自动帮我们在桌面创建一个 react 项目</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>注意: 项目名称会成为项目的包名,所以项目名称不能用中文,不能有大写字母,也不要和当前项目中要下载的依赖包重名(否则未来重名的依赖包无法下载成功)</strong></p>
</li>
</ol>
<h2 id="项目目录介绍" tabindex="-1"><a class="header-anchor" href="#项目目录介绍" aria-hidden="true">#</a> 项目目录介绍</h2>
<p><img src="/images/project.png" alt="项目目录"></p>
<p><strong>注意:</strong>
自动生成的项目目录中大部分文件是没有用的可以直接删除.最干净的项目目录结构如下:</p>
<p><img src="/images/simple-project.png" alt="干净的项目目录"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src目录下至少有一个index.js入口文件</span>

<span class="token comment">// 引入react</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token comment">// 引入react-dom(v18)</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span>
<span class="token comment">// 引入react-dom(v18之前)</span>
<span class="token comment">// import ReactDOM from 'react-dom'</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>利用create<span class="token operator">-</span>react<span class="token operator">-</span>app创建的react项目<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token comment">// 渲染动态创建的元素(v18)</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span>
<span class="token comment">// 渲染动态创建的元素(v18之前)</span>
<span class="token comment">// ReactDOM.render(title, document.getElementById('root'))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- public目录下至少有一个index.html文件, 文件中至少应该有一个根标签 --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="启动和打包项目" tabindex="-1"><a class="header-anchor" href="#启动和打包项目" aria-hidden="true">#</a> 启动和打包项目</h2>
<ul>
<li>
<p>开发环境启动项目</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 项目根目录执行 npm start 指令</span>
<span class="token constant">C</span><span class="token operator">:</span>\Users\用户名\Desktop\my<span class="token operator">-</span>project<span class="token operator">></span> npm start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>项目完成后打包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 项目根目录执行 npm run build 指令</span>
<span class="token constant">C</span><span class="token operator">:</span>\Users\用户名\Desktop\my<span class="token operator">-</span>project<span class="token operator">></span> npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
</template>
