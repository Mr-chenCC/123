/*
* @Author: admin
* @Date:   2019-12-03 11:35:03
* @Last Modified by:   admin
* @Last Modified time: 2019-12-05 11:24:53
*/
window.onload=function(){
	$('.dropdown').hover(function(event){
		$(this).addClass('open');
	},function(event){
		$(this).removeClass('open');
	})
	$('.icon2').hover(function(){
		$('.icon2').stop().animate({'right':'0px'},1000);
	},function(){
		$('.icon2').stop().animate({'right':'-246px'},1000);
		$('.nav-list').css('display','none');
	})
	$('input[type="text"]').click(function(){
			$('.nav-list').stop().slideDown(1000);
	});
	$('.part4 ol li').click(function(event){
		n=$(this).index();
		$(this).addClass('a1').siblings().removeClass('a1');
		$('.part4 ol .a1 .s').addClass('s1').parent().siblings().children().removeClass('s1');
	})
	var n=0;
	var timer;
	var w1=$(window).width();
	var w=$('.banner').width();
	$('.banner ul li img').css('width', w+'px');
	$('.banner #nav1>ol li').mouseenter(function(event){
		n=$(this).index();
		$('.banner ul').stop().animate({'margin-left':-w*n+'px'},1000);
		$(this).addClass('a2').siblings().removeClass('a2');
	})
	$('.banner-left').click(function(event){
		n--;
		if(n<0)
			{
				$('.banner #nav1>ol li').eq(4).addClass('a2').siblings().removeClass('a2');
				$('.banner ul').css('margin-left',-5*w+'px');
				n=4;
			}
		$('.banner ul').stop().animate({'margin-left':-w*n+'px'},1000);
		$('.banner #nav1>ol li').eq(n).addClass('a2').siblings().removeClass('a2');
	})
	$('.banner-right').click(function(event){
		n++;
		if(n>4){
				$('.banner #nav1>ol li').eq(0).addClass('a2').siblings().removeClass('a2');
			}
		if(n==6)
		{
			$('.banner ul').css({'margin-left':'0px'});
			n=1;
		}
		$('.banner ul').stop().animate({'margin-left':-w*n+'px'},1000);
		$('.banner #nav1>ol li').eq(n).addClass('a2').siblings().removeClass('a2');
	})
	function go(){
		clearInterval(timer);
		timer=setInterval(function(event){
			n++;
			if(n>4){
				$('.banner #nav1>ol li').eq(0).addClass('a2').siblings().removeClass('a2');
			}
			if(n==6)
			{
				$('.banner ul').css({'margin-left':'0px'});
				n=1;
			}
			$('.banner ul').stop().animate({'margin-left':-w*n+'px'},1000);
			$('.banner #nav1>ol li').eq(n).addClass('a2').siblings().removeClass('a2');
		},2000);
	}
	go();
	$('.banner').hover(function(event){
		$('.banner-right').css('opacity','0.6');
		$('.banner-left').css('opacity','0.6');
		clearInterval(timer);
	},function(event){
		$('.banner-right').css('opacity','0');
		$('.banner-left').css('opacity','0');
		go();
	})
	$('.a4 ul li').hover(function(event){
		n=$(this).index();
		$('.a4 ul li .cover .icon-play').eq(n).addClass('a5').parent().parents().siblings().children().removeClass('a5');
		$('.a4 ul li .cover>img').eq(n).addClass('a6').parent().parents().siblings().children().removeClass('a6');
	},function(event){
		$('.cover .icon-play').removeClass('a5');
		$('.a4 ul li .cover>img').removeClass('a6');
	})
	$('.part1>ul li').click(function(event){
		n=$(this).index();
		$(this).addClass('a1').siblings().removeClass('a1');
		$('.part1>ul>.a1 div.a4').addClass('a3').parents().siblings().children().removeClass('a3');
		$('.part1>ul>.a1 div.a4 ul li').removeClass('a1');
	})
	$('.part1-1 ul li').hover(function(event){
		n=$(this).index();
		$('.part1-1 ul li .cover .icon-play').eq(n).addClass('a5').parent().parents().siblings().children().removeClass('a5');
		$('.part1-1 ul li .cover>img').eq(n).addClass('a6').parent().parents().siblings().children().removeClass('a6');
	},function(event){
		$('.cover .icon-play').removeClass('a5');
		$('.part1-1 ul li .cover>img').removeClass('a6');
	})
	$('.part1-2 ul li').hover(function(event){
		n=$(this).index();
		$('.part1-2 ul li .cover .icon-play').eq(n).addClass('a5').parent().parents().siblings().children().removeClass('a5');
		$('.part1-2 ul li .cover>img').eq(n).addClass('a6').parent().parents().siblings().children().removeClass('a6');
	},function(event){
		$('.cover .icon-play').removeClass('a5');
		$('.part1-2 ul li .cover>img').removeClass('a6');
	})
	$('.part1-3 ul li').hover(function(event){
		n=$(this).index();
		$('.part1-3 ul li .cover .icon-play').eq(n).addClass('a5').parent().parents().siblings().children().removeClass('a5');
		$('.part1-3 ul li .cover>img').eq(n).addClass('a6').parent().parents().siblings().children().removeClass('a6');
	},function(event){
		$('.cover .icon-play').removeClass('a5');
		$('.part1-3 ul li .cover>img').removeClass('a6');
	})
	$('.part1-4 ul li').hover(function(event){
		n=$(this).index();
		$('.part1-4 ul li .cover .icon-play').eq(n).addClass('a5').parent().parents().siblings().children().removeClass('a5');
		$('.part1-4 ul li .cover>img').eq(n).addClass('a6').parent().parents().siblings().children().removeClass('a6');
	},function(event){
		$('.cover .icon-play').removeClass('a5');
		$('.part1-4 ul li .cover>img').removeClass('a6');
	})
}