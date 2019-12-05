/*
* @Author: admin
* @Date:   2019-11-25 10:41:44
* @Last Modified by:   admin
* @Last Modified time: 2019-12-05 16:02:43
*/
window.onload=function(){
	$('.nav ul li:nth-child(6) a').hover(function(){
		$('.nav ul li a .sub-nav').show();
	},function(){
		$('.nav ul li a .sub-nav').hide();
	});
	$('.icon2').hover(function(){
		$('.icon2').stop().animate({'right':'0px'},1000);
	},function(){
		$('.icon2').stop().animate({'right':'-286px'},1000);
		$('.nav-list').css('display','none');
	})
	$('input[type="text"]').click(function(){
			$('.nav-list').stop().slideDown(1000);
	});
	$('.banner-left').hover(function(event){
		$('.banner-left').css('opacity','1');
	},function(event){
		$('.banner-left').css('opacity','0.6');
	})
	$('.banner-right').hover(function(event){
		$('.banner-right').css('opacity','1');
	},function(event){
		$('.banner-right').css('opacity','0.6');
	})

	var n=0;
	var timer;
	$('.sub-nav1 ul li a').click(function(event){
		n=$(this).index();
		$(this).addClass('a1').parents().siblings().children().removeClass('a1');
	})
	$('.table_list ol li').click(function(event){
		n=$(this).index();
		$(this).addClass('a1').siblings().removeClass('a1');
		$('.rank_left ul').eq(n).addClass('tab_part').siblings().removeClass('tab_part');
	})
	$('.rank_left ul li').click(function(event){
		n=$(this).index();
		$(this).addClass('mark2').siblings().removeClass('mark2');
	})
	$('.part4 ol li').click(function(event){
		n=$(this).index();
		$(this).addClass('a1').siblings().removeClass('a1');
		$('.part4 ol .a1 .s').addClass('s1').parent().siblings().children().removeClass('s1');
	})
	$('.tag-en li').click(function(event){
		n=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.tag-kind li').click(function(event){
		n=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.sub_nav2 ul span').click(function(event){
		n=$(this).index();
		$(this).addClass('a2').siblings().removeClass('a2');
	})
	$('.part1>ul li').click(function(event){
		n=$(this).index();
		$(this).addClass('a1').siblings().removeClass('a1');
		$('.part1>ul>.a1 div.a4').addClass('a3').parents().siblings().children().removeClass('a3');
		$('.part1>ul>.a1 div.a4 ul li').removeClass('a1');
	})
	$('.banner #nav1>ol li').mouseenter(function(event){
		n=$(this).index();
		$('.banner ul').stop().animate({'margin-left':-1118*n+'px'},1000);
		$(this).addClass('a2').siblings().removeClass('a2');
	})
	$('.banner-left').click(function(event){
		n--;
		if(n<0)
			{
				$('.banner #nav1>ol li').eq(4).addClass('a2').siblings().removeClass('a2');
				$('.banner ul').css('margin-left','-5590px');
				n=4;
			}
		$('.banner ul').stop().animate({'margin-left':-1118*n+'px'},1000);
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
		$('.banner ul').stop().animate({'margin-left':-1118*n+'px'},1000);
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
			$('.banner ul').stop().animate({'margin-left':-1118*n+'px'},1000);
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
	$(window).scroll(function(){
		var i=$(this).scrollTop();
				if(i>400)
		{
			$('.platform').fadeIn(500);
		}
		else{
			$('.platform').fadeOut(500);
		}

	})
	$('.icon_up').click(function(){
		var y=$('.header').offset().Top;
		$('html,body').stop().animate({'scrollTop':y+'px'},1000);
				
	})
	$('input').click(function(event) {
		var tag='<div></div>';
		tag=$(tag).addClass('box');
		var tag1='<div></div>';
		tag1=$(tag1).addClass('box1');
		var tag2='<span></span>'
		tag2=$(tag2).html('X');
		var tag3='<ul><li><div class="icon_icon2"></div></li><li><div class="icon_icon2"></div></li><li><div class="icon_icon2"></div></li><li><div class="icon_icon2"></div></li></ul>';
		var tag4='<a href="#">快速登录|注册</a>';
		var tag5='<p>同意 《酷我音乐用户服务协议》 《隐私政策》</p>';
		tag1=$(tag1).prepend(tag5);
		tag1=$(tag1).prepend(tag4);
		tag1=$(tag1).prepend(tag3);
		tag1=$(tag1).prepend(tag2);
		tag=$(tag).prepend(tag1);
		$('body').prepend(tag);
		$('span').click(function(event) {
			$('.box').remove();
		});
	});
	$('.s2 li:nth-child(1)').click(function(event) {
		var tag='<div></div>';
		tag=$(tag).addClass('video_play');
		var tag1='<div></div>';
		tag1=$(tag1).addClass('video_play1');
		var tag2='<span></span>'
		tag2=$(tag2).html('X');
		var tag3='<video width="800" controls autoplay muted><source src="video/62260197.mp4" type="video/mp4"></video>';
		tag1=$(tag1).prepend(tag3);
		tag1=$(tag1).prepend(tag2);
		tag=$(tag).prepend(tag1);
		$('body').prepend(tag);
		$('span').click(function(event) {
			$('.video_play').remove();
		});
	});
	$('video').hover(function(event){
		$('.video_play .video_play1 span').slow();
	},function(event){
		$('.video_play .video_play1 span').hide();
	})
}