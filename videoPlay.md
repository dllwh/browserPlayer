video标签是 HTML 5 的新标签。
===========

属性
-------

	autoplay   
	controls   
	end   
	loopend   
	loopstart   
	playcount   
	poster   
	src   
	start   
	width

	属性具体描述请产考w3C html5手册


`video标签有许多默认的事件。从开始加载到播放结束，都经历了哪些事件呢？这些事件的触发顺序如何？`
-------

	[1]HTML5:onplay
	
> `播放器不在保持“暂停”状态，即“play()”方法被调用或者autoplay属性设置为true期望播放器自动开始播放。`
		
	[2]HTML5:onwaiting
	
>  `播放由于下一帧数据未获取到导致播放停止，但是播放器没有主动预期其停止，仍然在努力的获取数据，简单的说就是在等待下一帧视频数据，暂时还无法播放。`
	
	[3]HTML5:ondurationchange
	
>  `duration(视频播放总时长)属性被更新。`
	
	[4]HTML5:onloadedmetadata
	
>  `获取视频meta信息完毕，这个时候播放器已经获取到了视频时长和视频资源的文件大小。`
	
	[5]HTML5:onloadeddata
	
>  `视频播放器第一次完成了当前播放位置的视频渲染`
	
	[6]HTML5:oncanplay
	
>  `视频播放器已经可以开始播放视频了，但是只是预期可以正常播放，不保证之后的播放不会出现缓冲等待。`
	
	[7]HTML5:onplaying
	
>  `真正处于播放的状态，这个时候我们才是真正的在观看视频`
		
	[8]HTML5:oncanplaythrough
	
>  `播放器认为从现在开始播放，直到播放结束，不再会因为等待后面的数据而出现缓冲等待。（注意，这个只是播放器根据网速和播放进度的预期估计，不代表后面的数据全部都预先缓冲完毕了，如果你手动推动控制栏的进度条，可能仍然会出现缓冲的，或者你后面网络断开了，一样没办法继续播放，除非是真的缓冲完了）`
	
	[9]HTML5:onended
	
>  `播放完毕。`