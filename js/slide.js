$(document).ready(function() {
	
	
	$("#nav0").click(function(){
		tt=0;$(".slide img").hide("fast");
		$(".slide img").eq(tt).fadeIn(0);
		$(".nivo-controlNav a").removeClass('nivo-control active');
		$(".nivo-controlNav a").eq(tt).addClass('nivo-control active');});
	$("#nav1").click(function(){
		tt=1;$(".slide img").hide("fast");
		$(".slide img").eq(tt).fadeIn(0);
		$(".nivo-controlNav a").removeClass('nivo-control active');
		$(".nivo-controlNav a").eq(tt).addClass('nivo-control active');});
	$("#nav2").click(function(){
		tt=2;$(".slide img").hide("fast");
		$(".slide img").eq(tt).fadeIn(0);
		$(".nivo-controlNav a").removeClass('nivo-control active');
		$(".nivo-controlNav a").eq(tt).addClass('nivo-control active');});
	$("#nav3").click(function(){
		tt=3;$(".slide img").hide("fast");
		$(".slide img").eq(tt).fadeIn(0);
		$(".nivo-controlNav a").removeClass('nivo-control active');
		$(".nivo-controlNav a").eq(tt).addClass('nivo-control active');});
	
	$("#expand1").click(function(){
		$(".expand a").removeAttr('style');
		$("#expand1 a").css({color:'#00FF00'});
	 	$(".sub_menu").slideUp();
		$("#sub_menu1").slideToggle("slow");
	
	});
	
	$("#expand2").click(function(){
		$(".expand a").removeAttr('style');
		$("#expand2 a").css({color:'#00FF00'});
		$(".sub_menu").slideUp();
		$("#sub_menu2").slideToggle("slow");
	
	});

	$("#expand3").click(function(){
		$(".expand a").removeAttr('style');
		$("#expand3 a").css({color:'#00FF00'});
		$(".sub_menu").slideUp();
		$("#sub_menu3").slideToggle("slow");
	
	});
	
	$("#expand4").click(function(){
		$(".expand a").removeAttr('style');
		$("#expand4 a").css({color:'#00FF00'});
		$(".sub_menu").slideUp();
		$("#sub_menu4").slideToggle("slow");
	
	});
	
	$(".grid2").click(function(){
		$(".expand a").removeAttr('style');
		$(".sub_menu").slideUp();
			
	});
	
	$(".sub_menu li a").hover(function(){
    $(this).css({color:'#00FF00'});
},
function(){
	$(this).removeAttr('style');}
);
	
	
	
});

