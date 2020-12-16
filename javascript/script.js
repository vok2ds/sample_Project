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
    ;
});
    
$(".mainmenu>li").mouseleave(function(){
	$(this).children(".submenu").stop().slideUp();
});

 

});

// var partnerimg=document.querySelectorAll("partner");
// var active=document.creatElementByClass("active");
// var img=document.querySelectorAll("img");
// var modal=document.querySelector("#modal");
// var modalbtn=document.querySelector("button");
// partnerimg.addEventListener("click",function(){
// 	modal.setAttribute("class","active")
// });
// modalbtn.addEventListener("click",function(){
// 	modal.
// });
