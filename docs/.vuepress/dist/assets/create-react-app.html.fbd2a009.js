import{_ as a,d as n}from"./app.a98f98c2.js";var s="/react-docs/images/project.png",t="/react-docs/images/simple-project.png";const p={},e=n(`<h1 id="create-react-app" tabindex="-1"><a class="header-anchor" href="#create-react-app" aria-hidden="true">#</a> create-react-app</h1><blockquote><p>create-react-app \u88AB\u79F0\u4E3A<code>\u811A\u624B\u67B6\u5DE5\u5177</code></p></blockquote><p><strong>\u4F5C\u7528:</strong> \u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5F00\u53D1\u8005\u5E0C\u671B\u80FD\u591F\u4F7F\u7528 <code>es6 \u6A21\u5757\u5316\u8BED\u6CD5</code>\u6216\u4EE3\u7801\u5B8C\u6210\u540E\u5E0C\u671B\u5BF9\u4EE3\u7801\u8FDB\u884C<code>\u6253\u5305</code>,\u8FD9\u4E9B\u64CD\u4F5C\u5C31\u9700\u8981\u5F00\u53D1\u8005\u901A\u8FC7\u6253\u5305\u5DE5\u5177(\u5982 <code>webpack</code>)\u8FDB\u884C\u914D\u7F6E. \u4F46\u662F\u914D\u7F6E\u8FC7\u7A0B\u975E\u5E38\u7E41\u7410,\u6240\u4EE5\u5229<code>create-react-app</code>,\u5C31\u53EF\u4EE5\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u521B\u5EFA react \u9879\u76EE\u76EE\u5F55,\u914D\u7F6E webpack \u4EE5\u53CA\u4E0B\u8F7D\u4F9D\u8D56\u5305\u7B49,\u8BA9\u5F00\u53D1\u8005\u53EA\u9700\u8981\u5173\u6CE8\u9879\u76EE\u7684\u4E1A\u52A1\u6D41\u7A0B,\u63D0\u9AD8\u5F00\u53D1\u6548\u7387</p><h2 id="\u4F7F\u7528-create-react-app" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-create-react-app" aria-hidden="true">#</a> \u4F7F\u7528 create-react-app</h2><ol><li><p>\u4E0B\u8F7D create-react-app</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8FD9\u662F\u4E00\u4E2A\u5168\u5C40\u5305,\u53EA\u9700\u8981\u4E0B\u8F7D\u4E00\u6B21. \u672A\u6765\u5728\u547D\u4EE4\u884C\u7A97\u53E3\u4E2D\u4F7F\u7528</span>
npm i create<span class="token operator">-</span>react<span class="token operator">-</span>app <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>\u901A\u8FC7 create-react-app \u521B\u5EFA\u9879\u76EE\u76EE\u5F55\u4EE5\u53CA webpack \u914D\u7F6E\u6587\u4EF6\u548C\u4F9D\u8D56\u5305</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5229\u7528npm\u4E0B\u8F7D\u4F9D\u8D56\u5305</span>
<span class="token constant">C</span><span class="token operator">:</span>\\Users\\\u7528\u6237\u540D\\Desktop<span class="token operator">&gt;</span> create<span class="token operator">-</span>react<span class="token operator">-</span>app \u9879\u76EE\u540D\u79F0

<span class="token comment">// \u5229\u7528yarn\u4E0B\u8F7D\u4F9D\u8D56\u5305</span>
<span class="token constant">C</span><span class="token operator">:</span>\\Users\\\u7528\u6237\u540D\\Desktop<span class="token operator">&gt;</span> yarn create react<span class="token operator">-</span>app \u9879\u76EE\u540D\u79F0

<span class="token comment">//\u6267\u884C\u4EE5\u4E0A\u4EFB\u610F\u4E00\u6761\u6307\u4EE4\u4E4B\u540E,create-react-app \u4F1A\u81EA\u52A8\u5E2E\u6211\u4EEC\u5728\u684C\u9762\u521B\u5EFA\u4E00\u4E2A react \u9879\u76EE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u6CE8\u610F: \u9879\u76EE\u540D\u79F0\u4F1A\u6210\u4E3A\u9879\u76EE\u7684\u5305\u540D,\u6240\u4EE5\u9879\u76EE\u540D\u79F0\u4E0D\u80FD\u7528\u4E2D\u6587,\u4E0D\u80FD\u6709\u5927\u5199\u5B57\u6BCD,\u4E5F\u4E0D\u8981\u548C\u5F53\u524D\u9879\u76EE\u4E2D\u8981\u4E0B\u8F7D\u7684\u4F9D\u8D56\u5305\u91CD\u540D(\u5426\u5219\u672A\u6765\u91CD\u540D\u7684\u4F9D\u8D56\u5305\u65E0\u6CD5\u4E0B\u8F7D\u6210\u529F)</strong></p></li></ol><h2 id="\u9879\u76EE\u76EE\u5F55\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u76EE\u5F55\u4ECB\u7ECD" aria-hidden="true">#</a> \u9879\u76EE\u76EE\u5F55\u4ECB\u7ECD</h2><p><img src="`+s+'" alt="\u9879\u76EE\u76EE\u5F55"></p><p><strong>\u6CE8\u610F:</strong> \u81EA\u52A8\u751F\u6210\u7684\u9879\u76EE\u76EE\u5F55\u4E2D\u5927\u90E8\u5206\u6587\u4EF6\u662F\u6CA1\u6709\u7528\u7684\u53EF\u4EE5\u76F4\u63A5\u5220\u9664.\u6700\u5E72\u51C0\u7684\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B:</p><p><img src="'+t+`" alt="\u5E72\u51C0\u7684\u9879\u76EE\u76EE\u5F55"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src\u76EE\u5F55\u4E0B\u81F3\u5C11\u6709\u4E00\u4E2Aindex.js\u5165\u53E3\u6587\u4EF6</span>

<span class="token comment">// \u5F15\u5165react</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token comment">// \u5F15\u5165react-dom(v18)</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span>
<span class="token comment">// \u5F15\u5165react-dom(v18\u4E4B\u524D)</span>
<span class="token comment">// import ReactDOM from &#39;react-dom&#39;</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>\u5229\u7528create<span class="token operator">-</span>react<span class="token operator">-</span>app\u521B\u5EFA\u7684react\u9879\u76EE<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token comment">// \u6E32\u67D3\u52A8\u6001\u521B\u5EFA\u7684\u5143\u7D20(v18)</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span>
<span class="token comment">// \u6E32\u67D3\u52A8\u6001\u521B\u5EFA\u7684\u5143\u7D20(v18\u4E4B\u524D)</span>
<span class="token comment">// ReactDOM.render(title, document.getElementById(&#39;root&#39;))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- public\u76EE\u5F55\u4E0B\u81F3\u5C11\u6709\u4E00\u4E2Aindex.html\u6587\u4EF6, \u6587\u4EF6\u4E2D\u81F3\u5C11\u5E94\u8BE5\u6709\u4E00\u4E2A\u6839\u6807\u7B7E --&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u542F\u52A8\u548C\u6253\u5305\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u548C\u6253\u5305\u9879\u76EE" aria-hidden="true">#</a> \u542F\u52A8\u548C\u6253\u5305\u9879\u76EE</h2><ul><li><p>\u5F00\u53D1\u73AF\u5883\u542F\u52A8\u9879\u76EE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9879\u76EE\u6839\u76EE\u5F55\u6267\u884C npm start \u6307\u4EE4</span>
<span class="token constant">C</span><span class="token operator">:</span>\\Users\\\u7528\u6237\u540D\\Desktop\\my<span class="token operator">-</span>project<span class="token operator">&gt;</span> npm start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>\u9879\u76EE\u5B8C\u6210\u540E\u6253\u5305</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9879\u76EE\u6839\u76EE\u5F55\u6267\u884C npm run build \u6307\u4EE4</span>
<span class="token constant">C</span><span class="token operator">:</span>\\Users\\\u7528\u6237\u540D\\Desktop\\my<span class="token operator">-</span>project<span class="token operator">&gt;</span> npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul>`,13);function c(o,l){return e}var u=a(p,[["render",c],["__file","create-react-app.html.vue"]]);export{u as default};
