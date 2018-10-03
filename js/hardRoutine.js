$(document).ready(function() {
	
	var tt = 0;
		

	$("#next").click(function(){
				
		if(tt >= 14){
		tt = 0;
		}
		else{
		tt = tt +1;
		}
		$(".routine img").css({"display":"none"});
		$(".routine img").eq(tt).css({"display":"inherit"});
		$("#roun").text(tt+1 + "/15");
	});
		
		
	$("#prev").click(function(){
				
		if(tt <= 0){
		tt = 14;
		}
		else{
		tt = tt -1;
		}
		$(".routine img").css({"display":"none"});
		$(".routine img").eq(tt).css({"display":"inherit"});
		$("#roun").text(tt+1 + "/15");
	});
		
});