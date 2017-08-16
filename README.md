Html5 Video 实现方案
===========

一、 Html5 Video
--------------

> `HTML5 是近十年来Web标准最具大的飞跃。随着HTML5的发展，Html5 的video标签已经或者即将被大多数浏览器支持，特别是Flash Player的逐渐落幕。随着将Html5 Video 功能应用到实际项目中，可以针对不同的平台、环境，进行个性化处理。现在Html5 Video支持,.mp4后缀(.h264编码格式),和.webm后缀(专用web视频格式),以及.ogg后缀(音频文件)。HTML5 Video可以添加多个source 源来进行兼容性适配，这样当第一个源读出问题时会自动读取下一个源。例如可以同时在source 中添加.webm、.MP4源，这样一个出错时就会自动读取另外一个可用源(因为不用的浏览器支持的格式是不一样的)。但是，在HYbird模式下的Android下，有的机型只能读取第一个source来源(华为、联想这两款手机，网上来源)，所以也就是说在这样这种情况下，要确保第一个source源是正确的。下面是各大浏览器兼容情况，如下图所示：`

> > ![各大浏览器兼容情况](https://github.com/dllwh/browserPlayer/blob/master/images/introduce/clipboard.png?raw=true)

二、Html5 Video应用的平台环境和对应实现方案
-------------

这里可以分为大块
> * ** 普通浏览器环境**

> 		pc和手机,主要是移动端,pc不做特别处理

> * ** Hybird App环境**

> 		Android和iOS
> 		注: Html5 video可以播放本地视频或者网络视频

>## 2.1、 普通浏览器环境

* **用Html5 Video 自带的播放栏控件**

* **用 Video 视频统一处理方法处理后,点击播放按钮手动隐藏图片（放置图片主要是避免视频播放区域的黑屏）,设置视频大小,手动播放视频**

* **移动设备上的浏览器检测到 HTML5 视频时，会自动加上播放按钮，然而在大多数情况下，默认的播放按钮点击之后并不能正常播放视频,所以需要隐藏移动设备自动添加的播放按钮**

> 		video::-webkit-media-controls {
> 			display: none !important;
> 		}
> 		
> 		video::-webkit-media-controls-enclosure {
> 			display: none !important;
> 		}
注:
	播放效果则由各大浏览器自行实现

> 			手机端浏览器实现的不同效果,比如: 
> 			QQ浏览器(包括QQ客户端内置的浏览器):播放时会自动进入全屏
> 			华为自带浏览器: 正常小窗口播放
> 			为避免播放全屏，可以添加:x-webkit-airplay=true webkit-playsinline=true x5-playsinline=true

>## 2.2、 Hybird App环境
说明: 内联播放是指直接在video标签中播放视频,没有必要进入全屏

>>* **2.2.1、 Android内联播放**

>>* ** 用Html5 Video 自带的播放栏控件 **

>>* ** 用 Video 视频统一处理方法处理后,点击图片手动隐藏图片,设置视频大小,手动播放视频 **

>>* ** Android内联播放需要注意,必须开启硬件加速,由于有些Android手机 webview是默认关闭硬件加速的,所以必须在创建这个带视频播放的webview时手动添加 硬件加速属性才行.(详情见plus创建webview的style) **

				style.hardwareAccelerated = true;


>* ** 2.2.2、 iOS内联播放 **

>>* ** 用Html5 Video 自带的播放栏控件 **

>>* ** 用 Video 视频统一处理方法处理后,点击图片手动隐藏图片,设置视频大小,手动播放视频.**

>>* ** 内联播放注意要点,由于iOS下默认是全屏播放的,所以需要经过设置才能正常内联播放**

>>>第一步:在项目的manifest里面配置允许webview内联播放

>		"plus": {
>			"splashscreen": {
>				"autoclose": true,/*是否自动关闭程序启动界面: true表示应用加载应用入口页面后自动关闭；false则需调plus.navigator.closeSplashscreen()关闭 */
>				"waiting": true/*是否在程序启动界面显示等待雪花，true表示显示，false表示不显示。*/
>			},		
>			"allowsInlineMediaPlayback": true,/*设置ios下允许内联播放*/
>			"popGesture": "close"
>		}

>>>第二步: 创建video标签时,手动加上内联播放的属性(iOS不支持preload)

>>>			<!-- 让ios支持内联播放,必须添加 webkit-playsinline 标签-->
>>>			<video webkit-playsinline id="videoMedia" controls="controls" preload>

>* ** 2.2.3、 Android非内联播放 **

>>* ** 通过NJS使用原生播放器来播放视频,传入的url可以是本地的或网络的地址**
>>* ** 用 Video 视频统一处理方法处理后,点击图片之后,图片保持不变(所以没有必要隐藏图片),直接获取视频的资源地址,传给原生播放器播放**
	
>>>>	`注: 这种模式下,性能要比直接html5自带播放器播放高`

>* ** 2.2.4、 iOS非内联播放 **

>>* ** 用Html5 Video 自带的播放栏控件(非内联播放需要去除特定内联属性”webkit-playsinline”,这样才能全屏播放) **

> >		if(!isInlinePlay){ //如果是非内敛,ios需要去除内联样式
> >			mediaTarget.removeAttribute('webkit-playsinline');
> >		}	

三、注意要点
-------------

由于将一个<Video>直接显示在页面中,会有各种五花八门的播放器效果,如下图所示:

> > ![Video播放器效果](https://github.com/dllwh/browserPlayer/blob/master/images/introduce/clipboard2.png?raw=true)

显然,体验效果并不好,所以现在的做法是用一张模拟播放的图片来替代<Video>所在的地方,而将Video元素设置为1*1像素大小.然后给图片设置点击监听,监听到点击时,播放视频.
注意: 
>  + 这里不要用{display: none}或者{width:0;height:0;}的方式，因为这样视频元素会处于未激活的状态，给后续的处理带来麻烦.
>  + 关于点击图片播放视频后,
如果是内联播放模式下(或者是普通浏览器),就应该将图片隐藏,然后将视频大小设置为本来的大小(一般为图片大小)；
如果是非内联播放模式(全屏模式),就没有必要隐藏图片了,因为iOS下会自动打开一个全屏播放器来播放视频,
Android下考虑到Html5 video较卡,所以也会通过使用原生播放器来全屏播放视频.