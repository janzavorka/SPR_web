/* >>>>>  Get number of mini's row <<<<< */
function miniatureByPhoto (photoNum){
	var row = Math.floor(((photoNum - 1 ) / miniaturesInRow)) + 1;
	changeMiniatureRow(row);
}
/*-----------------------------------------------------*/

/* >>>>> Changing row of miniatures <<<<< */
function changeMiniatureRow(n){
	//Check if index is OK
	if(n < 1){
		rowMiniIndex = Math.floor(imageCount / miniaturesInRow) + 1;
		n = rowMiniIndex;
	}
	else if(n > (Math.floor(imageCount / miniaturesInRow)+1)){
		rowMiniIndex = 1;
		n = rowMiniIndex;
	}
	else{
		rowMiniIndex = n;
	}
	var dots = document.getElementsByClassName("miniature");
	var firstMiniature = 1 + miniaturesInRow * (n - 1);
	//Hide all miniatures
	for (i = 0; i < dots.length; i++){
		dots[i].style.display = "none";
	}
	//If miniatures should be displaed, display right amount of them
	if (miniaturesDisplayed){
		for (i = firstMiniature; i < (firstMiniature + miniaturesInRow); i++){
			if (i > imageCount){break;}
			dots[i-1].style.display = "block";
		}
	}
}
/*-----------------------------------------------------*/

/* >>>>>  Change main image <<<<< */
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("miniature");
	var captionText = document.getElementById("caption");
	slideIndex = checkSlideIndex(n);
	lazyPicture(); //Load image if it is not
	//Hide all main images
	for (i = 0; i < slides.length; i++) {
	    	slides[i].style.display = "none";
	}
	//Remove miniature-act class
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" miniature-act",  "");
	}
	/*-----------------------------------------------------*/

	miniatureByPhoto(slideIndex); //Display row of miniatures  according to selected main image
	slides[slideIndex-1].style.display = "block"; //Display selected image
	dots[slideIndex-1].className += " miniature-act"; //Highlight miniature according to selected main image
	//Getting comment
	if (document.getElementById("pictureCommPlace").innerText == ""){ //If no file was imported (place for it is empty)
		captionText.innerHTML = "Comment file not found"; //If there is no comments file imported
		captionText.style.visibility="hidden";
	}
	else{ //If there is comment file imported
		if (document.getElementById("imgC" + slideIndex) == null){ //If there is not comment for picture
			captionText.innerHTML = "Comment not found";
			captionText.style.visibility="hidden";
		}
		else{
			var text = document.getElementById("imgC" + slideIndex).innerHTML; //If there is comment for picture
			captionText.innerHTML= text;
			document.getElementById("mainImg" + slideIndex).alt = document.getElementById("imgC" + slideIndex).textContent; //Give alt attribute to image from file with comment if it is there any
			captionText.style.visibility="visible";
		}
	}
	elemPositioning();
}
/*-----------------------------------------------------*/

/* >>>>>  Check if image index is OK <<<<< */
function checkSlideIndex(n){
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {
		return  1;
	}
	else if (n < 1) {
		return slides.length;
	}
	else{
	return n;
	}
}
/*-----------------------------------------------------*/


/* >>>>>  Open lightbox <<<<< */
function openLightbox() {
  document.getElementById('myLightbox').style.display = "block";
}
/*-----------------------------------------------------*/

/* >>>>>  Close lightbox <<<<< */
function closeLightbox() {
  document.getElementById('myLightbox').style.display = "none";
}
/*-----------------------------------------------------*/

/* >>>>>  Next/previous controls <<<<< */
function plusSlides(n) {
  showSlides(slideIndex += n);
}
/*-----------------------------------------------------*/

/* >>>>>  Row with miniatures change <<<<< */
function plusMiniatureRow(n) {
	changeMiniatureRow(rowMiniIndex += n);
}
/*-----------------------------------------------------*/

/* >>>>>  Thumbnail image controls <<<<< */
function currentSlide(n) {
  showSlides(slideIndex = n);
}
/*-----------------------------------------------------*/

/* >>>>>  Hide or display miniature row <<<<< */
function changeMinisDispState(){
	var minCols = document.getElementsByClassName("column");
	var mainLightBox = document.getElementsByClassName("lightboxContent");
	var mainImgs = document.getElementsByClassName("mainImage");
	miniaturesDisplayed = !miniaturesDisplayed; //Invert state of displaying miniatures
	//Hide/show what is needed (miniatures, arrows, ...)
	if (!miniaturesDisplayed){
		document.getElementsByClassName("hideMinis")[0].title = "Zobrazit miniatury"; //Button title
		document.getElementsByClassName("nextMini")[0].style.display = "none";	//No arrrow for miniatures
		document.getElementsByClassName("prevMini")[0].style.display = "none";
		document.getElementsByClassName("columnMiniButL")[0].style.display = "none";
		for (var i = 0; i < minCols.length; i++){
			minCols[i].style.display = "none";
		}
	}
	else{
		document.getElementsByClassName("hideMinis")[0].title = "Skrýt miniatury";
		document.getElementsByClassName("nextMini")[0].style.display = "block";
		document.getElementsByClassName("prevMini")[0].style.display = "block";
		document.getElementsByClassName("columnMiniButL")[0].style.display = "block";
		for (var i = 0; i < minCols.length; i++){
			minCols[i].style.display = "block";
		}
	}
	miniatureByPhoto(slideIndex);
	elemPositioning(); //Reposition all elements
}
/*-----------------------------------------------------*/

/* >>>>> Positioning of arrow for changing image/miniature (calling when window size is changed) <<<<< */
function elemPositioning(){
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var mainImgs = document.getElementsByClassName("mainImage");
	var mainPrev = document.getElementsByClassName("prev");
	var mainNext = document.getElementsByClassName("next");
	var mainMaxWidth = document.getElementById("lbContent").offsetWidth;

	//Changing maximum dimension of main image according to if miniatures are displayed
	if(miniaturesDisplayed){
		mainImgs[slideIndex-1].style.cssText = "max-height:" + windowHeight*0.7 + "px";
		document.getElementById("lbContent").style.cssText = "max-height:" + windowHeight*0.7 + "px";
	}
	else{
		mainImgs[slideIndex-1].style.cssText = "max-height:" + windowHeight*0.90 + "px";
		document.getElementById("lbContent").style.cssText = "max-height:" + windowHeight*0.90 + "px";
	}

	//Values of actual main image
	var mainWidth = mainImgs[slideIndex-1].offsetWidth;
	var mainHeight = mainImgs[slideIndex-1].offsetHeight;

	//Positioning main image arrows
	//Disablig/deleting transition for better look
	mainPrev[0].style.transition = "0.0s ease";
	mainNext[0].style.transition = "0.0s ease";
	mainPrev[0].style.top = mainHeight/2 + "px";
	mainNext[0].style.top = mainHeight/2 + "px";
	mainPrev[0].style.left = (mainMaxWidth-mainWidth)/2 - 1 + "px";
	mainNext[0].style.right = (mainMaxWidth-mainWidth)/2 + "px";

	//After positioning (few miliseconds wait) get transition back
	setTimeout(function(){
		mainPrev[0].style.transition = "0.6s ease";
		mainNext[0].style.transition = "0.6s ease";
	}, 400);

	// Positioning main image number
	document.getElementsByClassName("numbertext")[slideIndex-1].style.left = (mainMaxWidth-mainWidth)/2 + "px";

	// Positioning box for changing main image
	var boxPrev = document.getElementsByClassName("prevBox")[0];
	var boxNext = document.getElementsByClassName("nextBox")[0];

	if(miniaturesDisplayed){
		boxPrev.style.cssText = "max-height:75vh";
		boxNext.style.cssText = "max-height: 75vh";
	}
	else {
		boxPrev.style.cssText = "max-height: 89vh";
		boxNext.style.cssText = "max-height: 89vh";
	}
	//Changing dimensions of the boxes according to dimensions of main image
	boxPrev.style.width = mainWidth/2 + "px";
	boxNext.style.width = mainWidth/2 + "px";
	boxPrev.style.left = (mainMaxWidth-mainWidth)/2 + "px";
	boxNext.style.right = (mainMaxWidth-mainWidth)/2 + "px";
	boxPrev.style.height = mainHeight + "px";
	boxNext.style.height = mainHeight + "px";

	//Positioning buttons for cahnging miniatures
	var minisHeight = document.getElementsByClassName("miniature")[slideIndex-1].offsetHeight;
	var minisPrev = document.getElementsByClassName("prevMini")[0];
	var minisNext = document.getElementsByClassName("nextMini")[0];
	//Disablig/deleting transition for better look
	minisPrev.style.transition = "0.0s ease";
	minisNext.style.transition = "0.0s ease";
	//Positioning buttons
	minisPrev.style.top = minisHeight/2 - 25  + "px";
	minisNext.style.top = minisHeight/2 - 25  + "px";
	//After positioning (few miliseconds wait) get transition back
	setTimeout(function(){
		minisPrev.style.transition = "0.6s ease";
		minisNext.style.transition = "0.6s ease";
	}, 400);
	/*-----------------------------------------------------*/

	/* >>>>> Positioning and changing number of miniatures in row according to viewport width <<<<< */
	var allMinis = document.getElementsByClassName("miniature"); //Dodělat tak aby se počet miniatur v řádku měnil podle šířky obrazovky
	var minCols = document.getElementsByClassName("column");
	var prevMinisSpaceWidth = document.getElementsByClassName("columnMiniButL")[0].offsetWidth; //Get dimension for left button for displaying previous minis
	var spaceForMinis = (1 - 2*(prevMinisSpaceWidth/windowWidth))*100; //Space for miniatures [%] width of space of buttons is substract from width of viewport
	var minisWidth = allMinis[slideIndex-1].naturalWidth; //Use displayed miniature
	//Count number of miniatures in row
	var minisNumber = Math.floor((windowWidth*(spaceForMinis/100)) / minisWidth);
	if ((minisNumber != miniaturesInRow) && (minisNumber > 5)){ //Don't show less than 6 miniatures, do it only if number of displayed miniature would change
		for(var i = 0; i < minCols.length; i++){ //Size of class column which is holding miniature
			minCols[i].style.width = (spaceForMinis) / minisNumber + "%";
		}
		miniaturesInRow = minisNumber;
		miniatureByPhoto (slideIndex); //Check if are displayed miniature according to main image
	}
}
	/*-----------------------------------------------------*/

/* >>>>> Change path and file name (by changing html attributes) according to which picture is displayed <<<<< */
function downloadPicturePath() {
	document.getElementById("imgDownload").href = "foto/" + year + "/" + year + "_" + (slideIndex) + ".jpg";
	document.getElementById("imgDownload").download = "SprintProtiRadaru" + year + "_foto" + (slideIndex) + ".jpg";
}
/*-----------------------------------------------------*/

/* >>>>> LAZY LOADING (assign real path to main picture) <<<<< */
function lazyPicture(){
	var prevIm = checkSlideIndex(slideIndex - 1);
	var nextIm = checkSlideIndex(slideIndex + 1);
	var thisMainImage = document.getElementById("mainImg" + slideIndex);
	var prevMainImage = document.getElementById("mainImg" + prevIm);
	var nextMainImage = document.getElementById("mainImg" + nextIm);
	if(thisMainImage.alt == "unloaded"){
		//Hide control elements (looks better if it shows after loading)
		document.getElementsByClassName("numbertext")[slideIndex-1].style.display = "none";
		document.getElementsByClassName("prev")[0].style.display = "none";
		document.getElementsByClassName("next")[0].style.display = "none";
		loadImage (thisMainImage, slideIndex);
	}
	//Preload next and previous image (better performance)
	if(prevMainImage.alt == "unloaded") {
		loadImage (prevMainImage, prevIm);
	}
	if(nextMainImage.alt == "unloaded") {
			loadImage (nextMainImage, nextIm);
	}
}
/*-----------------------------------------------------*/

/* >>>>> Load image <<<<< */
function loadImage (image, number){
	image.style.visibility='hidden' //Hide image until it isn't loaded
	//Show loader
	var loader = document.createElement('div'); //Create loader
	loader.className = 'loader'; //Give class
	image.parentNode.appendChild(loader); //Insert it
	console.log(image.parentElement);
	image.addEventListener("load", deleteLoader);

	//if problem with loading image (for other suffixes)
	image.addEventListener("error", imageError)

	//Prepare image
	image.removeAttribute("height");
	image.removeAttribute("width");
	image.alt = "Sprint proti radaru " + year;
	image.src = "foto/" + year + "/" + year + "_" + number + ".jpg";

}
/*-----------------------------------------------------*/

/* >>>>> If image is loaded, delete loader <<<<< */
function deleteLoader (){
	var loader = this.parentNode.getElementsByClassName('loader')[0]; //Get loader
	console.log(loader);
	showControlElem();
	this.removeEventListener("load", deleteLoader);
	this.parentNode.removeChild(loader); //Delete loader
	this.style.visibility = "visible"; //Show image
}
/*-----------------------------------------------------*/

/* >>>>> If error while loading image (image not found), trying other image filename extension <<<<< */
function imageError(){
	var srcText = decodeURI(this.src); //Function to replace special chars from URL and returning string
	console.log(srcText);
	if(srcText.endsWith(imageSuffix[imageSuffix.length-1])){ //If all were tried, replace with error text
		this.removeEventListener("error", imageError);
		this.alt = "Obrázek nebyl nalezen";
		this.src = "img/transparent.png"; //add transparent image (formatting reason)
		var error = document.createElement('p'); //add error text
		error.className = 'imageErr';
		var errorMessage = document.createTextNode("Omlouváme se, fotografie není k dispozici");
		error.appendChild(errorMessage);
		this.parentNode.appendChild(error); //Insert it
		//Delete loader symbol
		var loader = this.parentNode.getElementsByClassName('loader')[0]; //Get loader
		this.parentNode.removeChild(loader); //Delete loader
	}
	else{ //Else try other specified
		for(var i = 0; i < imageSuffix.length; i++){
			if(srcText.endsWith(imageSuffix[i])){
				console.log("Obrazek zkousim" + imageSuffix[i+1]);
				this.src = encodeURI(srcText.substring(0, srcText.lastIndexOf("."))) + imageSuffix[i+1];
				console.log("Nova src: " + this.src)
				break;
			}
		}
	}
}
/*-----------------------------------------------------*/

/* >>>>> Show control elements <<<<< */
function showControlElem(){
	document.getElementsByClassName("numbertext")[slideIndex-1].style.display = "block";
	document.getElementsByClassName("prev")[0].style.display = "block";
	document.getElementsByClassName("next")[0].style.display = "block";
	elemPositioning();
}
/*-----------------------------------------------------*/
