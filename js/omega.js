// span效果
$(function(){
	var obj = {
		bottom:'49px'
	}
	var obj1 = {
		bottom:'0px'
	}
	$('.main7 .box span').mouseenter(function(){
		$('.main7 .box span a').animate(obj,300)
		$(this).css('border','1px solid #c40d2e')
	})
	$('.main7 .box span').mouseleave(function(){
		$('.main7 .box span a').animate(obj1,300)
		$(this).css('border','1px solid #555')
	})
})
$(function(){
	obj = {
		bottom:'0px'
	}
	obj1 = {
		bottom:'-49px'
	}
	$('.main10 .m10Left span').mouseenter(function(){
		$('.main10 .m10Left span a').animate(obj,300)
	})
	$('.main10 .m10Left span').mouseleave(function(){
		$('.main10 .m10Left span a').animate(obj1,300)
	})
})
// 轮播图二
$(function(){
	var res=3
	var timer
	var num=0;
	var num1=2
	function fun(){
		if(num==348){
			clearInterval(timer)
		}
		if(num>696){
			clearInterval(timer)
			$('.R').hide(100)
		}else{
			$('.R').show(100)
		}
		if(num==0){
			clearInterval(timer)
		}
		if(num==-348){
			clearInterval(timer)
		}
		if(num==-696){
			clearInterval(timer)
		}
		if(num==-1044){
			clearInterval(timer)
		}
		if(num==-1392){
			clearInterval(timer)
		}
		if(num==-1740){
			clearInterval(timer)
		}
		if(num==-2088){
			clearInterval(timer)
		}
		if(num==-2436){
			clearInterval(timer)
		}
		if(num==-2784){
			clearInterval(timer)
			$('.L').hide(100)
		}else{
			$('.L').show(100)
		}
	}
	$('.main11 .L').click(function(){
		res++
		$('.main11 .box .bTop').html('0'+res+'/11')
		if(res>9){
			$('.main11 .box .bTop').html(res+'/11')
		}
		clearInterval(timer)
		 timer=setInterval(function(){
			num-=12
			fun()
			$('.main11 ul').eq(0).css('left',num+'px')
		},1)
		 num1++
		 $('.main11 .list li').eq(num1).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .R').click(function(){
		res--
		clearInterval(timer)
		$('.main11 .box .bTop').html('0'+res+'/11')
		if(res>9){
			$('.main11 .box .bTop').html(res+'/11')
		}
		timer=setInterval(function(){
			num+=12
			fun()
			$('.main11 ul').eq(0).css('left',num+'px')
		},1)
		num1--
		 $('.main11 .list li').eq(num1).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(0).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html('0'+k+'/11')
		$('.main11 ul').eq(0).css('left',2*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(1).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html('0'+k+'/11')
		$('.main11 ul').eq(0).css('left',1*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(2).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html('0'+k+'/11')
		$('.main11 ul').eq(0).css('left',0*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(3).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html('0'+k+'/11')
		$('.main11 ul').eq(0).css('left',-1*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(4).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html('0'+k+'/11')
		$('.main11 ul').eq(0).css('left',-2*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(5).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html('0'+k+'/11')
		$('.main11 ul').eq(0).css('left',-3*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(6).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html('0'+k+'/11')
		$('.main11 ul').eq(0).css('left',-4*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(7).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html('0'+k+'/11')
		$('.main11 ul').eq(0).css('left',-5*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(8).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html('0'+k+'/11')
		$('.main11 ul').eq(0).css('left',-6*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(9).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html(k+'/11')
		$('.main11 ul').eq(0).css('left',-7*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main11 .list li').eq(10).click(function(){
		var k = $(this).val()+1
		$('.main11 .box .bTop').html(k+'/11')
		$('.main11 ul').eq(0).css('left',-8*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
})
// 滚动条事件
$(function(){
	var obj = {
		bottom:'100px'
	}
	var res
	$(window).scroll(function(){
		res = scrollY
		if(res>0){
			$('.main2').eq(0).animate(obj,2000)
			$('.none').eq(1).animate(obj,2000)
		}
		if(res>100){
			$('.main3').animate(obj,2000)
		}
		if(res>700){
			$('.main2').eq(1).animate(obj,2000)
			$('.none').eq(2).animate(obj,2000)
		}
		if(res>900){
			$('.main4').animate(obj,2000)
			$('.none').eq(3).animate(obj,2000)
		}
		if(res>1700){
			$('.main5').animate(obj,2000)
			$('.none').eq(4).animate(obj,2000)
		}
		if(res>2500){
			$('.main6').animate(obj,2000)
			$('.none').eq(5).animate(obj,2000)
		}
		if(res>3300){
			$('.main p').animate(obj,2000)
			$('.none').eq(6).animate(obj,2000)
		}
		if(res>3500){
			$('.main7').animate(obj,2000)
		}
		if(res>4700){
			$('.main2').eq(2).animate(obj,2000)
			$('.none').eq(7).animate(obj,2000)
		}
		if(res>5000){
			$('.main8').eq(0).animate(obj,2000)
		}
		if(res>5900){
			$('.main2').eq(3).animate(obj,2000)
		}
		if(res>6400){
			$('.main8').eq(1).animate(obj,2000)
		}
		if(res>7000){
			$('.main2').eq(4).animate(obj,2000)
			$('.none').eq(8).animate(obj,2000)
		}
		if(res>7200){
			$('.main9').eq(0).animate(obj,2000)
			$('.none').eq(9).animate(obj,2000)
		}
		if(res>7700){
			$('.main10').eq(0).animate(obj,2000)
			$('.none').eq(10).animate(obj,2000)
		}
		if(res>8200){
			$('.main9').eq(1).animate(obj,2000)
			$('.none').eq(11).animate(obj,2000)
		}
		if(res>7700){
			$('.main10').eq(1).animate(obj,2000)
			$('.none').eq(12).animate(obj,2000)
		}
		if(res>9200){
			$('.main2').eq(5).animate(obj,2000)
			$('.none').eq(13).animate(obj,2000)
		}
		if(res>9500){
			$('.main8').eq(2).animate(obj,2000)
			$('.none').eq(14).animate(obj,2000)
		}
		if(res>10400){
			$('.main11').animate(obj,2000)
			$('.none').eq(15).animate(obj,2000)
		}
	})
})
//轮播图1
$(function(){
	$('.main5 .li li').eq(0).click(function(){
		$('.main5 .ul').find('li').eq(1).hide(300)
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#bbb')
	})
	$('.main5 .li li').eq(1).click(function(){
		$('.main5 .ul').find('li').eq(1).show(300)
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#bbb')
	})
})
// 小图标滑动
$(function(){
	var obj = {
		top:'10px'
	}
	var obj1 = {
		top:'0px'
	}
	$('.main1 .center h1 a span').mouseover(function(){
		$(this).animate(obj,1500).stop(false,true)

	})
	$('.main1 .center h1 a span').mouseout(function(){
		$(this).animate(obj1,1500).stop(false,true)
	})
})