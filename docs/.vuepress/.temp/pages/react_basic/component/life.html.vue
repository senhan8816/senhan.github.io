<template><h1 id="类组件的生命周期" tabindex="-1"><a class="header-anchor" href="#类组件的生命周期" aria-hidden="true">#</a> 类组件的生命周期</h1>
<ul>
<li>
<p>什么是组件的生命周期?</p>
<p>是以拟人化的手法,描述了一个组件从使用到不使用的过程</p>
</li>
<li>
<p>为什么要学习组件的生命周期?</p>
<p>​ 在实际开发中,我们需要在组件运行到某个指定阶段的时候执行一段代码. 比如: 当组件渲染到页面上的时候,需要设置一个定时器,在组件不被使用的时候,需要清除这个定时器. 所以我们就必须清楚,组件什么时候渲染完毕了,组件什么时候不被使用了</p>
</li>
<li>
<p>注意:</p>
<ol>
<li>函数组件没有生命周期钩子函数</li>
<li>类组件中所有的生命周期钩子函数中的 this 都指向当前组件实例</li>
</ol>
</li>
</ul>
<h2 id="类组件中常用的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#类组件中常用的生命周期钩子" aria-hidden="true">#</a> 类组件中常用的生命周期钩子</h2>
<p><a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" target="_blank" rel="noopener noreferrer">生命周期图谱<ExternalLinkIcon/></a></p>
<blockquote>
<p>在类组件的整个运行过程中,不同的阶段会有指定的回调函数被调用. 这些回调函数,被称为生命周期钩子函数. 学习组件的生命周期,其实主要就是学习有哪些生命周期钩子函数,这些生命周期钩子函数分别在什么阶段被调用</p>
</blockquote>
<p><img src="/images/lifecycle.png" alt=""></p>
<p><strong>整个组件运行过程分为三个阶段</strong></p>
<ul>
<li>
<p>挂载阶段(只执行一次)</p>
<blockquote>
<p>当使用组件时,组件进入挂载阶段</p>
</blockquote>
<ul>
<li>constructor 主要用于定义状态</li>
<li>render 解析 jsx 生成虚拟 dom</li>
<li>componentDidMount 表示组件第一次渲染完成(操作真实 DOM,发送异步请求)</li>
</ul>
</li>
<li>
<p>更新阶段(执行多次)</p>
<blockquote>
<p>父组件更新,或执行了 setState,forceUpdate 会让组件进入更新阶段</p>
</blockquote>
<ul>
<li>render</li>
<li>componentDidUpdate 表示组件重新渲染完成
<strong>注意: 最好不要在更新阶段的钩子函数里面调用 setState,会造成死循环</strong></li>
</ul>
</li>
<li>
<p>卸载阶段(执行一次)</p>
<blockquote>
<p>{ flag &amp;&amp; &lt;组件名 /&gt; } 当 flag 为 true 时,组件被使用,组件就挂载了,当 flag 为 false, 组件不被使用,组件就卸载了</p>
</blockquote>
<ul>
<li>componentWillUnmount 表示组件即将卸载(清除操作)</li>
</ul>
</li>
</ul>
<h2 id="react-类组件中其他不常用生命周期钩子-了解" tabindex="-1"><a class="header-anchor" href="#react-类组件中其他不常用生命周期钩子-了解" aria-hidden="true">#</a> React 类组件中其他不常用生命周期钩子(了解)</h2>
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
<p><img src="/images/snapShot_before.png" alt=""></p>
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
<p><img src="/images/snapShot_after.png" alt=""></p>
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
</blockquote>
<p><strong>注意:</strong></p>
<ol>
<li>在其他生命周期钩子函数中 this.state 和 this.props 都是最新的数据,但是在 shouldComponentUpdate 中 this.state 和 this.props 是上一次的数据,通过形参接收的是新的数据</li>
<li>forceUpdate 触发的更新,不会执行 shouldComponentUpdate</li>
</ol>
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
</template>
