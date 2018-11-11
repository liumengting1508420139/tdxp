
var i=0;
var timer;

$(function(){	
	$(".ig").eq(0).show().siblings().hide();
	ShowTimer();
	$(".tab").hover(function(){
		i=$(this).index();
		Show();
		clearInterval(timer);

	},function(){
		ShowTimer();
});
$(".btn1").click(function(){
	clearInterval(timer);
	if(i==0)
	{
		i=5;
	}
	i--;
	Show();
	ShowTimer();
	
});



$(".btn2").click(function(){
	clearInterval(timer);
	if(i==4)
	{
		i=-1;
	}
	i++;
	Show();
	ShowTimer();
	
});
$(".list1>li")
		.mouseover(function() {
			$(this).find("ul").stop().slideDown(500);
		})
		.mouseout(function() {
			$(this).find("ul").stop().slideUp(500);
		});



});
function Show()
{
	$(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
		$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
function ShowTimer(){
	timer=setInterval(function(){
		i++;
		if(i==6)
		{
		i=0;		
		}
		Show();
	},4000);
		

}

