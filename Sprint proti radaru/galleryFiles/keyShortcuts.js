/*
	When key is pressed something happen
*/
document.onkeydown = function(e) {
	var event = window.event || e;
	var key = event.keyCode;
	switch(key){
		case 27: //Close light box (escape)
			closeLightbox();
			break;

		case 37: //Show previous main image (left arrow)
			plusSlides(-1);
			break;
		
		case 39: //Show next main image (right arrow)
			plusSlides(1);
			break;
		
		case 38: //Show next miniatures row (up arrow)
			plusMiniatureRow(1);
			break;

		case 40: //Show previous miniature row (down arrow)
			plusMiniatureRow(-1);
			break;
	}
}
