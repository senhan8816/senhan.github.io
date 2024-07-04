<template><h1 id="其他组件" tabindex="-1"><a class="header-anchor" href="#其他组件" aria-hidden="true">#</a> 其他组件</h1>
<h2 id="navlink" tabindex="-1"><a class="header-anchor" href="#navlink" aria-hidden="true">#</a> NavLink</h2>
<blockquote>
<p>作用: 与 Link 组件一样,但是可以快速实现导航高亮</p>
</blockquote>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 注意: 默认类名是active, 下面是自定义的style和类名</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span>
    <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> isActive <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">,</span> isActive<span class="token punctuation">)</span>
        <span class="token keyword">return</span> isActive <span class="token operator">?</span> activeStyle <span class="token operator">:</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        login
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span>
    <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span>
    <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> isActive <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'home'</span><span class="token punctuation">,</span> isActive<span class="token punctuation">)</span>
        <span class="token keyword">return</span> isActive <span class="token operator">?</span> <span class="token string">'base one'</span> <span class="token operator">:</span> <span class="token string">'base'</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        home
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">></span></span>

<span class="token comment">// 注意:  默认,当Home的子组件匹配成功,Home的导航也会高亮.当NavLink上添加了end属性,则Home的子组件匹配成功的时候,Home的导航没有高亮效果</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span>
    <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span>
    <span class="token attr-name">end</span>
	<span class="token punctuation">></span></span><span class="token plain-text">
        home
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="navigate" tabindex="-1"><a class="header-anchor" href="#navigate" aria-hidden="true">#</a> Navigate</h2>
<blockquote>
<p>只要 Navigate 组件被解析,就会修改路径,切换视图</p>
<p>一般用来展示 404 页面</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useRoutes</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token operator">...</span>忽略<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token string">"/404"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="hashrouter" tabindex="-1"><a class="header-anchor" href="#hashrouter" aria-hidden="true">#</a> HashRouter</h2>
<blockquote>
<p>作用与 BrowserRouter 一样,但是修改的是地址栏的 hash 值.</p>
</blockquote>
</template>
