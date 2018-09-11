// 滚动条事件
$(function(){
	var obj = {
		bottom:'100px'
	}
	var obj1 = {
		left:'-50px'
	}
	var obj2 = {
		left:'50px'
	}
	var res
	$(window).scroll(function(){
		res = scrollY
		console.log(res)
		if(res>0){
			$('.main2').eq(0).animate(obj,1000)
			$('.none').eq(1).animate(obj,1000)
		}
		if(res>300){
			$('.main3').eq(0).animate(obj,1000)
			$('.none').eq(2).animate(obj,1000)
			$('.main3 .m3Left').eq(0).animate(obj1,1000)
			$('.main3 .m3Right').eq(0).animate(obj2,1000)
		}
		if(res>800){
			$('.main4').eq(0).animate(obj,1000)
			$('.none').eq(3).animate(obj,1000)
			$('.main4 .m4Left').eq(0).animate(obj2,1000)
			$('.main4 .m4Right').eq(0).animate(obj1,1000)
		}
		if(res>1300){
			$('.main3').eq(1).animate(obj,1000)
			$('.none').eq(4).animate(obj,1000)
			$('.main3 .m3Left').eq(1).animate(obj1,1000)
			$('.main3 .m3Right').eq(1).animate(obj2,1000)
		}
		if(res>1800){
			$('.main4').eq(1).animate(obj,1000)
			$('.none').eq(5).animate(obj,1000)
			$('.main4 .m4Left').eq(1).animate(obj2,1000)
			$('.main4 .m4Right').eq(1).animate(obj1,1000)
		}
		if(res>2307){
			$('.main2').eq(1).animate(obj,1000)
		}
		if(res>3007){
			$('.main3').eq(2).animate(obj,1000)
			$('.none').eq(6).animate(obj,1000)
			$('.main3 .m3Left').eq(2).animate(obj1,1000)
			$('.main3 .m3Right').eq(2).animate(obj2,1000)
		}
		if(res>3507){
			$('.main4').eq(2).animate(obj,1000)
			$('.none').eq(7).animate(obj,1000)
			$('.main4 .m4Left').eq(2).animate(obj2,1000)
			$('.main4 .m4Right').eq(2).animate(obj1,1000)
		}
		if(res>4007){
			$('.main3').eq(3).animate(obj,1000)
			$('.none').eq(8).animate(obj,1000)
			$('.main3 .m3Left').eq(3).animate(obj1,1000)
			$('.main3 .m3Right').eq(3).animate(obj2,1000)
		}
		if(res>4507){
			$('.main2').eq(2).animate(obj,1000)
		}
		if(res>5207){
			$('.main4').eq(3).animate(obj,1000)
			$('.none').eq(9).animate(obj,1000)
			$('.main4 .m4Left').eq(3).animate(obj2,1000)
			$('.main4 .m4Right').eq(3).animate(obj1,1000)
		}
		if(res>5707){
			$('.main3').eq(4).animate(obj,1000)
			$('.none').eq(10).animate(obj,1000)
			$('.main3 .m3Left').eq(4).animate(obj1,1000)
			$('.main3 .m3Right').eq(4).animate(obj2,1000)
		}
		if(res>6207){
			$('.main2').eq(3).animate(obj,1000)
		}
		if(res>6807){
			$('.main4').eq(4).animate(obj,1000)
			$('.none').eq(11).animate(obj,1000)
			$('.main4 .m4Left').eq(4).animate(obj2,1000)
			$('.main4 .m4Right').eq(4).animate(obj1,1000)
		}
		if(res>7400){
			$('.main2').eq(4).animate(obj,1000)
		}
		if(res>8100){
			$('.main3').eq(5).animate(obj,1000)
			$('.none').eq(12).animate(obj,1000)
			$('.main3 .m3Left').eq(5).animate(obj1,1000)
			$('.main3 .m3Right').eq(5).animate(obj2,1000)
		}
		if(res>8600){
			$('.main4').eq(5).animate(obj,1000)
			$('.none').eq(13).animate(obj,1000)
			$('.main4 .m4Left').eq(5).animate(obj2,1000)
			$('.main4 .m4Right').eq(5).animate(obj1,1000)
		}
		if(res>9100){
			$('.main3').eq(6).animate(obj,1000)
			$('.none').eq(14).animate(obj,1000)
			$('.main3 .m3Left').eq(6).animate(obj1,1000)
			$('.main3 .m3Right').eq(6).animate(obj2,1000)
		}
		if(res>9600){
			$('.main4').eq(6).animate(obj,1000)
			$('.none').eq(15).animate(obj,1000)
			$('.main4 .m4Left').eq(6).animate(obj2,1000)
			$('.main4 .m4Right').eq(6).animate(obj1,1000)
		}
		if(res>10100){
			$('.main3').eq(7).animate(obj,1000)
			$('.none').eq(16).animate(obj,1000)
			$('.main3 .m3Left').eq(7).animate(obj1,1000)
			$('.main3 .m3Right').eq(7).animate(obj2,1000)
		}
		if(res>10600){
			$('.main2').eq(5).animate(obj,1000)
		}
		if(res>11200){
			$('.main4').eq(7).animate(obj,1000)
			$('.none').eq(17).animate(obj,1000)
			$('.main4 .m4Left').eq(7).animate(obj2,1000)
			$('.main4 .m4Right').eq(7).animate(obj1,1000)
		}
		if(res>11700){
			$('.main3').eq(8).animate(obj,1000)
			$('.none').eq(18).animate(obj,1000)
			$('.main3 .m3Left').eq(8).animate(obj1,1000)
			$('.main3 .m3Right').eq(8).animate(obj2,1000)
		}
		if(res>12200){
			$('.main4').eq(8).animate(obj,1000)
			$('.none').eq(19).animate(obj,1000)
			$('.main4 .m4Left').eq(8).animate(obj2,1000)
			$('.main4 .m4Right').eq(8).animate(obj1,1000)
		}
		if(res>12700){
			$('.main2').eq(6).animate(obj,1000)
		}
		if(res>13488){
			$('.main3').eq(9).animate(obj,1000)
			$('.none').eq(20).animate(obj,1000)
			$('.main3 .m3Left').eq(9).animate(obj1,1000)
			$('.main3 .m3Right').eq(9).animate(obj2,1000)
		}
		if(res>13988){
			$('.main4').eq(9).animate(obj,1000)
			$('.none').eq(21).animate(obj,1000)
			$('.main4 .m4Left').eq(9).animate(obj2,1000)
			$('.main4 .m4Right').eq(9).animate(obj1,1000)
		}
		if(res>14488){
			$('.main3').eq(10).animate(obj,1000)
			$('.none').eq(22).animate(obj,1000)
			$('.main3 .m3Left').eq(10).animate(obj1,1000)
			$('.main3 .m3Right').eq(10).animate(obj2,1000)
		}
	})
})
// span效果
$(function(){
	var obj = {
		bottom:'49px'
	}
	var obj1 = {
		bottom:'0px'
	}
	$('.m3Left span').mouseenter(function(){
		$('.m3Left span a').animate(obj,300)
		$(this).css('border','1px solid #c40d2e')
	})
	$('.m4Right span').mouseenter(function(){
		$('.m4Right span a').animate(obj,300)
		$(this).css('border','1px solid #c40d2e')
	})
	$('.m3Left span').mouseleave(function(){
		$('.m3Left span a').animate(obj1,300)
		$(this).css('border','1px solid #e2e2e2')
	})
	$('.m4Right span').mouseleave(function(){
		$('.m4Right span a').animate(obj1,300)
		$(this).css('border','1px solid #e2e2e2')
	})
})