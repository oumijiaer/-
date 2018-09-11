// 菜单点击事件
$(function(){
	$('.a').click(function(){
		$('#navspanBox').show(1000)
	})
	$('.a1').click(function(){
		$('#navspanBox').hide(1000)
	})
})
// 搜索点击事件
$(function(){
	$('.img1').click(function(){
		$('#sousuobox').show(1000)
	})
	$('.a2').click(function(){
		$('#sousuobox').hide(1000)
	})
})
// 吸顶
$(function(){
	$(window).scroll(function(){
		var height = $('.header').height();
		var scrollTop = $(window).scrollTop();
		if(scrollTop>=height){
			$('.header').css({'position':'fixed','top':'0px'});
		}else{
			$('.header').css({'position':'static'});
		}
	})
});
// 切换语言点击事件
$(function(){
   	var h=0
	$('.fbimg').click(function(){
		h+=1
		console.log(h)
		if(h%2==0){
			$('.lang').hide(1000)
		}else{
			$('.lang').show(1000)
		}
	})		
})
// 底部span
$(function(){
	var obj = {
		bottom:'49px'
	}
	var obj1 = {
		bottom:'0px'
	}
	$('.voxs').mouseover(function(){
		$('.voxs a').animate(obj,200)
	})
	$('.voxs').mouseleave(function(){
		$('.voxs a').animate(obj1,200)
	})
})
