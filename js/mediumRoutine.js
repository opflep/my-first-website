$(document).ready(function() {
	
	var tt = 0;
		

	$("#next").click(function(){
				
		if(tt >= 40){
		tt = 0;
		}
		else{
		tt = tt +1;
		}
		$(".routine img").css({"display":"none"});
		$(".routine img").eq(tt).css({"display":"inherit"});
		$("#roun").text(tt+1 + "/42");
	});
		
		
	$("#prev").click(function(){
				
		if(tt <= 0){
		tt = 40;
		}
		else{
		tt = tt -1;
		}
		$(".routine img").css({"display":"none"});
		$(".routine img").eq(tt).css({"display":"inherit"});
		$("#roun").text(tt+1 + "/41");
	});
		
});