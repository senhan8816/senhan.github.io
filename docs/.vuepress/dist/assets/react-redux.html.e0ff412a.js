import{_ as n,d as s}from"./app.a98f98c2.js";var a="/react-docs/images/react-redux.png";const p={},t=s('<h1 id="react-redux" tabindex="-1"><a class="header-anchor" href="#react-redux" aria-hidden="true">#</a> react-redux</h1><blockquote><p>Redux \u662F\u72EC\u7ACB\u7684 js \u5E93,\u5982\u679C\u8981\u5728 react \u4E2D\u4F7F\u7528 redux \u6570\u636E,\u5E94\u8BE5\u4F7F\u7528 react-redux \u8FD9\u4E2A\u5305\u5C06 react \u548C redux \u5173\u8054\u8D77\u6765</p><p>\u4F7F\u7528\u4E4B\u524D\u5E94\u8BE5\u5148\u4E0B\u8F7D npm i react-redux</p></blockquote><p><img src="'+a+`" alt="react-redux"></p><h2 id="react-redux-\u4E2D\u7684\u6838\u5FC3-api" tabindex="-1"><a class="header-anchor" href="#react-redux-\u4E2D\u7684\u6838\u5FC3-api" aria-hidden="true">#</a> react-redux \u4E2D\u7684\u6838\u5FC3 API</h2><ul><li><p>Provider \u7EC4\u4EF6: \u7528\u6765\u5305\u88F9\u6574\u4E2A React \u5E94\u7528\uFF0C\u5411\u4E0B\u4F20\u9012 store \u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5165\u53E3\u6587\u4EF6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token comment">// \u5F15\u5165store\u5BF9\u8C61</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./redux/store&#39;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>useSelector: \u5728 react \u7EC4\u4EF6\u4E2D\u4F7F\u7528,\u8FD4\u56DE store \u4E2D\u7684\u6570\u636E.\u5E76\u4E14\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316,\u8BA9 react \u7EC4\u4EF6\u66F4\u65B0</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

<span class="token keyword">function</span> <span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// c\u63A5\u6536\u5230\u7684\u5C31\u662F\u56DE\u8C03\u4E2D\u8FD4\u56DE\u7684\u503C</span>
  <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// state \u662Fredux\u4E2D\u6240\u6709\u6570\u636E</span>
    <span class="token comment">// \u8FD4\u56DE\u5F53\u524D\u7EC4\u4EF6\u9700\u8981\u7684\u6570\u636E</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>count
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>c<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p>useDispatch: \u5728 react \u7EC4\u4EF6\u4E2D\u4F7F\u7528. \u8FD4\u56DE store \u7684 disaptch \u51FD\u6570</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useSelector<span class="token punctuation">,</span> useDispatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

<span class="token keyword">function</span> <span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// c\u63A5\u6536\u5230\u7684\u5C31\u662F\u56DE\u8C03\u4E2D\u8FD4\u56DE\u7684\u503C</span>
  <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// state \u662Fredux\u4E2D\u6240\u6709\u6570\u636E</span>
    <span class="token comment">// \u8FD4\u56DE\u5F53\u524D\u7EC4\u4EF6\u9700\u8981\u7684\u6570\u636E</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>count
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>c<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u8FD9\u4E2Adispatch\u5C31\u662Fstore.dispatch</span>
          <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ADD&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        +
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></li></ul>`,5);function e(c,o){return t}var r=n(p,[["render",e],["__file","react-redux.html.vue"]]);export{r as default};