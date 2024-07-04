import{_ as n,d as s}from"./app.a98f98c2.js";var a="/react-docs/images/com_des.png",p="/react-docs/images/swiper.gif",e="/react-docs/images/use_com.png";const t={},o=s('<h1 id="\u7EC4\u4EF6\u4ECB\u7ECD\u53CA\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4ECB\u7ECD\u53CA\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u7EC4\u4EF6\u4ECB\u7ECD\u53CA\u57FA\u672C\u4F7F\u7528</h1><blockquote><p>\u4E00\u4E2A React \u5E94\u7528\u5C31\u662F\u7531\u4E00\u4E2A\u4E2A\u7684\u7EC4\u4EF6\u7EC4\u6210\u7684</p></blockquote><p>\u7EC4\u4EF6\u662F react \u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E00\u4E2A\u7279\u6027.\u5229\u7528\u7EC4\u4EF6\u53EF\u4EE5\u5C06 UI(\u9875\u9762\u7ED3\u6784) \u62C6\u5206\u4E3A\u72EC\u7ACB\u53EF\u590D\u7528\u7684\u4EE3\u7801\u7247\u6BB5\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u7247\u6BB5\u8FDB\u884C\u72EC\u7ACB\u6784\u601D\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u7EC4\u4EF6" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u7EC4\u4EF6</h2><p>\u5F53\u6211\u4EEC\u5199\u7F51\u9875\u65F6,\u4F1A\u53D1\u73B0\u7F51\u9875\u4E2D\u51FA\u73B0\u5927\u91CF\u76F8\u540C\u7684\u7ED3\u6784, \u4F20\u7EDF\u7684\u5904\u7406\u65B9\u5F0F\u662F\u5C06\u91CD\u590D\u7684\u6807\u7B7E\u518D\u5199\u4E00\u6B21. \u5982\u4E0B\u56FE\u6240\u793A\u6BCF\u4E00\u4E2A\u5546\u54C1\u7684\u5C55\u793A\u90FD\u662F\u7531\u591A\u4E2A\u6807\u7B7E\u7EC4\u6210.\u9875\u9762\u4E2D\u4F1A\u51FA\u73B0\u5927\u91CF\u76F8\u540C\u7ED3\u6784\u7684\u6807\u7B7E.\u8FD9\u6837\u7684\u4EE3\u7801\u7EF4\u62A4\u8D77\u6765\u975E\u5E38\u56F0\u96BE.</p><p><img src="'+a+'" alt=""></p><p>\u5982\u679C\u53EF\u4EE5\u5C06\u8FD9\u4E2A\u76F8\u540C\u7ED3\u6784\u7684\u6807\u7B7E\u5C01\u88C5\u8D77\u6765,\u5C31\u597D\u50CF js \u4E2D\u5C06\u76F8\u540C\u7684\u4EE3\u7801\u5C01\u88C5\u5230\u51FD\u6570\u91CC\u9762,\u8FD9\u6837\u7684\u4EE3\u7801\u7EF4\u62A4\u6027\u5C31\u4F1A\u975E\u5E38\u9AD8.</p><p>\u8FD8\u6709, \u8F6E\u64AD\u56FE\u662F\u7F51\u9875\u4E2D\u5E38\u89C1\u6548\u679C,\u51E0\u4E4E\u6BCF\u4E00\u4E2A\u9879\u76EE\u90FD\u8981\u5199. \u8F6E\u64AD\u56FE\u4E2D\u4E0D\u4EC5\u6709\u590D\u6742\u7684 html \u7ED3\u6784,\u4E5F\u6709\u590D\u6742\u7684 js \u903B\u8F91. \u5982\u679C\u628A\u8F6E\u64AD\u56FE\u7684 js \u4EE3\u7801\u548C\u5176\u4ED6\u529F\u80FD\u7684 js \u4EE3\u7801\u5199\u5728\u4E00\u8D77,\u672A\u6765\u4FEE\u6539\u4EE3\u7801\u65F6,\u6781\u5BB9\u6613<code>\u52A8\u4E00\u53D1\u7275\u5168\u8EAB</code>.\u5982\u679C\u53EF\u4EE5\u5C06\u8F6E\u64AD\u7684\u7ED3\u6784\u548C js \u5C01\u88C5\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D,\u8FD9\u6837\u4E0D\u4EC5\u5728\u5199\u7684\u65F6\u5019\u65B9\u4FBF\u67E5\u627E\u5143\u7D20,\u800C\u4E14\u672A\u6765\u7EF4\u62A4\u65F6\u4E5F\u53EF\u4EE5\u5FEB\u901F\u627E\u5230\u5BF9\u5E94\u7684\u6587\u4EF6\u8FDB\u884C\u4FEE\u6539,\u63D0\u9AD8\u4E86\u7F16\u7A0B\u6548\u7387</p><p><img src="'+p+`" alt=""></p><p>\u800C\u4E14\u5982\u679C\u6574\u4E2A\u9875\u9762\u5C06\u6240\u6709\u7ED3\u6784\u90FD\u8FDB\u884C\u5C01\u88C5,\u4E5F\u53EF\u4EE5\u5927\u5927\u63D0\u9AD8\u4EE3\u7801\u7684\u89E3\u8026\u7A0B\u5EA6</p><h2 id="\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u5E76\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u5E76\u4F7F\u7528" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u5E76\u4F7F\u7528</h2><p><strong>react \u4E2D\u5206\u4E3A\u4E24\u7C7B\u7EC4\u4EF6:</strong></p><ol><li>\u51FD\u6570\u7EC4\u4EF6</li><li>\u7C7B\u7EC4\u4EF6</li></ol><h3 id="\u521B\u5EFA\u51FD\u6570\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u51FD\u6570\u7EC4\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u51FD\u6570\u7EC4\u4EF6</h3><blockquote><p>\u521B\u5EFA\u51FD\u6570\u7EC4\u4EF6\u7684\u89C4\u5219:</p><ol><li>\u7EC4\u4EF6\u540D(\u51FD\u6570\u540D) \u9996\u5B57\u6BCD\u5927\u5199</li><li>\u5FC5\u987B\u5199 return, return \u540E\u9762\u5199 jsx, \u5982\u679C\u65E0\u9700\u6E32\u67D3\u7ED3\u6784,\u5219 return null</li></ol></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Item</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u521B\u5EFA\u7C7B\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7C7B\u7EC4\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u7C7B\u7EC4\u4EF6</h3><blockquote><p>\u521B\u5EFA\u7C7B\u7EC4\u4EF6\u7684\u89C4\u5219:</p><ol><li>\u7EC4\u4EF6\u540D(\u7C7B\u540D)\u9996\u5B57\u6BCD\u5927\u5199</li><li>\u5FC5\u987B\u7EE7\u627F React.Component \u7EC4\u4EF6</li><li>\u7C7B\u7ED3\u6784\u4F53\u4E2D\u5FC5\u987B\u5B9A\u4E49 render \u51FD\u6570</li><li>render \u51FD\u6570\u4E2D\u5FC5\u987B return, return \u540E\u9762\u53EF\u4EE5\u5199 jsx \u6216 null</li></ol></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">Item</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u7C7B\u7EC4\u4EF6<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u4F7F\u7528\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7EC4\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u7EC4\u4EF6</h3><blockquote><p>\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528\u7684\u65B9\u5F0F\u662F\u4E00\u6837\u7684</p><ol><li>\u7EC4\u4EF6\u4F7F\u7528\u65E2\u53EF\u4EE5\u5199\u6210\u53CC\u6807\u7B7E\u4E5F\u53EF\u4EE5\u5199\u6210\u5355\u6807\u7B7E</li><li>\u4F7F\u7528\u7EC4\u4EF6,\u76F8\u5F53\u4E8E\u5C31\u662F\u5B9E\u4F8B\u5316\u7EC4\u4EF6</li><li>\u7EC4\u4EF6\u4F7F\u7528\u5199\u5728\u54EA\u91CC, \u7EC4\u4EF6\u7684\u7ED3\u6784\u5C31\u6E32\u67D3\u5728\u54EA\u91CC</li></ol></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span>

<span class="token keyword">function</span> <span class="token function">Item</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token comment">/*\u4F7F\u7528Item\u7EC4\u4EF6*/</span><span class="token punctuation">}</span>
    <span class="token punctuation">{</span><span class="token comment">/* Item\u7EC4\u4EF6\u4E2D\u7684li\u6807\u7B7E\u5C31\u4F1A\u6E32\u67D3\u5230\u5F53\u524D\u4F4D\u7F6E*/</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>Item<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Item<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token comment">/*\u4F7F\u7528Item\u7EC4\u4EF6\u53E6\u4E00\u79CD\u5199\u6CD5*/</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>Item <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><img src="`+e+`" alt=""></p><p><strong>\u5982\u56FE\u6240\u793A: Item \u7EC4\u4EF6\u4F7F\u7528\u4E86\u4E24\u6B21,\u5219\u6E32\u67D3\u51FA\u6765\u4E24\u4E2A li \u6807\u7B7E, Item \u7EC4\u4EF6\u5199\u5728<code>&lt;hr /&gt;</code> \u6807\u7B7E\u4E4B\u95F4, \u5219\u7EC4\u4EF6\u7684\u7ED3\u6784\u5C31\u6E32\u67D3\u5728<code>&lt;hr /&gt;</code> \u6807\u7B7E\u4E4B\u95F4</strong></p><h2 id="react-\u9879\u76EE\u4E2D\u4F7F\u7528\u7EC4\u4EF6\u7684\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#react-\u9879\u76EE\u4E2D\u4F7F\u7528\u7EC4\u4EF6\u7684\u89C4\u8303" aria-hidden="true">#</a> react \u9879\u76EE\u4E2D\u4F7F\u7528\u7EC4\u4EF6\u7684\u89C4\u8303:</h2><ol><li><p>\u4E00\u4E2A\u7EC4\u4EF6\u5E94\u8BE5\u5355\u72EC\u5B9A\u4E49\u5728\u4E00\u4E2A.js/.jsx \u6587\u4EF6\u4E2D(\u8FD9\u4E24\u79CD\u7C7B\u578B\u7684\u6587\u4EF6\u672C\u8D28\u6CA1\u6709\u533A\u522B,\u53EA\u662F\u540E\u7F00\u540D\u4E0D\u540C)</p></li><li><p>\u4E00\u4E2A react \u9879\u76EE,\u5E94\u8BE5\u5728\u9879\u76EE\u6839\u76EE\u5F55\u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A<code>App.js</code>\u6216<code>App.jsx</code>\u7684\u6839\u7EC4\u4EF6.</p></li><li><p>\u5165\u53E3\u6587\u4EF6\u4E2D\u5F15\u5165\u5E76\u4F7F\u7528\u6839\u7EC4\u4EF6,\u5176\u4ED6\u7EC4\u4EF6\u5728\u6839\u7EC4\u4EF6\u4E2D\u4F7F\u7528</p></li></ol><h2 id="\u5173\u4E8E\u7EC4\u4EF6\u540D\u9996\u5B57\u6BCD\u5927\u5199\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u7EC4\u4EF6\u540D\u9996\u5B57\u6BCD\u5927\u5199\u95EE\u9898" aria-hidden="true">#</a> \u5173\u4E8E\u7EC4\u4EF6\u540D\u9996\u5B57\u6BCD\u5927\u5199\u95EE\u9898</h2><p>\u6709\u65F6\u6211\u4EEC\u4F1A\u53D1\u73B0,\u5B9A\u4E49\u7EC4\u4EF6\u7684\u65F6\u5019\u6CA1\u6709\u5199\u7EC4\u4EF6\u540D\u6216\u7EC4\u4EF6\u540D\u9996\u5B57\u6BCD\u6CA1\u6709\u5927\u5199,\u4EE3\u7801\u4E5F\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C. \u90A3\u662F\u56E0\u4E3A react \u89E3\u6790 jsx \u65F6,\u901A\u8FC7\u9996\u5B57\u6BCD\u662F\u5426\u5927\u5199\u4F5C\u4E3A\u5224\u65AD\u6211\u4EEC\u5199\u5728 jsx \u4E2D\u7684\u6807\u7B7E\u662F\u7EC4\u4EF6\u8FD8\u662F\u666E\u901A\u6807\u7B7E.\u6240\u4EE5\u53EA\u8981\u5728\u4F7F\u7528\u7EC4\u4EF6\u7684\u65F6\u5019\u4FDD\u8BC1\u7EC4\u4EF6\u9996\u5B57\u6BCD\u5927\u5199\u5373\u53EF.\u4E0D\u8FC7\u5B9E\u9645\u5F00\u53D1\u4F9D\u7136\u5EFA\u8BAE\u5B9A\u4E49\u7EC4\u4EF6\u65F6\u9996\u5B57\u6BCD\u5927\u5199.</p><p>\u4F8B\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// App.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">app</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.js&#39;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,31);function c(r,l){return o}var u=n(t,[["render",c],["__file","intro.html.vue"]]);export{u as default};