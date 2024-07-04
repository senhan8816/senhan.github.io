<template><h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h1>
<blockquote>
<p>一个 React 应用就是由一个个的组件组成的</p>
</blockquote>
<p>组件是 react 中非常重要的一个特性.利用组件可以将 UI(页面结构) 拆分为独立可复用的代码片段，并对每个片段进行独立构思。</p>
<h2 id="为什么要使用组件" tabindex="-1"><a class="header-anchor" href="#为什么要使用组件" aria-hidden="true">#</a> 为什么要使用组件</h2>
<p>当我们写网页时,会发现网页中出现大量相同的结构, 传统的处理方式是将重复的标签再写一次. 如下图所示每一个商品的展示都是由多个标签组成.页面中会出现大量相同结构的标签.这样的代码维护起来非常困难.</p>
<p><img src="/images/com_des.png" alt=""></p>
<p>如果可以将这个相同结构的标签封装起来,就好像 js 中将相同的代码封装到函数里面,这样的代码维护性就会非常高.</p>
<p>还有, 轮播图是网页中常见效果,几乎每一个项目都要写. 轮播图中不仅有复杂的 html 结构,也有复杂的 js 逻辑. 如果把轮播图的 js 代码和其他功能的 js 代码写在一起,未来修改代码时,极容易<code>动一发牵全身</code>.如果可以将轮播的结构和 js 封装到一个文件中,这样不仅在写的时候方便查找元素,而且未来维护时也可以快速找到对应的文件进行修改,提高了编程效率</p>
<p><img src="/images/swiper.gif" alt=""></p>
<p>而且如果整个页面将所有结构都进行封装,也可以大大提高代码的解耦程度</p>
<h2 id="如何定义一个-react-组件并使用" tabindex="-1"><a class="header-anchor" href="#如何定义一个-react-组件并使用" aria-hidden="true">#</a> 如何定义一个 React 组件并使用</h2>
<blockquote>
<p>React 中定义组件有两种形式</p>
<ol>
<li>函数组件</li>
<li>类组件</li>
</ol>
</blockquote>
<h4 id="_3-2-1-react-函数组件" tabindex="-1"><a class="header-anchor" href="#_3-2-1-react-函数组件" aria-hidden="true">#</a> 3.2.1 React 函数组件</h4>
<blockquote>
<p>定义函数组件的规则:</p>
<ol>
<li>组件名(函数名) 首字母大写</li>
<li>必须写 return, return 后面写 jsx, 如果无需结构渲染,则 return null</li>
</ol>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Item</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">></span>这是一个函数组件<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_3-2-2-react-类组件" tabindex="-1"><a class="header-anchor" href="#_3-2-2-react-类组件" aria-hidden="true">#</a> 3.2.2 React 类组件</h4>
<blockquote>
<p>定义类组件的规则:</p>
<ol>
<li>组件名(类名)首字母大写</li>
<li>必须继承 React.Component 组件</li>
<li>类结构体中必须定义 render 函数</li>
<li>render 函数中必须 return, return 后面可以写 jsx 或 null</li>
</ol>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">class</span> <span class="token class-name">Item</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">></span>这是一个类组件<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="_3-2-3-使用组件" tabindex="-1"><a class="header-anchor" href="#_3-2-3-使用组件" aria-hidden="true">#</a> 3.2.3 使用组件</h4>
<blockquote>
<p>类组件和函数组件使用的方式是一样的</p>
<ol>
<li>组件使用既可以写成双标签也可以写成单标签</li>
<li>使用组件,相当于就是实例化组件</li>
<li>组件使用写在哪里, 组件的结构就渲染在哪里</li>
</ol>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span>

<span class="token keyword">function</span> <span class="token function">Item</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>li<span class="token operator">></span>这是一个函数组件<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token comment">/*使用Item组件*/</span><span class="token punctuation">}</span>
    <span class="token punctuation">{</span><span class="token comment">/* Item组件中的li标签就会渲染到当前位置*/</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>Item<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Item<span class="token operator">></span>
    <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token comment">/*使用Item组件另一种写法*/</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>Item <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>div<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\use_com.png" alt=""></p>
<p><strong>如图所示: Item 组件使用了两次,则渲染出来两个 li 标签, Item 组件写在<hr /> 标签之间, 则组件的结构就渲染在当前位置</strong></p>
<h3 id="_3-3-react-类组件中的状态-state" tabindex="-1"><a class="header-anchor" href="#_3-3-react-类组件中的状态-state" aria-hidden="true">#</a> 3.3 React 类组件中的状态 State</h3>
<blockquote>
<p>在组件中不仅可以书写 html 结构,还可以将结构对应的 js 逻辑写在组件中.写 js 逻辑的过程中,需要一些数据来控制组件内标签是否渲染,或要渲染什么内容. 这些数据,称之为组件的状态(state)</p>
<p>注意:</p>
<pre><code>1. 类组件可以定义组件的状态. 函数组件没有这个功能. 因为这个功能是类组件从React.Component继承下来的
1. 状态是每一个组件实例的私有数据
</code></pre>
</blockquote>
<p>例如: 后台管理项目中,经常需要实现某一条数据的编辑功能</p>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\edit1.png" alt=""></p>
<p>用户点击编辑按钮之后:</p>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\edit2.png" alt=""></p>
<p>用户点击编辑按钮, 将原本的<code>&lt;input type=&quot;checkbox&quot;&gt;</code>和<code>&lt;span&gt;学习javascript&lt;/span&gt;</code>隐藏,让<code>&lt;input type=&quot;text&quot;&gt;</code>展示, 并将按钮的文本从编辑改为取消. 要完成这个功能,就需要使用组件中的状态</p>
<h4 id="_3-3-1-react-组件状态的定义、获取、赋值" tabindex="-1"><a class="header-anchor" href="#_3-3-1-react-组件状态的定义、获取、赋值" aria-hidden="true">#</a> 3.3.1 React 组件状态的定义、获取、赋值</h4>
<blockquote>
<ol>
<li>
<p>定义状态: 在类的 constructor 中定义状态 组件实例.state = {属性: 值}</p>
</li>
<li>
<p>获取状态: 组件实例.state.属性</p>
</li>
<li>
<p>给状态重新赋值: 组件实例.setState({属性: 目标值})</p>
</li>
</ol>
<p>setState 有两个作用:</p>
<ol>
<li>修改当前组件状态</li>
<li>让当前组件更新(render 函数会被再次调用)</li>
</ol>
<p>注意:不要直接修改 state,比如: this.state.属性 = 值 .这样是不会更新页面的</p>
</blockquote>
<p>以上图所示的编辑功能为例:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 注意: 此案例中只演示了如何通过状态控制指定标签的展示和隐藏, 并没有完成编辑的所有功能,也不包含相关样式</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span> <span class="token comment">// React.Component组件也可以直接从React包中导入</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Item</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义状态. 一个组件中可能需要多条数据,所以state的值是一个对象</span>
    <span class="token comment">// constructor中this指向当前组件的实例. 由此可见,状态是存储在组件实例上的私有数据, 修改当前组件实例的状态,并不会影响同类型组件其他实例的状态</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isEdit</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// isEdit 用来控制文本框和label的展示和隐藏</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在render函数中this指向当前组件的实例, 所以可以通过this拿到当前组件实例</span>
    <span class="token comment">// 获取状态</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> isEdit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token comment">// 在下面的代码中,利用isEdit实现条件渲染,</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token comment">// isEdit的初始值是false, 所以渲染的是label标签,隐藏文本框</span>
      <span class="token operator">&lt;</span>li<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token operator">!</span>isEdit <span class="token operator">?</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"checkbox"</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span>学习javascript<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>

        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 按钮点击之后,将isEidt的值由初始值false改为true. 并导致render函数重新调用.render函数重新调用之后,isEdit导致已经改为true,所以label隐藏,文本框展示</span>
            <span class="token comment">// 这里事件处理函数是箭头函数,箭头函数没有this,所以这里的this使用的是render函数中的this</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">isEdit</span><span class="token operator">:</span> <span class="token operator">!</span>isEdit <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token comment">/* 通过判断isEdit的值,控制按钮文本 */</span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span><span class="token operator">!</span>isEdit <span class="token operator">?</span> <span class="token string">'编辑'</span> <span class="token operator">:</span> <span class="token string">'取消'</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>**相信现在会有人想能不能通过定义一个全局变量作为标记,来控制组件内的结构展示. 答案否定的. 因为使用状态的核心意义在于,修改状态时使用 setState, 而 setState 会让组件的 render 函数重新调用,才能让组件结构重新渲染. 使用全局变量,修改变量之后,并不能让组件结构重新渲染 **</p>
<h4 id="_3-3-2-setstate-的注意点" tabindex="-1"><a class="header-anchor" href="#_3-3-2-setstate-的注意点" aria-hidden="true">#</a> 3.3.2 setState 的注意点</h4>
<ul>
<li>
<p>setState 更新是异步的.</p>
<blockquote>
<ul>
<li><code>setState()</code> enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state (<code>setState()</code> 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件)</li>
</ul>
<p>这句话是从 React 官网中摘抄下来的. setState 对数据的更改是放入队列中等待执行的. 所以 setState 之后,立刻获取数据一定是之前的数据</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
        		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 结果为0</span>
		  <span class="token punctuation">}</span><span class="token operator">></span>
         按钮
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></li>
<li>
<p>setState 更新会合并</p>
<blockquote>
<p><code>setState()</code> does not always immediately update the component. It may batch or defer the update until later(<code>setState()</code> 并不总是立即更新组件。它会批量推迟更新)</p>
<p>这句话也是从 React 官网摘抄下来的,很显然,如果 setState 调用之后,立刻渲染.效率一定是低下的.因为可能会出现 setState 连续调用的情况</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'halo'</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
        		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">2</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
        		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">3</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
        		<span class="token comment">// 上面的三次连续调用,会合并成一次. 合并之后的结果,类似于下面的代码</span>
        		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">3</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'halo'</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>

		  <span class="token punctuation">}</span><span class="token operator">></span>
         按钮
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></li>
<li>
<p>setState 第一个参数,可以写成回调函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//如果当前setState是第一个调用的,则回调立刻执行. 如果之前调用过setState,这次setState的回调等待之前数据修改完毕之后执行</span>
<span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//state是最新的state数据</span>
  <span class="token comment">//props是组件外传进来的数据</span>
  <span class="token keyword">return</span> 目标值
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>setState 第二个参数也是回调函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// setState的第二个参数是一个回调函数,是一个可选参数. 它将在 setState 完成合并并重新渲染组件后执行</span>
<span class="token function">setState</span><span class="token punctuation">(</span>第一个参数<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
<h4 id="_3-3-3-react-组件中的-this-指向" tabindex="-1"><a class="header-anchor" href="#_3-3-3-react-组件中的-this-指向" aria-hidden="true">#</a> 3.3.3 React 组件中的 this 指向</h4>
<blockquote>
<p>函数组件中没有 this,所以这里主要讨论类组件中的 this. 在类组件中 constructor 和 render 的 this 一定指向组件实例,这是确定的. 所以下面讨论的 this,主要是组件中事件处理函数的 this 问题</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> isEdit<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state

    <span class="token keyword">return</span> <span class="token punctuation">(</span>

      <span class="token operator">&lt;</span>li<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token operator">!</span>isEdit <span class="token operator">?</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"checkbox"</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span <span class="token operator">></span>学习javascript<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>

        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">isEdit</span><span class="token operator">:</span> <span class="token operator">!</span>isEdit<span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token comment">/* 通过判断isEdit的值,控制按钮文本 */</span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span><span class="token operator">!</span>isEdit <span class="token operator">?</span> <span class="token string">'编辑'</span> <span class="token operator">:</span> <span class="token string">'取消'</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>通过上面的代码,我们可以看到,render 函数中本来就有大量的 JSX 结构, 一般事件处理函数中也可能出现大量复杂的代码,为了提高代码的可读性. 一般我们并不会在 JSX 中直接定义事件处理函数. 更好的处理方式是把事件处理函数定义在 JSX 结构外面.</p>
<p>实际开发中,大部分开发者中会选择,将事件处理函数通过类的语法定义在类的原型上.如下面代码所示:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 按照es6类的语法,把函数写在这里,就是把函数定义在了当前类的原型上</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handle<span class="token punctuation">}</span><span class="token operator">></span>
         按钮
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>把事件处理函数定义在类的原型上,无疑是非常好的选择,因为当前类的所有实例,都可以访问这个函数. 而且这个函数只在原型上创建了一次,性能也更好.但是这样写也有问题. 就是无法再通过 this 访问到当前组件实例了</p>
<p>接下来,主要讨论一下,如何让 handle 函数中的 this 指向当前组件实例</p>
<ul>
<li>
<p>方法一(箭头函数法):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 按照es6类的语法,把函数写在这里,就是把函数定义在了当前类的原型上</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>button
        <span class="token punctuation">{</span><span class="token comment">/* 注意: 此时的handle其实不是事件处理函数了, 而外层的箭头函数才是事件处理函数. 由于箭头函数没有this,所以这里的this是render的this. render中的this一定指向当前组件实例. 当用户点击按钮,箭头函数作为事件处理函数执行, 里面的代码this.handle()就会执行. 此时handle函数是被对象调用的.所以handle中的this就指向调用的对象,而调用的对象,不就是组件实例嘛 */</span><span class="token punctuation">}</span>
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
         按钮
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li>
<li>
<p>方式二(使用 bind): 这种方式也是 React 官网示例中的处理方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//首先constructor中的this一定是当前组件实例.这行代码是利用原型上的handle函数,克隆了一个新的函数,这个新函数中的this固定指向了当前组件实例.  然后又将这个新的函数,赋值给当前组件实例的handle属性. 所以此时组件实例有一个handle属性,指向新的函数(新函数中的this又指向实例). 原型上有一个handle函数.</span>

      <span class="token comment">// 由于类组件在加载时,一定先执行constructor,后执行render.所以在render函数中绑定click事件的handle是实例的handle. 而实例handle中的this的指向已经被绑定指向实例.</span>
      <span class="token comment">// 但是这种处理方式逻辑比较复杂,并且实例和原型都有handle,性能也不是很好,所以不建议使用</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>handle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 按照es6类的语法,把函数写在这里,就是把函数定义在了当前类的原型上</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handle<span class="token punctuation">}</span><span class="token operator">></span>
         按钮
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li>
<li>
<p>方式三: 利用 es7 中实验性语法,直接添加给实例添加 handle</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">handle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//这是es7中的实验性语法,不过在create-create-app创建的本地开发环境中可以直接使用</span>
  <span class="token comment">//这种写法是将handle直接添加到了组件的实例上面.可以理解为上面构造器中代码的简写形式</span>
  <span class="token comment">//所以这个handle里面的this,相当于使用的是construtor的this,当然可以指向组件实例.</span>
  <span class="token function-variable function">handle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 而且,我们已经定义状态也可以使用简写:</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">isEdit</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span> <span class="token comment">// 这就相当于在constructor中写this.state = {isEdit: false}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handle<span class="token punctuation">}</span><span class="token operator">></span>
         按钮
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><strong>总结: 如果事件处理函数不需要访问组件实例,则应该添加到原型上. 如果需要访问组件实例,推荐使用 es7 实验性语法</strong></p>
</li>
</ul>
<h4 id="_3-3-4-react-组件中表单处理" tabindex="-1"><a class="header-anchor" href="#_3-3-4-react-组件中表单处理" aria-hidden="true">#</a> 3.3.4 React 组件中表单处理</h4>
<blockquote>
<p>开发时一定会写注册和登录组件,这两个组件中有大量的表单元素. 所谓处理表单其实就是想办法拿到这些表单元素的值. React 中处理表单元素有两种方式:</p>
<ol>
<li>受控组件: 表单元素通常自己维护 state，并根据用户输入进行更新.被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”</li>
<li>非受控组件: 直接操作真实 DOM</li>
</ol>
</blockquote>
<h5 id="_3-3-4-1-受控组件" tabindex="-1"><a class="header-anchor" href="#_3-3-4-1-受控组件" aria-hidden="true">#</a> 3.3.4.1 受控组件</h5>
<ul>
<li>先以一个简单的文本框为例,学习受控组件方式</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Form</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">//将用户在文本框中输入的内容,存储到当前组件状态中</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// change事件处理函数. 原生中给文本框注册的change事件,在文本框失去焦点时触发. 但是react中change事件,只要输入变化就会触发change事件</span>
  <span class="token function-variable function">handle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 每一次用户输入,都会将用户输入的值,通过setState存储到state中</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>form<span class="token operator">></span>
        <span class="token literal-property property">用户名</span><span class="token operator">:</span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"text"</span>
          <span class="token punctuation">{</span><span class="token comment">/*
            文本框 value属性被组件state控制,此时用户在输入框中输入的内容,无法渲染到页面中的文本框里面. 				因为文本框的value的值被状态控制, 所以一定要定义change事件配合.在change事件处理函数中,将用户输			 入的内容赋值给state.state的值发生变化,文本框value的值也跟着变化,才会将用户输入渲染到文本框中
          */</span><span class="token punctuation">}</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handle<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul>
<li>再来看下,其他的表单元素如何处理</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isAgree</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'bj'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span>
        e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'checked'</span> <span class="token operator">?</span> e <span class="token operator">></span> target<span class="token punctuation">.</span>checked <span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value

      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> isAgree<span class="token punctuation">,</span> city <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>form<span class="token operator">></span>
        <span class="token literal-property property">用户名</span><span class="token operator">:</span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"text"</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token literal-property property">性别</span><span class="token operator">:</span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"text"</span>
          name<span class="token operator">=</span><span class="token string">"sex"</span>
          value<span class="token operator">=</span><span class="token string">"male"</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">'sex'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span>
        男
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"text"</span>
          name<span class="token operator">=</span><span class="token string">"sex"</span>
          value<span class="token operator">=</span><span class="token string">"female"</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">'sex'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span> 女 <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token literal-property property">选择地区</span><span class="token operator">:</span>
        <span class="token operator">&lt;</span>select value<span class="token operator">=</span><span class="token punctuation">{</span>city<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">'city'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"bj"</span><span class="token operator">></span>北京<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
          <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"sz"</span><span class="token operator">></span>深圳<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
          <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"sh"</span><span class="token operator">></span>上海<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token literal-property property">同意协议</span><span class="token operator">:</span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"checkbox"</span>
          checked<span class="token operator">=</span><span class="token punctuation">{</span>isAgree<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">'isAgree'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><h5 id="_3-3-4-2-非受控组件" tabindex="-1"><a class="header-anchor" href="#_3-3-4-2-非受控组件" aria-hidden="true">#</a> 3.3.4.2 非受控组件</h5>
<blockquote>
<p>非受控组件方式, 就是直接拿到真实 DOM.从而获取对应的值</p>
</blockquote>
<ul>
<li>
<p>事件处理函数中 e.target 可以获取到事件目标的真实 DOM</p>
</li>
<li>
<p>在组件渲染成功之后,通过 DOM 原生获取方式拿到真实 DOM</p>
</li>
<li>
<p>React 中提供的 ref 技术,拿到真实 DOM</p>
<ul>
<li>
<p>方式一</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token comment">// ref使用的第一种写法:</span>
<span class="token comment">// 1. 创建ref对象</span>
<span class="token keyword">const</span> refXXX <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2. 绑定要获取的真实dom所对应的JSX标签和ref对象</span>
<span class="token comment">// 3. 直接通过ref对象.current获取到对应的真实dom</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 2.绑定 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>refXXX<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>refXXX<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token comment">//3. input的真实dom</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          按钮
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></li>
<li>
<p>方式二</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ref使用的第二种写法:</span>
<span class="token comment">// 1. 直接给需要获取真实dom所对应的JSX标签添加ref属性</span>
<span class="token comment">// 2. ref属性的值是一个函数</span>
<span class="token comment">// 3. 当真实dom创建好的时候,函数会调用,会将真实dom传递给函数的形参</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"text"</span>
          ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>yyy <span class="token operator">=</span> node <span class="token comment">// 将真实dom存储到组件实例的yyy属性,.方便后续操作</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>yyy<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          按钮
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></li>
</ul>
</li>
</ul>
<h3 id="_3-4-react-组件的生命周期" tabindex="-1"><a class="header-anchor" href="#_3-4-react-组件的生命周期" aria-hidden="true">#</a> 3.4 React 组件的生命周期</h3>
<blockquote>
<p>什么是组件的生命周期</p>
<p>​ 是以拟人化的手法,描述了一个组件从使用到不使用的过程</p>
<p>为什么要学习组件的生命周期</p>
<p>​ 在实际开发中,我们需要在组件运行到某个指定阶段的时候执行一段代码. 比如: 当组件渲染到页面上的时候,需要设置一个定时器,在组件不被使用的时候,需要清除这个定时器. 所以我们就必须清楚,组件什么时候渲染完毕了,组件什么时候不被使用了</p>
<p>注意:</p>
<pre><code>1. 函数组件没有生命周期钩子函数
1. 类组件中所有的生命周期钩子函数中的this都指向当前组件实例
</code></pre>
</blockquote>
<h4 id="_3-4-1-react-类组件中常用的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_3-4-1-react-类组件中常用的生命周期钩子" aria-hidden="true">#</a> 3.4.1 React 类组件中常用的生命周期钩子</h4>
<blockquote>
<p>在类组件的整个运行过程中,不同的阶段会有指定的回调函数被调用. 这些回调函数,被称为生命周期钩子函数. 学习组件的生命周期,其实主要就是学习有哪些生命周期钩子函数,这些生命周期钩子函数分别在什么阶段被调用</p>
</blockquote>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\lifecycle.png" alt=""></p>
<p>整个组件运行过程分为三个阶段</p>
<ul>
<li>
<p>挂载阶段(只执行一次)</p>
<blockquote>
<p>&lt;组件名 /&gt;或 &lt;组件名&gt;&lt;/组件名&gt; 当使用组件时,组件进入挂载阶段</p>
</blockquote>
<ul>
<li>constructor
<ul>
<li>主要用于定义状态</li>
</ul>
</li>
<li>render</li>
<li>componentDidMount 表示组件第一次渲染完成
<ul>
<li>操作真实 DOM,发送异步请求</li>
</ul>
</li>
</ul>
</li>
<li>
<p>更新阶段(执行多次)</p>
<blockquote>
<p>父组件更新,或执行了 setState,forceUpdate 会让组件进入更新阶段</p>
<p>forceUpdate 是一个函数,可以让组件强制更新.</p>
<p>组件实例.forceUpdate()即可</p>
</blockquote>
<ul>
<li>render
<ul>
<li>注意: 不要再 render 里面调用 setState,会造成死循环</li>
</ul>
</li>
<li>componentDidUpdate 表示组件重新渲染完成</li>
</ul>
</li>
<li>
<p>卸载阶段(执行一次)</p>
<blockquote>
<p>{ flag &amp;&amp; &lt;组件名 /&gt; } 当 flag 为 true 时,组件被使用,组件就挂载了,当 flag 为 false, 组件不被使用,组件就卸载了</p>
</blockquote>
<ul>
<li>componentWillUnmount 表示组件即将卸载(不使用了)</li>
</ul>
</li>
</ul>
<h4 id="_3-4-2-react-类组件中其他不常用生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_3-4-2-react-类组件中其他不常用生命周期钩子" aria-hidden="true">#</a> 3.4.2 React 类组件中其他不常用生命周期钩子</h4>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\less_lifecycle.png" alt=""></p>
<ul>
<li>
<p>getDerivedStateFromProps(外界传入组件的数据, 组件内 state 的数据)</p>
<blockquote>
<p>这个生命周期钩子,在组件的挂载阶段和更新阶段都执行.</p>
<p>如果当前组件的 state 由外界传入到组件的数据决定时使用</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Count</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 这个钩子是当前类的静态成员,所以要加static</span>
  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromProps</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// props 是组件外部传递进来的数据</span>
    <span class="token comment">// state 是当前组件的state的数据</span>
    <span class="token comment">// return的作用就是修改state的值</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">xxx</span><span class="token operator">:</span> props<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>xxx<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></li>
<li>
<p>getSnapshotBeforeUpdate(上一次外界传入的数据, 上一次 state 的数据)</p>
<blockquote>
<p>这个钩子是在更新阶段执行, 是在 render 之后,componentDIdUpdate 之前.正好处于新旧真实 DOM 交替之间.</p>
</blockquote>
<ul>
<li>
<p>应用场景: 当聊天的内容高度超过了 ul 的高度,后续的聊天内容看不到了(9 之后的聊天内容看不到了)</p>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\snapShot_before.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token string">'./SnapShotDemo.css'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Count</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timeid <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timeid<span class="token punctuation">)</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'我和别人的的聊天内容: 哈哈'</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">messages</span><span class="token operator">:</span> arr<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> messages <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token string">"box"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rootNode <span class="token operator">=</span> node<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></li>
<li>
<p>使用 getSnapshotBeforeUpdate 解决上面的问题</p>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\snapShot_after.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token string">'./SnapShotDemo.css'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Count</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timeid <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timeid<span class="token punctuation">)</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'我和别人的聊天内容: 哈哈'</span> <span class="token operator">+</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">messages</span><span class="token operator">:</span> arr<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//使用getSnapshotBeforeUpdate需要componentDidUpdate的配合</span>
  <span class="token function">getSnapshotBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// return的结果,传递给了componentDidUpdate的第三个形参</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rootNode<span class="token punctuation">.</span>scrollHeight <span class="token comment">// 这里返回的是ul中添加新数据之前的内容高度</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token parameter">preProps<span class="token punctuation">,</span> preState<span class="token punctuation">,</span> snapshot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// preProps 是上一次外面传入的数据(当前案例未使用)</span>
    <span class="token comment">// preState 是上一次state的值(当前案例未使用)</span>
    <span class="token comment">// snapShot 是getSnapshotBeforeUpdate中的返回值, 也就是ul更新前的内容高度</span>
    <span class="token comment">// currentHeight 是ul更新后的内容高度</span>
    <span class="token keyword">const</span> currentHeight <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rootNode<span class="token punctuation">.</span>scrollHeight
    <span class="token comment">// currentTop 是ul当前顶部滚动出去的距离</span>
    <span class="token keyword">const</span> currentTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rootNode<span class="token punctuation">.</span>scrollTop
    <span class="token comment">// (currentHeight - snapshot) 得到的是ul内容更新前后的高度差</span>
    <span class="token comment">//  currentTop + (currentHeight - snapshot) 计算出来的是ul更新之后,顶部应该滚动出去的距离</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rootNode<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> currentTop <span class="token operator">+</span> <span class="token punctuation">(</span>currentHeight <span class="token operator">-</span> snapshot<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> messages <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token string">"box"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rootNode <span class="token operator">=</span> node<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div></li>
</ul>
</li>
<li>
<p>shouldComponentUpdate(新的 props,新的 state)</p>
<blockquote>
<p>shouldComponentUpdate 在更新阶段执行, 可以控制 render 函数是否调用.</p>
<p>也就是说 shouldComponentUpdate 可以控制组件是否更新</p>
<p>返回 true 则更新组件, 返回 false 则不更新组件</p>
<p>注意:</p>
<pre><code>1. 在其他生命周期钩子函数中this.state和this.props都是最新的数据,但是在shouldComponentUpdate中this.state和this.props是上一次的数据,通过形参接收的是新的数据
1. forceUpdate触发的更新,不会执行shouldComponentUpdate
</code></pre>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello scu'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断nextState(新的)数据和this.state(旧的数据)如果相同则返回false,不更新组件. 如果不同则返回true,更新组件</span>
    <span class="token keyword">return</span> nextState<span class="token punctuation">.</span>msg <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>msg
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'demo更新了'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        Demo
        <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span> <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>msg<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span> <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          demo<span class="token operator">-</span>按钮
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></li>
</ul>
<h3 id="_3-5-react-组件通讯" tabindex="-1"><a class="header-anchor" href="#_3-5-react-组件通讯" aria-hidden="true">#</a> 3.5 React 组件通讯</h3>
<blockquote>
<p>实际开发中,组件和组件之间,经常需要互相传递数据. 这就是组件通讯</p>
</blockquote>
<h4 id="_3-5-1-利用-props-实现组件通讯" tabindex="-1"><a class="header-anchor" href="#_3-5-1-利用-props-实现组件通讯" aria-hidden="true">#</a> 3.5.1 利用 props 实现组件通讯</h4>
<blockquote>
<p>这种传递数据的方式,主要适用于父组件给子组件传递数据</p>
</blockquote>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\props传值.png" alt=""></p>
<ul>
<li>传数据:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//在App组件的JSX结构中使用Far组件. 所以App是父组件, Far是子组件</span>
<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello props'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 利用props方式给Far组件传递数据, 属性名={值}就是传递数据的方法.属性名自定义</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>Far xxx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>msg<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>
<p>接收数据</p>
<ul>
<li>
<p>函数组件接收</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如果Far组件是函数组件,则通过形参props接收数据.</span>
<span class="token keyword">function</span> <span class="token function">Far</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">//props是对象 {xxx: 'hello props'} 对象中的属性,就是传递数据时,组件上的属性</span>
  <span class="token keyword">return</span> <span class="token constant">JSX</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>
<p>类组件接收</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如果Far是类组件,则通过组件实例.props接收数据</span>
<span class="token keyword">class</span> <span class="token class-name">Far</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">//props是对象 {xxx: 'hello props'} 对象中的属性,就是传递数据时,组件上的属性</span>
    <span class="token keyword">return</span> <span class="token constant">JSX</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>
<p>props 的注意点:</p>
<ol>
<li>
<p>props 传递数据是自上而下的(父--&gt;子), 而且必须逐级传递.</p>
<p>如果有三个组件 App --&gt;Far--&gt;Son. 要将 App 的数据,传递给 Son. 只能先将数据从 App 传递给 Far,再从 Far 组件中传递数据给 Son</p>
</li>
<li>
<p>props 可以传递任何类型的数据</p>
<p>除了传递一些普通的数据类型以外, 还可以传递虚拟 dom,组件类型和组件实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>demo组件<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
<span class="token comment">// node属性传递的是虚拟dom, elementType传递的是Demo组件, element传递的是Demo组件实例</span>
<span class="token punctuation">;</span><span class="token operator">&lt;</span>Test
  node<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>h1<span class="token operator">></span>虚拟dom<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">}</span>
  elementType<span class="token operator">=</span><span class="token punctuation">{</span>Demo<span class="token punctuation">}</span>
  element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Demo <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">></span>

<span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token comment">// 渲染虚拟DOM</span>
      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>node<span class="token punctuation">}</span>
      <span class="token comment">// 渲染组件实例</span>
      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>element<span class="token punctuation">}</span>
      <span class="token comment">// 使用Demo组件</span>
      <span class="token operator">&lt;</span>props<span class="token punctuation">.</span>elementType <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li>
<li>
<p>props 数据是只读的,不要修改.并且 react 内部会检查我们是否修改了 props 数据,如果修改数据,会在控制台警告.react 内部检查时浅层对比.如果 props 中的数据是复杂数据类型,并且修改的是复杂数据类型中的值,则 react 检查失效</p>
</li>
<li>
<p>在类组件的 constructor 中,无法直接通过 this.props 获取到数据.如需获取,必须在 constructor 的形参接收 props.并传递给 super()</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token comment">// 这样拿不到数据</span>
<span class="token punctuation">}</span>

<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token comment">// 这样就可以拿到数据了</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
</ol>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>props 校验</p>
<blockquote>
<p>对传入组件的 props 数据进行类型检查</p>
</blockquote>
<p>实现:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在本地开发环境中,无需额外下载,直接引入就可以</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">'prop-types'</span>

<span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
<span class="token comment">// 组件需要配置props校验,就给组件添加静态属性propTypes</span>
Test<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 校验规则详询React官网</span>
  <span class="token literal-property property">属性</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>数据类型<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
<li>
<p>props 默认值</p>
<blockquote>
<p>给传入组件的 props 数据配置默认值</p>
</blockquote>
<p>实现:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
<span class="token comment">// 组件需要配置props默认值,就给组件添加静态属性defaultProps</span>
<span class="token comment">// 当没有传递对应的属性时,默认值生效</span>
Test<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 校验规则详询React官网</span>
  <span class="token literal-property property">属性</span><span class="token operator">:</span> 默认值<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
</ul>
<h4 id="_3-5-2-利用-context-实现组件通讯" tabindex="-1"><a class="header-anchor" href="#_3-5-2-利用-context-实现组件通讯" aria-hidden="true">#</a> 3.5.2 利用 context 实现组件通讯</h4>
<blockquote>
<p>这种方式主要适用于父级组件给子级组件传递数据.也是自上而下的,但是跟 props 的区别: 可以跨级传递数据</p>
</blockquote>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\context传值.png" alt=""></p>
<ul>
<li>
<p>传数据:</p>
<ol>
<li>
<p>创建 context 对象</p>
<p>const context = React.createContext('默认值')</p>
<p>注意: 默认值是在不写 Provider 的时候生效</p>
</li>
<li>
<p>从 context 中解构 Provider 组件.</p>
<p>const {Provider} = context</p>
</li>
<li>
<p>在要传递数据的组件中使用 Provider 包裹整个组件的 JSX. 并添加 value 属性,值就是要传递的数据</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>&lt;Provider value={数据}&gt;
      &lt;div&gt;
        &lt;h1&gt;App&lt;/h1&gt;
        &lt;Far&gt;&lt;/Far&gt;
      &lt;/div&gt;
 &lt;/Provider&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ol>
</li>
<li>
<p>接收数据</p>
<ul>
<li>
<p>方式一</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 原本的Son组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Son<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 利用context接收App传递的数据的Son组件</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>Consumer<span class="token punctuation">}</span> <span class="token operator">=</span> context <span class="token comment">//注意:context要求和传递数据的context是同一个对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Consumer<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Son<span class="token punctuation">,</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Consumer<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li>
<li>
<p>方式二</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 给当前组件添加一个静态属性 contextType, 值就是context对象 注意:context要求和传递数据的context是同一个对象</span>
  <span class="token keyword">static</span> contextType <span class="token operator">=</span> context
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//   this.context属性的值就是利用context技术传递过来的数据</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Son1<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
</li>
</ul>
<h4 id="_3-5-3-利用第三方库实现组件通讯" tabindex="-1"><a class="header-anchor" href="#_3-5-3-利用第三方库实现组件通讯" aria-hidden="true">#</a> 3.5.3 利用第三方库实现组件通讯</h4>
<blockquote>
<p>pubsub-js 是一个独立的 js 库,而 props 和 context 是 react 技术.这一点很不一样</p>
<p>props 和 context 再传递数据时,要求组件之间有嵌套关系.但是 pubsub-js 不需要</p>
<p>pubsub-js 是基于发布订阅模式的 js 库, 传递数据的组件就是发布者, 接收数据的组件就是订阅者.</p>
<p>一个组件既可以是发布者,也可以是订阅者.</p>
<p>一个发布者,可以对应多个订阅者</p>
</blockquote>
<p><img src="C:\Users\luodi\Desktop\React出版\React第三章-组件化开发\assets\pubsub传值.png" alt=""></p>
<p><strong>实现:</strong></p>
<ul>
<li>
<p>安装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">在项目根目录下</span><span class="token operator">:</span> npm install pubsub<span class="token operator">-</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>哪里需要就在那里导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> PubSub <span class="token keyword">from</span> <span class="token string">'pubsub-js'</span> <span class="token comment">// 导入的PubSub是一个对象.提供了发布/订阅的功能</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>pubsubjs 提供的方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// PubSub.subscribe(话题, 回调) 用于接收数据</span>
<span class="token comment">// 第一个参数: 话题. 传递数据时的标记</span>
<span class="token comment">// 第二个参数: 用于接收数据的函数</span>
<span class="token comment">// 返回值 当前订阅的唯一标识符. 用于清除当前订阅. 一般都会在组件挂载时订阅</span>
<span class="token keyword">var</span> subId <span class="token operator">=</span> PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// msg 话题</span>
    <span class="token comment">// data 传递的数据</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> msg<span class="token punctuation">,</span> data <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 以异步的形式的发布一个话题</span>
<span class="token comment">// 'car'是话题, 所有订阅了'car'这个话题对应的回调函数都会被调用</span>
<span class="token comment">// 'hello world!' 具体要传递的数据</span>
PubSub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">,</span> <span class="token string">'hello world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 发布的同步使用方法</span>
<span class="token comment">// 慎用!!!! 因为会阻塞发布者的代码执行</span>
PubSub<span class="token punctuation">.</span><span class="token function">publishSync</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">,</span> <span class="token string">'hello world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取消指定的订阅 一般在组件卸载的时候,取消指定订阅</span>
PubSub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span>subId<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取消某个话题的所有订阅</span>
PubSub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span>话题<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取消所有订阅</span>
PubSub<span class="token punctuation">.</span><span class="token function">clearAllSubscriptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//为什么要取消订阅:</span>
	因为pubsub<span class="token operator">-</span>js内部<span class="token punctuation">,</span>管理了一个对象<span class="token punctuation">.</span>每一次订阅的就是往对象中添加属性<span class="token punctuation">,</span>值是数组<span class="token punctuation">,</span>数组中存放了当前话题所对应的所有订阅的回调函数
	<span class="token punctuation">{</span>
        <span class="token literal-property property">car</span><span class="token operator">:</span> <span class="token punctuation">[</span>callback1<span class="token punctuation">,</span> callback2<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
 如果组件卸载了<span class="token punctuation">,</span>当时组件的订阅还在<span class="token punctuation">,</span>这就浪费了内存<span class="token punctuation">.</span> 所以组件卸载的时候要清除订阅<span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></li>
</ul>
</template>
