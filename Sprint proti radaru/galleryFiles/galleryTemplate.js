/* Other variables */
		var slideIndex = 1;	//Now displayed image
		var miniaturesInRow = 6;//Miniatures in one row
		var rowMiniIndex = 1;	//Now displayed row of miniatures
		var year = 1; 		//Year as string
		var allImages = 1;	//Amount of images as string

		var miniaturesDisplayed = new Boolean(true); //State of displaying miniatures
		var commentsReady = true;	//Use imported comments
		var previousOrientation = "unknown";

		var imageSuffix = [".jpg", ".gif", ".png"]; //Defines all possible image filename extensions (default is .jpg)
		const errImageAltText = "Obrázek nebyl nalezen";

		window.onload = function() {
			year = galleryYear.toString();
			allImages = imageCount.toString();
			var gal = '<span class = "font-title">Foto galerie ' + galleryYear + '</span><br><br>'; //Title

			//All thumbnails
			for (var i=1; i<=imageCount; i++){
				var num = i.toString();
				gal = gal + '<img src="foto/' + year + '_m/' + year + '_' + num + '.jpg" class="thumbnail" onclick="openLightbox();currentSlide(' + i + ');">';
			};

			gal = gal + '<div class="galleryBox">';
			gal = gal + '<div id="myLightbox" class="lightbox">';
			//Control buttons
			gal = gal + '<span class="rightControlButtons">'
			gal = gal + '<div class="close cursor" title="Zavřít" onclick="closeLightbox()"></div>'; //Close
			gal = gal + '<div class="hideMinis" title="Skrýt miniatury" onclick="changeMinisDispState()"></div>'; //Hide/show miniatures
			gal = gal + '<div><a id="imgDownload" class="downloadImageIcon" onmouseover="downloadPicturePath()" href="foto/' + year + '/' + year + '_1.jpg" download="SprintProtiRadaru' + year + '_foto1.jpg" title="Stáhnout tuto fotografii"></a></div>'; //Download image
			gal = gal + '</span>'
			gal = gal + '<div id="lbContent" class="lightboxContent">';

			//Main Images
			for (var i=1; i<=imageCount; i++){
				var num = i.toString();
				gal = gal + '<div class="mySlides">';
				gal = gal + '<div class="numbertext">' + num + '/' + allImages + '</div>';
				gal = gal + '<img alt="unloaded" class="mainImage" id="mainImg' + num + '" src="img/transparent.png">';
				gal = gal + '</div>';
			};

			//Image change
			gal = gal + '<a class="prev"  onclick="plusSlides(-1)">&#10094;</a>';
			gal = gal + '<a class="next"  onclick="plusSlides(1)">&#10095;</a>';
			//gal = gal + '<a class="nextBox"  onclick="plusSlides(1)"></a>';
			//gal = gal + '<a class="prevBox"  onclick="plusSlides(-1)"></a>';

			//Caption
			gal = gal + '<div class="caption-container">';
			gal = gal + '<p id="caption"></p>';
			gal = gal + '</div>';

			//Thumbnail (miniatures)
			gal = gal + '<div id="rowOfMiniatures" class="miniatureRow">'; //For positioning
			gal = gal + '<a class="prevMini" onclick="plusMiniatureRow(-1)">&#10094;</a>'; //Change row of miniatures (previous)
			gal = gal + '<div class="columnMiniButL">Do not be scared, there is nothing here';
			gal = gal + '</div>';

			//Thumbnail (miniature) import
			for (var i=1; i<=imageCount; i++){
				var num = i.toString();
				gal = gal + '<div class="column">';
				gal = gal + '<img style="max-height:18vh" class="miniature" src="foto/' + year + '_m/' + year + '_' + num + '.jpg" onclick="currentSlide(' + num + ')" alt="miniature_' + num + '">';
				gal = gal + '</div>';
			};

			gal = gal + '<a class="nextMini" onclick="plusMiniatureRow(1)">&#10095;</a>'; //Change row of miniatures
			gal = gal + '</div>';
			gal = gal + '</div></div>';
			gal = gal + '</div>';
			gal = gal + '<div id="pictureCommPlace" style="display:none" include-html="pictureComments/' + year + '.html"></div>'; //Importing page with photo comments

			document.getElementById('gallery-place').innerHTML = gal; //Print gal to html page

			includeHTML(); //Do all include-html
			processSizeChange();
			window.addEventListener('resize', processSizeChange); //Check if window size is changed and position control element

			//window.addEventListener('resize',  processOrientationChange); //Check if window size is changed and position control elementss
			//window.addEventListener('orientationchange', processOrientationChange, true); //For hiding/showing minis automaticly in mobile browsers
			openImageByParameter(); //Open photo respective to URL parametr
		}
