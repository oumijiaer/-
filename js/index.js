// span移入效果
$(function(){
	var obj = {
		bottom:'49px'
	}
	var obj1 = {
		bottom:'0px'
	}
	$('.main2box span').mouseenter(function(){
		$('.main2box span a').animate(obj,300)
		$('.main2box span').css('border','1px solid #c40d2e')
	})
	$('.main2box span').mouseleave(function(){
			// $('.main2box span a').stop(false,true)
		$('.main2box span a').animate(obj1,300)
		$('.main2box span').css('border','1px solid #ccc')
	})
})
// 轮播图 1
$(function(){
	var index = 0
	var indexs = 0
	var timer1
	var timer=setInterval(chen,2000)
	function chen(){
		index++
		indexs++
		if(index>=5){
			index=0
		}
		if(indexs>4){
			indexs=0
		}
		$('.main1 .ul1 li').eq(index).show(300).siblings().hide()
		$('.main1 .ul li').eq(indexs).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')

		

		console.log(index)
	}
	$('.main1 .ul li').click(function(){
		var num = $(this).val()
		$('.main1 .ul1 li').eq(num).show(300).siblings().hide()
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')

	})
})
// 轮播图2
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
		if(num<-1044){
			clearInterval(timer)
			$('.L').hide(100)
		}else{
			$('.L').show(100)
		}
	}
	$('.main3 .L').click(function(){
		res++
		$('.main3 .box .bTop').html('0'+res+'/06')
		clearInterval(timer)
		 timer=setInterval(function(){
			num-=12
			fun()
			$('.main3 ul').eq(0).css('left',num+'px')
		},1)
		 num1++
		 $('.main3 .list li').eq(num1).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main3 .R').click(function(){
		res--
		clearInterval(timer)
		$('.main3 .box .bTop').html('0'+res+'/06')
		timer=setInterval(function(){
			num+=12
			fun()
			$('.main3 ul').eq(0).css('left',num+'px')
		},1)
		num1--
		 $('.main3 .list li').eq(num1).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main3 .list li').eq(0).click(function(){
		var k = $(this).val()+1
		$('.main3 .box .bTop').html('0'+k+'/06')
		$('.main3 ul').eq(0).css('left',2*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main3 .list li').eq(1).click(function(){
		var k = $(this).val()+1
		$('.main3 .box .bTop').html('0'+k+'/06')
		$('.main3 ul').eq(0).css('left',1*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main3 .list li').eq(2).click(function(){
		var k = $(this).val()+1
		$('.main3 .box .bTop').html('0'+k+'/06')
		$('.main3 ul').eq(0).css('left',0*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main3 .list li').eq(3).click(function(){
		var k = $(this).val()+1
		$('.main3 .box .bTop').html('0'+k+'/06')
		$('.main3 ul').eq(0).css('left',-1*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main3 .list li').eq(4).click(function(){
		var k = $(this).val()+1
		$('.main3 .box .bTop').html('0'+k+'/06')
		$('.main3 ul').eq(0).css('left',-2*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main3 .list li').eq(5).click(function(){
		var k = $(this).val()+1
		$('.main3 .box .bTop').html('0'+k+'/06')
		$('.main3 ul').eq(0).css('left',-3*348+'px')
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
		if(res>=100){
			$('.main2').eq(0).animate(obj,2000);
		}
		// if(res>=400){
		// 	$('.none').eq(0).animate(obj,2000);
		// }
		if(res>=600){
			$('.main3').animate(obj,2000);
		}
		if(res>=1000){
			$('.main2').eq(1).animate(obj,2000);
		}
		if(res>=1400){
			$('.main4').animate(obj,2000);
		}
		if(res>=2000){
			$('.none').eq(1).animate(obj,2000);
		}
		if(res>=2100){
			$('.main2').eq(2).animate(obj,2000);
		}
		if(res>=2500){
			$('.main5').animate(obj,2000);
		}
		if(res>=3300){
			$('.main2').eq(3).animate(obj,2000);
		}
		if(res>=3600){
			$('.main6').animate(obj,2000);
		}
		if(res>=3700){
			$('.none').eq(2).animate(obj,2000);
		}
		if(res>=4300){
			$('.main7').animate(obj,2000);
		}
		if(res>=4400){
			$('.none').eq(3).animate(obj,2000);
		}
		if(res>=5000){
			$('.main8').animate(obj,2000);
		}
		if(res>=5100){
			$('.none').eq(4).animate(obj,2000);
		}
		if(res>=6000){
			$('.main9').animate(obj,2000);
		}
	})
})
// 轮播图3
	var box = document.getElementsByClassName('imgs')[0]
	var li = box.getElementsByTagName('li')
	var boxs = document.getElementsByClassName('nums')[0]
	var li1 = boxs.getElementsByTagName('li')
	var L = document.getElementsByClassName('L1')[0]
	var R = document.getElementsByClassName('R1')[0]
	var k=0;
	var timer;
	//封装函数show
	function show(){
		k++;
		//判断k的值如果大于5，k就等于0，回到第一张图片
		if(k>=li.length){
			k=0
		}
		//遍历数组
		for(var i=0;i<li.length;i++){
			//所有 图片都隐藏
			li[i].style.display='none'
			//所有圆点都为灰色
			li1[i].style.background='#555'
		}
		//k的值为哪个时哪个图片显示 ，圆点为红色
		li[k].style.display='block'
		li1[k].style.background='#c40d2e'
	}
	//循环定时器让图片动起来
	timer=setInterval(show,3000)
	//圆点的点击事件
	//遍历数组
	for(var i=0;i<li1.length;i++){
		li1[i].onclick=function(){
			//遍历数组
			for(var j=0;j<li1.length;j++){
				//点击时让他们都隐藏，圆点都为灰色
				li[j].style.display='none'
				li1[j].style.background='#555'
			}
			//获取圆点的value值
			k=this.value
			// console.log(this.value)
			//当value为哪个时相对的图片显示圆点为红色
			li[k].style.display='block'
			li1[k].style.background='#c40d2e'
		}
	}
	//L点击事件
	L.onclick=function(){
		//点击左边时让图片向左移动
		k--;
		//判断当移到第一张图片时下一张为最后一张
		if(k<0){
			k=3
		}
		//遍历数组
		for(var i=0;i<li1.length;i++){
			//点击时让他们都隐藏，圆点都为灰色
			li[i].style.display='none'
			li1[i].style.background='#555'
		}
		//当k为哪个时相对的图片显示圆点为红色
		li[k].style.display='block'
		li1[k].style.background='#c40d2e'
	}
	//R的点击事件
	R.onclick=function(){
		show()
	}
// 轮播图四
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
			$('.L').hide(100)
		}else{
			$('.L').show(100)
		}
	}
	$('.main7 .L').click(function(){
		res++
		$('.main7 .box .bTop').html('0'+res+'/08')
		clearInterval(timer)
		 timer=setInterval(function(){
			num-=12
			fun()
			$('.main7 ul').eq(0).css('left',num+'px')
		},1)
		 num1++
		 $('.main7 .list li').eq(num1).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main7 .R').click(function(){
		res--
		clearInterval(timer)
		$('.main7 .box .bTop').html('0'+res+'/08')
		timer=setInterval(function(){
			num+=12
			fun()
			$('.main7 ul').eq(0).css('left',num+'px')
		},1)
		num1--
		 $('.main7 .list li').eq(num1).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main7 .list li').eq(0).click(function(){
		var k = $(this).val()+1
		$('.main7 .box .bTop').html('0'+k+'/08')
		$('.main7 ul').eq(0).css('left',2*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main7 .list li').eq(1).click(function(){
		var k = $(this).val()+1
		$('.main7 .box .bTop').html('0'+k+'/08')
		$('.main7 ul').eq(0).css('left',1*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main7 .list li').eq(2).click(function(){
		var k = $(this).val()+1
		$('.main7 .box .bTop').html('0'+k+'/08')
		$('.main7 ul').eq(0).css('left',0*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main7 .list li').eq(3).click(function(){
		var k = $(this).val()+1
		$('.main7 .box .bTop').html('0'+k+'/08')
		$('.main7 ul').eq(0).css('left',-1*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main7 .list li').eq(4).click(function(){
		var k = $(this).val()+1
		$('.main7 .box .bTop').html('0'+k+'/08')
		$('.main7 ul').eq(0).css('left',-2*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main7 .list li').eq(5).click(function(){
		var k = $(this).val()+1
		$('.main7 .box .bTop').html('0'+k+'/08')
		$('.main7 ul').eq(0).css('left',-3*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main7 .list li').eq(6).click(function(){
		var k = $(this).val()+1
		$('.main7 .box .bTop').html('0'+k+'/08')
		$('.main7 ul').eq(0).css('left',-4*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
	$('.main7 .list li').eq(7).click(function(){
		var k = $(this).val()+1
		$('.main7 .box .bTop').html('0'+k+'/08')
		$('.main7 ul').eq(0).css('left',-5*348+'px')
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})

})
// span效果2
$(function(){
	var obj = {
		bottom:'49px'
	}
	var obj1 = {
		bottom:'0px'
	}
	$('.main8 .box span').mouseenter(function(){
		$('.main8 .box span a').animate(obj,300)
	})
	$('.main8 .box span').mouseleave(function(){
		$('.main8 .box span a').stop(false,true)
		$('.main8 .box span a').animate(obj1,300)
	})
})
// 轮播图五
$(function(){
	var index = 0
	var indexs = 0
	var timer1
	var timer=setInterval(long,3000)
	function long(){
		index++
		indexs++
		if(index>=4){
			index=0
		}
		if(indexs>3){
			indexs=0
		}
		$('.main9 ul li').eq(index).show(300).siblings().hide()
		$('.main9 .boxs ul li').eq(indexs).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
		
	}
	$('.main9 .boxs ul li').click(function(){
		var num = $(this).val()
		$('.main9 ul li').eq(num).show(300).siblings().hide()
		$(this).css('border','1px solid red').css('background','rgba(1,1,1,0)').siblings().css('border','none').css('background','#555')
	})
})