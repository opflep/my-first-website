$(document).ready(function() {
	
	var tt = 0;
		

	$("#next").click(function(){
				
		if(tt >= 3){
		tt = 0;
		}
		else{
		tt = tt +1;
		}
		$(".slide img").hide("fast");
		$(".slide img").eq(tt).show("fast");
		$(".nivo-controlNav a").removeClass('nivo-control active');
		$(".nivo-controlNav a").eq(tt).addClass('nivo-control active');

	});
	setInterval(function(){
		$("#next").click();
	},5000);
	
});