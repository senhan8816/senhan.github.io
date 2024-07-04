<template><h1 id="hoc-和-renderprops" tabindex="-1"><a class="header-anchor" href="#hoc-和-renderprops" aria-hidden="true">#</a> HOC 和 renderprops</h1>
<h2 id="组件中代码复用的问题" tabindex="-1"><a class="header-anchor" href="#组件中代码复用的问题" aria-hidden="true">#</a> 组件中代码复用的问题</h2>
<p>组件化开发之后,整个页面都是由组件组成. 不同的组件结构是有区别的,但是 state 和逻辑可能会出现大量相同的代码,这时,我们就希望将这些冗余代码封装起来.</p>
<p>以下面案例为例: 两个组件(Login 和 Registe)中存在着相同的状态和逻辑</p>
<ul>
<li>
<p>App 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">'./pages/Login'</span>
<span class="token keyword">import</span> Register <span class="token keyword">from</span> <span class="token string">'./pages/Register'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>App<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>Login<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Login<span class="token operator">></span>
        <span class="token operator">&lt;</span>Register<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Register<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li>
<li>
<p>Login 组件</p>
<p>Login 组件中使用受控组件的方式,将表单元素的值存储在 state 里面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Login</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>登录<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>form<span class="token operator">></span>
          <span class="token literal-property property">用户名</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"text"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token literal-property property">密码</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"password"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>password<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"登录"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div></li>
<li>
<p>Register 组件</p>
<blockquote>
<p>Register 组件中同样使用受控组件的方式,将表单元素的值存储在 state 里面</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Register</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repassword</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>注册<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>form<span class="token operator">></span>
          <span class="token literal-property property">用户名</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"text"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token literal-property property">密码</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"password"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>password<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token literal-property property">确认密码</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"password"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>repassword<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'repassword'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"注册"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div></li>
</ul>
<p>这两个组件中存在着一些相同的代码,比如相同的 state,和相同的 change 事件处理函数. 也有不同的逻辑,比如注册按钮的逻辑和登录按钮的中请求的接口是不同的. 我们需要将相同的代码封装起来</p>
<p>这时,你可能会想到,将 Login 和 Register 中相同的 state 和 change 事件处理函数,定义在 App 中,将 state 和 change 事件处理函数以 props 的形式传递 Login 和 Register 组件.</p>
<ul>
<li>
<p>App 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">'./pages/Login'</span>
<span class="token keyword">import</span> Register <span class="token keyword">from</span> <span class="token string">'./pages/Register'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repassword</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> repassword <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>App<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>Login
          username<span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span>
          password<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
          handleChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span>
        <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Login<span class="token operator">></span>
        <span class="token operator">&lt;</span>Register
          username<span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span>
          password<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
          repassword<span class="token operator">=</span><span class="token punctuation">{</span>repassword<span class="token punctuation">}</span>
          handleChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span>
        <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Register<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div></li>
<li>
<p>Login 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Login</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> handleChange <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>登录<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>form<span class="token operator">></span>
          <span class="token literal-property property">用户名</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"text"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token literal-property property">密码</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"password"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"登录"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></li>
<li>
<p>Register 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Register</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> repassword<span class="token punctuation">,</span> handleChange <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>注册<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>form<span class="token operator">></span>
          <span class="token literal-property property">用户名</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"text"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token literal-property property">密码</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"password"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token literal-property property">确认密码</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"password"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span>repassword<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'repassword'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"注册"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></li>
</ul>
<p>这样写完,看起来,我们解决了问题.将 Login 和 Register 中相同的 state 和函数,定义在 App 中只定义了一次. 但是实际使用时却有问题</p>
<p>这样写代码,Login 和 Register 使用的是同一份 state 数据,所以,当我们在 Login 中输入用户名或密码时,Register 的文本框中会出现同样的内容</p>
<p><img src="/images/l&amp;r.png" alt=""></p>
<p>虽然这样的处理方式有问题,但是也给了我们新的灵感. 如果我们定义一个公共组件,在公共组件中定义相同的状态和逻辑, 给每一个需要使用这些状态和逻辑的组件,创建一个对应的公共组件实例. 这样每一个公共组件实例拥有一份独立数据,数据就不会冲突了</p>
<p><img src="/images/common.png" alt=""></p>
<p>HOC 和 renderProps 就是基于这样的原理,指导我们如何书写代码. 需要注意, HOC 和 renderProps 并不是 React 中提供的新的 API.而是基于之前学习的组件化开发技术的编程技巧. 下面我们就依次介绍 HOC 和 renderProps 是如何实现的</p>
<h2 id="高阶组件-hoc" tabindex="-1"><a class="header-anchor" href="#高阶组件-hoc" aria-hidden="true">#</a> 高阶组件(HOC)</h2>
<blockquote>
<p>HOC (High Order Component) 高阶组件</p>
</blockquote>
<ul>
<li>
<p>Common 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token comment">// 先定义一个函数,函数的返回值,才是真正的Common组件. 定义这个函数的目的是为了动态的接收需要数据和逻辑的子组件</span>
<span class="token comment">//WrappedComponent 用来接收Login或Register组件,因为接收的是组件,并且需要在Common中实例化这些组件,所以形参的首字母大写</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">WrappedComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">Common</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在Common组件中定义公共的状态和逻辑</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">repassword</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token parameter">handleChange</span> <span class="token operator">=></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> repassword <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>WrappedComponent
          username<span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span>
          password<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
          repassword<span class="token operator">=</span><span class="token punctuation">{</span>repassword<span class="token punctuation">}</span>
          handleChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span>
        <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>WrappedComponent<span class="token operator">></span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div></li>
<li>
<p>App 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">'./pages/Login'</span>
<span class="token keyword">import</span> Register <span class="token keyword">from</span> <span class="token string">'./pages/Register'</span>
<span class="token keyword">import</span> withCommon <span class="token keyword">from</span> <span class="token string">'./Common'</span>
<span class="token comment">// 一般HOC技术返回的函数名以with开头,小驼峰命名</span>
<span class="token keyword">const</span> WithLogin <span class="token operator">=</span> <span class="token function">withCommon</span><span class="token punctuation">(</span>Login<span class="token punctuation">)</span> <span class="token comment">// WithLogin 其实就是Common组件实例</span>
<span class="token keyword">const</span> WithRegister <span class="token operator">=</span> <span class="token function">withCommon</span><span class="token punctuation">(</span>Register<span class="token punctuation">)</span> <span class="token comment">// WithRegister 也是Common组件实例</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>高阶组件<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>WithLogin<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>WithLogin<span class="token operator">></span>
        <span class="token operator">&lt;</span>WithRegister<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>WithRegister<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li>
<li>
<p>Login 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Login</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> handleChange <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>登录<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>form<span class="token operator">></span>
          <span class="token literal-property property">用户名</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"text"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token literal-property property">密码</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"password"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"登录"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></li>
<li>
<p>Register 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Register</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> repassword<span class="token punctuation">,</span> handleChange <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>注册<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>form<span class="token operator">></span>
          <span class="token literal-property property">用户名</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"text"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token literal-property property">密码</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"password"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token literal-property property">确认密码</span><span class="token operator">:</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"password"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span>repassword<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">'repassword'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"注册"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></li>
</ul>
<h3 id="高阶组件需要注意的问题" tabindex="-1"><a class="header-anchor" href="#高阶组件需要注意的问题" aria-hidden="true">#</a> 高阶组件需要注意的问题</h3>
<ul>
<li>
<p>传递 props 的问题</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>高阶组件<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 需求: 在App中将数据传递给Login组件*/</span><span class="token punctuation">}</span>

        <span class="token punctuation">{</span><span class="token comment">/* WithLogin 其实是Common组件, 所以test数据并没有直接传递给Login组件,而是传递给了Common组件*/</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>WithLogin test<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'测试字符串'</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>WithLogin<span class="token operator">></span>
        <span class="token operator">&lt;</span>WithRegister<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>WithRegister<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>解决办法:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Common.js</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>WrappedComponent
          <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">}</span>
		  <span class="token comment">// 我们无法确定传递过来的是什么数据,所以将传递给Common的props数据,直接继续传递下去就可以了</span>
	      <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span>
          handleChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span>
        <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>WrappedComponent<span class="token operator">></span>
      <span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
<li>
<p>React 调试工具中显示问题</p>
<blockquote>
<p>真正的 state 数据是存储在 Common 组件的实例中的. 所以如果需要查看 Login 或 Register 的 state 数据,要找的应该是 Common 组件. 组件多的情况下,需要先查找 Common 子组件是谁,才知道对应的数据,存储在哪个 Common 组件中. 我们可以通过自定义 react 调试工具中组件的显示名称来解决这个问题</p>
</blockquote>
<p><img src="/images/rdt.png" alt=""></p>
<p><strong>解决方式:</strong></p>
<p>默认情况下, react 调试工具展示的是组件定义时的名称. 而组件的名称是存储在组件的静态属性 name 上面的</p>
<p>可以给组件添加静态属性 displayName. react 调试工具优先显示 displayName 属性的值,没有 displayName 才展示 name 属性的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> defualt <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">WrappedComponent</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">Common</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
      <span class="token keyword">static</span> displayName <span class="token operator">=</span> <span class="token string">'with'</span><span class="token operator">+</span> WrappedComponent<span class="token punctuation">.</span>name
      <span class="token comment">// ... 下面代码忽略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="/images/rdt_d.png" alt=""></p>
</li>
</ul>
<!-- - 高阶组件在使用时,也可以使用 es7 的装饰器语法.这样写更简单.但是要先保证你的当前环境中支持这种语法(可以通过配置 webpack 实现)

  ```js
  import Common from '../Common'
  @Common
  export default class Login extends Component {
    render() {
     	... 忽略代码
    }
  }
  ```

  ```js
  //App组件中
  import React, { Component } from 'react'
  // 这里引入Login和Register其实不是真正的Login和Register组件,是通过装饰器语法得到的Common组件
  import Login from './pages/Login'
  import Register from './pages/Register'

  export default class App extends Component {
    render() {
      return (
        <div>
          <h1>高阶组件</h1>
          <Login></Login>
          <Register></Register>
        </div>
      )
    }
  }
  ``` -->
<p>​</p>
<h2 id="renderprops" tabindex="-1"><a class="header-anchor" href="#renderprops" aria-hidden="true">#</a> renderprops</h2>
<blockquote>
<p>renderprops 的原理和 HOC 一样,只是具体的实现方式不同而已</p>
</blockquote>
<ul>
<li>
<p>Common 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token comment">// 直接定义并导出Conmon组件, Common的子组件通过props.render接收</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Common</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repassword</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this.props.render()的返回值就是Login或Register组件</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li>
<li>
<p>App 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">'./pages/Login'</span>
<span class="token keyword">import</span> Register <span class="token keyword">from</span> <span class="token string">'./pages/Register'</span>
<span class="token keyword">import</span> Common <span class="token keyword">from</span> <span class="token string">'./Common'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>高阶组件<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 
        直接使用Common组件,给Common添加render属性,值为函数,函数的返回值Login组件实例 
        所以在Common中 通过this.props.render可以获取到这里的render指向的函数
        this.props.render()的返回值就是Login组件,让Login和Common形成了子父关系
        再利用调用render时传递的实参,将state和事件处理函数传递到render指向的函数形参
        最后通过props传递给Login组件
        */</span><span class="token punctuation">}</span>

        <span class="token operator">&lt;</span>Common
          render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> handleChange</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">&lt;</span>Login <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">}</span> handleChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Login<span class="token operator">></span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Common<span class="token operator">></span>
        <span class="token operator">&lt;</span>Common
          render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> handleChange</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>Register <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">}</span> handleChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Register<span class="token operator">></span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Common<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>也可以利用 props.children 实现</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token operator">&lt;</span>Common<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> handleChange</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Login <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">}</span> handleChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Login<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Common<span class="token operator">></span>

<span class="token comment">// 对应的在Common组件中</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
</template>
