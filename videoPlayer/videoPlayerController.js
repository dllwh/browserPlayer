/**
 * 网页跟播放器交互函数,控制函数列表
 */
/** 播放器默认配置 */
var defaultConfig = {
	playerID : '', // 播放器ID
	container : '', // 视频容器的ID
	fullInteractive : true, // 是否开启交互功能
	delay : 30, // 延迟加载视频，单位：毫秒
	timeFrequency : 100, // 计算当前播放时间和加载量的时间频率，单位：毫秒
	autoLoad : true, // 视频是否自动加载
	click : true, // 是否支持屏幕单击暂停
	doubleClick : true, // 是否支持屏幕双击全屏
	videoClick : true, // 是否支持单击播放/暂停动作
	videoDbClick : true, // 是否支持双击全屏/退出全屏动作
	doubleClickInterval : 200, // 判断双击的标准，即二次单击间隔的时间差之内判断为是双击，单位：毫秒
	timeJump : 10, // 快进快退时的秒数
	volumeJump : 0.1, // 音量调整的数量，大于0小于1的小数
	timeScheduleAdjust : 1, // 是否可调节调节栏,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退
	previewDefaultLoad : true, // 预览图片是否默认加载，优点是鼠标第一次经过进度条即可显示预览图片
	errorNum : 3, // 错误重连次数
	volume : 0.8, // 默认音量，范围0-1
	poster : '', // 封面图片地址
	autoplay : false, // 是否自动播放
	loop : false, // 是否需要循环播放
	duration : 0, // 指定总时间
	isCanPlay : true, // 是否允许播放
	isAllowPlay : true,// PC端不支持播放
	isControlsVisible : true, // 是否显示控制栏
	isFullScreen : false, // 是否全屏
	live : true, // 是否是直播视频，true=直播，false=点播
	currentVideoTime : 0,
	playbackRateDefault : 1, // 默认变速播放的值
	previewStart : 0, // 预览图片加载状态/0=没有加载，1=正在加载，2=加载完成
	isM3u8 : false, // 是否是m3u8格式，是的话则可以加载hls.js
	debug : false
// 是否开启调试模式
}

/** 语言配置 */
var languageConfig = {
	volume : '音量：',
	play : '点击播放',
	pause : '点击暂停',
	full : '点击全屏',
	escFull : '退出全屏',
	mute : '点击静音',
	escMute : '取消静音',
	front : '上一集',
	next : '下一集',
	definition : '点击选择清晰度',
	playbackRate : '点击选择速度',
	error : '加载出错'
}

var playVideo = {
	isPlaying : function() { // 是否正在播放状态
		return false;
	},
	isPaused : function() {// 是否是暂停状态
		return false;
	},
	isCompleted : function() {// 是否是在播放完成
		return false;
	},
	isFullScreen : function() {// 是否是全屏
		return false;
	},
	isLive : function(url) { // 判断是否是直播
		return false;
	},
	getVideoCurrentTime : function() {// 获取当前播放时间（秒）
		var currentTime = playVideo.currentTime;
		if (!isNaN(currentTime) && currentTime != 0) {
			return parseInt(currentTime);
		} else {
			return 0;
		}
	},
	getCurrentVideoPlay : function() {// 获取当前播放的地址

	},
	getVolume : function() {// 获取音量 (在0.0到1.0之间设置音频音量的相对值)
		return playVideo.volume;
	}
};

/** 播放视频 */
function videoPlay() {
	// 如果当前视频正在加载，直接return
	var currentServiceTime = Date.now();
	var protectTime = 100; // 设置保护性延时 单位毫秒，不要小于50 建议100以上
	if ((currentServiceTime - lastRunTime) < protectTime) {
		return; // 两次执行太过频繁，直接退出
	}
	if (playVideo.paused || playVideo.ended) { // 暂停中 or 已结束

	} else {

	}
}

/** 暂停视频 */
function videoPause() {
	// 如果当前视频正在加载，直接return
}

/** 在播放和暂停二个状态之间切换 */
function playOrPause() {

}

/** 获取播放的倍速 */
function getvideoPlaySpeed() {
	return playVideo.playbackRate;
}

/** 静音 */
function videoMute() {
	changeVolume(0);
}

/** 取消静音 */
function videoEscMute() {
	changeVolume(100);
}

/**
 * 改变音量
 * 
 * 
 * 
 * @param {Object}
 *            volume 指音量，类型是：Number，(0-100)
 */
function changeVolume(volume) {
	// 如果当前视频正在加载，直接return
	var volume = Math.floor(volume);
	if (isNaN(volume)) {
		volume = 0;
	}
	if (volume <= 0) {
		volume = 0;
	}

	if (volume >= 100) {
		volume = 100;
	}
	playVideo.volume = volume;
}

/**
 * 跳转指定时间点
 * 
 * @param {Object}
 *            time 时间点，类型是：Int，单位：秒
 */
function videoSeek(time) {
	// 如果当前视频正在加载，直接return
	// 当前播放时间+/-time之后的值
	if (time < 0) {
		return;
	}

	if (time > duration) {
		return;
	}
}

/**
 * 是否显示控制栏
 * 
 * @param {Object}
 *            show 是否隐藏控制栏，true隐藏,false显示
 */
function changeControlBarShow(show) {
	// 如果当前视频正在加载，直接return
}

function changeVideo(videoUrl) {
	if (videoUrl == null) {
		return;
	}
}

/** 全屏/退出全屏动作，该动作只能是用户操作才可以触发，比如用户点击按钮触发该事件 */
function switchFull() {
	if (isFullScreen) {
		this.exitFullScreenFun();
	} else {
		this.enterFullScreenFun();
	}
}

/**
 * 清除视频
 */
function videoClear() {

}
/**
 * 全屏动作，
 * 
 * 此方法不能在异步任务中执行
 * 
 * 该动作只能是用户操作才可以触发，比如用户点击按钮触发该事件
 */
function enterFullScreenFun(element) {
	if ($.isFunction(element.requestFullscreen)) { // W3C
		element.requestFullscreen();
	} else if ($.isFunction(element.mozRequestFullScreen)) { // Firebox
		element.mozRequestFullScreen();
	} else if ($.isFunction(element.webkitEnterFullscreen)) { // chrome等
		element.webkitEnterFullscreen();
	} else if ($.isFunction(element.msRequestFullscreen)) { // IE 11
		element.msRequestFullscreen();
	} else if ($.isFunction(element.oRequestFullscreen)) {
		element.oRequestFullscreen();
	} else {
		/** 注释掉的代码尚未通过验证 */
		/**
		 * var docHtml = document.documentElement; var docBody = document.body;
		 * var cssText = 'width:100%;height:100%;overflow:hidden;';
		 * docHtml.style.cssText = cssText; docBody.style.cssText = cssText;
		 * element.style.cssText = cssText+';'+'margin:0px;padding:0px;';
		 * document.IsFullScreen = true;
		 */
	}
}

/** 退出全屏动作 */
function exitFullScreenFun() {
	if ($.isFunction(document.webkitCancelFullScreen)) {
		document.webkitCancelFullScreen();
	} else if ($.isFunction(document.mozCancelFullScreen)) {
		document.mozCancelFullScreen();
	} else if ($.isFunction(document.exitFullscreen)) {
		document.exitFullscreen();
	} else if ($.isFunction(document.msExitFullscreen)) {
		document.msExitFullscreen();
	} else {
		/** 注释掉的代码尚未通过验证 */
		/**
		 * var docHtml = document.documentElement; var docBody = document.body;
		 * var videobox = document.getElementById('videobox');
		 * docHtml.style.cssText = ""; docBody.style.cssText = "";
		 * videobox.style.cssText = ""; document.IsFullScreen = false;
		 */
	}
}

/**
 * 获取播放器当前各项属性，包括视频的宽高，时长，位置等信息
 * 
 * @desc 返回一个对象，包含视频的元数据信息+播放器的相关信息。返回的主要信息如下 总时间：duration，单位：秒
 * 
 * 音量：volume，范围0-1 播放器的宽度：width
 * 
 * 播放器的高度：height
 * 
 * 视频宽度：videoWidth
 * 
 * 视频高度：videoHeight
 * 
 * 视频原始宽度：streamWidth
 * 
 * 视频原始高度：streamHeight
 * 
 * 是否暂停状态：paused
 * 
 * 当前音量 : volume
 * 
 * 是否播放:play
 * 
 * 是否静音:mute
 * 
 * 控制栏是否显示状态:controlBarShow
 */
function getMetaDate() {

}

/**
 * 改变尺寸比例
 * 
 * @param {Object}
 *            zoom 默认值是：1，类型：Int，其值必需大于等于0，当小于1时缩小，大于1时放大，比如1.1将增加10%的大小
 */
function videoZoom(zoom) {

}

/**
 * 调整亮度
 * 
 * @param {Object}
 *            num
 */
function videoBrightness(num) {

}
/**
 * 改变播放速度
 * 
 * @param {Object}
 *            speed 速度值
 */
function changePlaybackRate(speed) {

}

/** 根据当前播放还是暂停确认图标显示 */
function playShow(b) {
	if (b) {

	} else {

	}
}

/**
 * 弹幕
 */
/** 加载字幕 */
function loadTrack() {

}

function trackShowHandler() {

}

/** 显示字幕内容 */
function trackShow() {

}

/** 隐藏字字幕内容 */
function trackHide() {

}
/** 重置字幕 */
function resetTrack() {

}
/** 继续播放所有弹幕 */
function animateResume() {

}

/** 暂停所有弹幕 */
function animatePause() {

}

/**
 * 网页跟播放器交互函数,监听函数列表
 */

/** 点击右键屏蔽 */
function contextmenuHandler(event) {
	e.preventDefault();
	e.stopPropagation();
}

/** 监听到播放出错 */
function errorHandler() {

}

/** 监听总时间 */
function durationHandler() {
	var duration = 0;
	console.log('总时间（秒）：' + duration);
}

/** 监听播放时间 */
function currentTimeHandler() {
	var currentVideoTime = 0;
	console.log('当前播放时间（秒）：' + currentVideoTime); // 定期返回监控时间
}

/**
 * 监听播放状态
 */
function playHandler() {

}

/** 监听视频播放事件 */
function playingHandler() {

}

/** 监听视频播放时间事件 */
function eventTimeupdateHandler(event) {
	// 获取当前播放的位置
	// 如果 currentTime === duration，则视频已播放完毕
	if (playVideo.duration != 0 && currentPos == playVideo.duration) {
		// 播放结束
	}

}

/** 浏览器根据当前网络状况去判断是否已经加载了足够的媒体片断而支撑基本的播放 */
function canplaythroughHandler() {
	if (playVideo.paused || playVideo.ended) { // 暂停中 or 已结束

	} else {
		videoPlay();
	}
}

/** 监听暂停状态 */
function pauseHandler() {

}

/** 监听是否暂停状态 */
function pausedHandler() {

}
/** 监听视频缓冲事件 */
function bufferHandler() {
	switch (playVideo.networkState) { // 当前网络状态
	case 2: { // 正在下载数据
		switch (playVideo.readyState) { // 返回视频的当前就绪状态
		case 0: { // 没有关于音频/视频是否就绪的信息
			break;
		}
		case 1: { // 正在下载数据
			break;
		}
		case 2: { // 没有足够的数据来播放
			break;
		}
		case 3: { // 当前及至少下一帧的数据是可用的
			break;
		}
		case 4: { // 可用数据足以开始播放
			videoPlay();
			break;
		}
			;
		default: {
			break;
		}
		}
		break;
	}
	case 3: { // 未找到音频/视频来源

	}
	default: { // 没有找到支持可播放资源
		break;
	}
	}
}

/** 监听跳转播放完成 */
function seekedHandler() {
	// 如果跳转完后，视频是暂停则去播放
}

/** 监听跳转时间 */
function seekTimeHandler(time) {

}

/** 监听音量改变 */
function volumeChangeHandler(vol) {
	try {
		Console.log('当前音量：' + vol);
	} catch (e) {

	}
}

/** 监听全屏/退出全屏 */
function fullHandler(b) {
}

/**
 * 监听截图
 * 
 * @param {Object}
 *            obj
 */
function screenshotHandler(obj) {

}

/** 监听播放结束 */
function endedHandler() {
	console.log('播放结束');
}

/** 连播 */
function loadNextVideo() {

}

/** 监听鼠标坐标 */
function mouseHandler(event) {
	var isTouch = 'ontouchstart' in window;
	if (!isTouch) {
		console.log('鼠标位置，x：' + event.pageX + '，y：' + event.pageY);
	} else {
		console.log('触屏位置，x：' + event.touches[0].pageX + '，y：'
				+ event.touches[0].pageY)
	}

}

/**
 * 监听播放速度改变
 */
function playbackRateHandler(speed) {
	console.log('当前加载速率：' + speed);
}

/**
 * 监听控制栏是否隐藏
 * 
 * @return 返回一个布尔值,true/false
 */
function controlBarHandler(show) {
	if (show) {
		console.log('显示');
	} else {
		console.log('隐藏');
	}
}

/**
 * 监听清晰度改变
 * 
 * @return 返回一个数字，指清晰度编号
 */
function definitionChangeHandler() {
	console.log('切换清晰度');
}

/**
 * 监听播放器点击事件
 * 
 * @return 返回一个字符，触发的动作
 */
function clickEventHandler() {

}

/** 监听视频单击事件 */
function eventVideoClickHandler(event) {
	/**
	 * swiperight:视频手势右滑动事件(竖：右；横：上)
	 * 
	 * swipeleft:视频手势左滑动事件(竖：左；横：下)
	 * 
	 * swipeup:视频手势上滑动事件 (竖：上；横：左)
	 * 
	 * swipedown:视频手势下滑动事件 (竖：下；横：右)
	 */
}

/** 播放按钮的显示、隐藏 */
function playBtnHandler(state) {
	if (state) { // 显示

	} else { // 隐藏

	}
}

/** 缓冲按钮的显示、隐藏 */
function cacheBtnHandler(state) {
	if (state) { // 显示

	} else { // 隐藏

	}
}