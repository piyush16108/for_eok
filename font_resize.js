$(document).ready(function(){
	var curr_font_in_pixels_h3 = 0;
	var curr_font_h3 = 0;
	var curr_font_in_pixels_h5 = 0;
	var curr_font_h5 = 0;
	var curr_font_in_pixels_alltext = 0;
	var curr_font_alltext = 0;
	var resize = new Array(".alltext","h3","h5");
	resize = resize.join(",");
	$("#increase").click(function(){

		curr_font_alltext = parseInt($(".alltext").css("font-size"));
		curr_font_h3 = parseInt($("h3").css("font-size"));
		curr_font_h5 = parseInt($("h5").css("font-size"));
		alert("curr_font_alltext - " + (curr_font_alltext + 5)
		     + "curr_font_h3" + curr_font_h3 + 5
		     + "curr_font_h5" + curr_font_h5 + 5);
		$(".alltext").css("font-size", curr_font_alltext + 5);
		$("h3").css("font-size", curr_font_h3 + 5);
		$("h5").css("font-size", curr_font_h5 + 5);
	});
	
	$("#decrease").click(function(){
		
		//alert("You wanna decrease");
		curr_font_in_pixels = $(".alltext").css("font-size");
		curr_font = parseInt(curr_font_in_pixels);
		
		if(curr_font>10){
			$(resize).css("font-size", curr_font - 10);
		}
	});
});
