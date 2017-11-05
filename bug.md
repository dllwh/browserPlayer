1,webkit-playsinline playsinline 可用于防止ios用户视频播放自动全屏(safari是顽疾暂时没办法搞定)，android是不自动全屏的。

2,$('.video').on('ended',function(){}) 用于检测在视频播放完（不管是快进还是自动播完）之后执行某些操作。 

   $('.video').trigger('play')和document.getElementById('video').play()  用于触发播放视频，由于autoplay在手机端为保护用户流量而被禁用的。

   document.getElementById('video').pause() 暂停 

   document.getElementById('demo').volume+=0.1 控制音量

3,audio不支持autoplay：iphone6下safari，三星(微信 第三方浏览器(chrome)) 

   audio支持autoplay：iphone6下微信，三星自带浏览器 

   video不支持autoplay：iphone6下safari，三星(微信 浏览器 第三方浏览器(chrome))

   video支持autoplay：iphone6下微信 