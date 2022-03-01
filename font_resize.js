$(document).ready(function(){
	
	var resize = new Array(".alltext","h3","h5");
	resize = resize.join(",");
	$("#increase").click(function(){
		var curr_font_in_pixels = $(".alltext").css("font-size");
		var curr_font = parseInt(curr_font_in_pixels);
		//alert(curr_font + 10);
		$(resize).css("font-size", curr_font + 10);
	});
	
	$("#decrease").click(function(){
		if($(".alltext").css("font-size")>5){
			$(".alltext").css("font-size", $(".alltext").css("font-size") - 5);
		}
	});
});
