import{_ as n,d as s}from"./app.a98f98c2.js";const a={},t=s(`<h1 id="\u8DEF\u7531\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u4F20\u53C2" aria-hidden="true">#</a> \u8DEF\u7531\u4F20\u53C2</h1><blockquote><p>\u8DEF\u7531\u4F20\u53C2\u662F\u503C: \u9875\u9762\u5207\u6362\u7684\u65F6\u5019,\u7ED9\u76EE\u6807\u9875\u9762\u4F20\u9012\u6570\u636E</p></blockquote><p>\u8DEF\u7531\u4F20\u53C2\u6709\u4E09\u79CD\u65B9\u5F0F:</p><ol><li><p>\u8DEF\u7531\u53C2\u6570(\u6570\u636E\u5728\u8DEF\u5F84\u4E2D,\u53EA\u80FD\u4F20\u9012\u7B80\u5355\u6570\u636E)</p></li><li><p>state(\u53EF\u4EE5\u4F20\u9012\u4EFB\u4F55\u6570\u636E)</p></li><li><p>\u67E5\u8BE2\u5B57\u7B26\u4E32(\u4E0D\u63A8\u8350)</p></li></ol><h2 id="\u8DEF\u7531\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u53C2\u6570" aria-hidden="true">#</a> \u8DEF\u7531\u53C2\u6570</h2><ol><li><p>\u5B9A\u4E49\u8DEF\u7531\u53C2\u6570</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Routes</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/*:id \u4E3A\u8DEF\u7531\u53C2\u6570(\u5FC5\u586B), \u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A*/</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>about/:id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Route</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

      </span><span class="token punctuation">{</span><span class="token comment">/*:id \u4E3A\u53EF\u9009\u8DEF\u7531\u53C2\u6570 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>about/:id?<span class="token punctuation">&quot;</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Route</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/*:id \u4E3A\u53EF\u9009\u8DEF\u7531\u53C2\u6570 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>:id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Route</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Routes</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li><li><p>\u4F20\u9012\u8DEF\u7531\u53C2\u6570</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u5207\u6362\u9875\u9762\u7684\u65F6\u5019\u4F20\u9012</span>
<span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;/about/1&#39;</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD9\u4E2A1\u5C31\u662F\u8DEF\u7531\u53C2\u6570</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about/2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about/3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">//2 \u548C 3 \u5C31\u662F\u8DEF\u7531\u53C2\u6570</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>\u63A5\u6536\u8DEF\u7531\u53C2\u6570</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u5728\u76EE\u6807\u8DEF\u7531\u7EC4\u4EF6\u4E2D\u63A5\u6536</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token comment">// params \u662F\u4E00\u4E2A\u5BF9\u8C61,\u91CC\u9762\u53EF\u4EE5\u83B7\u53D6\u5230\u8DEF\u7531\u53C2\u6570\u5177\u4F53\u7684\u503C</span>
<span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token comment">// {id:1}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ol><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h2><ol><li><p>\u4F20\u9012</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/\u76EE\u6807\u8DEF\u5F84<span class="token punctuation">&quot;</span></span> <span class="token attr-name">state</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\u8981\u4F20\u9012\u6570\u636E<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/\u76EE\u6807\u8DEF\u5F84<span class="token punctuation">&quot;</span></span> <span class="token attr-name">state</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\u8981\u4F20\u9012\u6570\u636E<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">&gt;</span></span>
<span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;/\u76EE\u6807\u8DEF\u5F84&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">state</span><span class="token operator">:</span> \u8981\u4F20\u9012\u7684\u6570\u636E
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u63A5\u6536</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLocaiton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
location<span class="token punctuation">.</span>state <span class="token comment">//\u53EF\u4EE5\u83B7\u53D6\u5230\u6570\u636E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol><h2 id="\u67E5\u8BE2\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u67E5\u8BE2\u5B57\u7B26\u4E32</h2><ol><li><p>\u4F20\u9012</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/\u76EE\u6807\u8DEF\u5F84?name=zs&amp;age=18<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/\u76EE\u6807\u8DEF\u5F84?name=zs&amp;age=18<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">&gt;</span></span>
<span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;/\u76EE\u6807\u8DEF\u5F84?name=zs&amp;age=18&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u63A5\u6536</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>query<span class="token punctuation">,</span> setQuery<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// query\u662F\u7C7B\u4F3Cformdata\u5BF9\u8C61,\u83B7\u53D6\u6570\u636E:query.get(&#39;name&#39;)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// zs</span>
<span class="token comment">// setQuery \u53EF\u4EE5\u4FEE\u6539\u5730\u5740\u680F\u67E5\u8BE2\u5B57\u7B26\u4E32 setQuery(&quot;x=1&amp;y=2&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ol>`,10);function p(e,c){return t}var l=n(a,[["render",p],["__file","router-params.html.vue"]]);export{l as default};
