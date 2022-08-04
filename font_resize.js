$(document).ready(function(){
	var curr_font_in_pixels = 0;
	var curr_padding_in_pixels = 0;
	var curr_font = 0;
	var curr_padding = 0;
	var resize = new Array(".alltext","h3","h5");
	resize = resize.join(",");
	$("#increase").click(function(){
		
		curr_font_in_pixels = $(".alltext").css("font-size");
		curr_font = parseInt(curr_font_in_pixels);
		curr_padding_in_pixels = $(".alltext").css("padding");
		curr_padding = parseInt(curr_padding_in_pixels);
		alert("Font: " + curr_font*1.2 + " Padding: " + curr_padding*1.2);
		$(resize).css("font-size", curr_font*1.2);
		$(resize).css("padding", curr_padding*1.2);
	});
	
	$("#decrease").click(function(){
		
		alert("You wanna decrease");
		curr_font_in_pixels = $(".alltext").css("font-size");
		curr_font = parseInt(curr_font_in_pixels);
		
		if(curr_font>10){
			$(resize).css("font-size", curr_font*0.8);
		}
	});
});
