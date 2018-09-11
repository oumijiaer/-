// 男士女士切换
$(function(){
	$('.main4 .box span').click(function(){
		$(this).css('background','#555').children().css('color','white').parent().siblings().css('background','#fbfbfb').children('a').css('color','#555')
	})
})
// 年月日
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var arr1 = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
var arr2= [2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990];
var arr3=['中国香港','美国','德国','法国','英国','西班牙','俄罗斯','乌克兰']
var main6 = document.getElementsByClassName('main6')[0]
var main5s = document.getElementById('main5s')
var selects = main5s.getElementsByTagName('select')[0]
var select = main6.getElementsByTagName('select')
for(var i=0;i<arr.length;i++){
	var option = new Option(arr[i]);
	select[0].appendChild(option);
}
for(var i=0;i<arr1.length;i++){
	var option1 = new Option(arr1[i]);
	select[1].appendChild(option1);
}
for(var i=0;i<arr2.length;i++){
	var option2 = new Option(arr2[i]);
	select[2].appendChild(option2);
}
for(var i=0;i<arr3.length;i++){
	var option3 = new Option(arr3[i]);
	selects.appendChild(option3);
}

// 判断是否提交
$(function(){
	$('.main8').click(function(){
		if($('.main5').find('input').val()==''){
			$('.main5').find('p').show()
			$('.main5').css('outline','1px solid #c40d2e')
		}else{
			$('.main5').find('p').hide()
			$('.main5').css('outline','none')
		}
		if($(':checkbox').is(':checked')==false){
			$('.main7').find('p').show()
		}else{
			$('.main7').find('p').hide()
		}
		if($('.main5').eq(3).find('input').val() != $('.main5').eq(4).find('input').val()){
			alert('密码不一致')
		}
		if($('.main5').eq(3).find('input').val() == ''){
			alert('密码不能为空！')
		}
		if(($('.main5').find('input').val() != '') && ($(':checkbox').is(':checked')==true) && ($('.main5').eq(3).find('input').val() == $('.main5').eq(4).find('input').val())){
			alert('提交成功！')
			window.location.reload()
		}

	})
})
$(function(){
	var obj = {
		bottom:'49px'
	}
	var obj1 = {
		bottom:'0px'
	}
	$('.main8').mouseenter(function(){
		$('.main8 a').animate(obj,300)
		$(this).css('border','1px solid #c40d2e')
	})
	$('.main8').mouseleave(function(){
		$('.main8 a').animate(obj1,300)
		$(this).css('border','1px solid #e2e2e2')
	})
})