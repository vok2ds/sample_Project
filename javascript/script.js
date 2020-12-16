$(document).ready(function(){
    
    $(".partner img").click(function(){
	$("#modal").addClass("active");

 });
 $("#modal button").click(function(){
$("#modal").removeClass("active");
 });
    
    $(".mainmenu>li").mouseover(function(){
        $(this).children(".submenu").stop().slideDown()
    });

    
$(".mainmenu>li").mouseleave(function(){
	$(this).children(".submenu").stop().slideUp();
});

 start();
var imgs = 2;
var now = 0;
function start(){
	$(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"});
	setInterval(function(){slide();},2000);
}
function slide(){
	now = now==imgs?0:now+=1;
   
    
	$(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});	
	$(".imgs>img").eq(now).css({"margin-left":"0px"});
}

});

//var partnerimg=document.querySelectorAll("partner");
//var active=document.creatElementByClass("active");
//var img=document.querySelectorAll("img");
//var modal=document.querySelector("#modal");
//var modalbtn=document.querySelector("button");
//partnerimg.addEventListener("click",function(){
//	modal.setAttribute("class","active")
//});
//modalbtn.addEventListener("click",function(){
//
//});
