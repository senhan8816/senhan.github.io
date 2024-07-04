<template><h1 id="小程序生命周期" tabindex="-1"><a class="header-anchor" href="#小程序生命周期" aria-hidden="true">#</a> 小程序生命周期</h1>
<h2 id="app-全局生命周期" tabindex="-1"><a class="header-anchor" href="#app-全局生命周期" aria-hidden="true">#</a> app 全局生命周期</h2>
<p>使用场景: 当整个小程序应用运行到某个时机的时候,我们需要做一些事情
例如: 当小程序启动成功之后,我们要获取小程序的一些信息.就可以在小程序启动成功时触发的函数中写代码获取我们想要的信息</p>
<blockquote>
<p>官网链接: <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html" target="_blank" rel="noopener noreferrer">全局注册<ExternalLinkIcon/></a></p>
</blockquote>
<ul>
<li>
<p>onLaunch(Object object)
小程序初始化完成时触发，全局只触发一次。
接收一个存储小程序启动时参数的对象.</p>
</li>
<li>
<p>onShow(Object object)
小程序启动，或从后台进入前台显示时触发。</p>
</li>
<li>
<p>onHide()
小程序从前台进入后台时触发。</p>
</li>
</ul>
<h2 id="page-页面生命周期" tabindex="-1"><a class="header-anchor" href="#page-页面生命周期" aria-hidden="true">#</a> page 页面生命周期</h2>
<p>使用场景: 当某个页面运行到某个时机的时候,我们需要做一些事情
例如: 当某个页面加载完毕之后,我要发请求获取当前页面数据,则可以在对应的页面加载完成触发的函数中执行发送请求的代码</p>
<blockquote>
<p>官网链接:<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page-life-cycle.html" target="_blank" rel="noopener noreferrer">页面生命周期<ExternalLinkIcon/></a></p>
</blockquote>
<ul>
<li>
<p>onLoad(Object query)
页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。</p>
</li>
<li>
<p>onShow()
页面显示/切入前台时触发。</p>
</li>
<li>
<p>onReady()
页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
<strong>注意：对界面内容进行设置的 API 如 wx.setNavigationBarTitle，请在 onReady 之后进行</strong></p>
</li>
<li>
<p>onHide()
页面隐藏/切入后台时触发。 如 wx.navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。</p>
</li>
<li>
<p>onUnload()
页面卸载时触发。如 wx.redirectTo 或 wx.navigateBack 到其他页面时。</p>
</li>
</ul>
</template>
