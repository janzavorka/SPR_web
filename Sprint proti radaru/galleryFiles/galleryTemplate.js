/* Other variables */
		const galleryValuesJSON_URL = "foto/galleryValues.json";
		//const galleryValuesJSON_URL = "http://novy.sprintprotiradaru.cz/foto/galleryValues.json";
		const galleryYearURLParam = 'year';
		var imageCount = 1;
		var galleryYear = 0;

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
		const firstRaceYear = 2014;

		window.onload = function() {
			loadJSON(galleryValuesJSON_URL, setupGalleryValues);
		}

		function setupGalleryValues(valuesJSON){
			if(valuesJSON != null && valuesJSON.length > 0){
				var urlYear = getURLParameterNumber(galleryYearURLParam);
				if (urlYear == -1){
					//find most recent year
					if((valuesJSON[valuesJSON.length-1].year >= firstRaceYear) && (valuesJSON[valuesJSON.length-1].imageCount > 0)){
						galleryYear = valuesJSON[valuesJSON.length-1].year;
						imageCount = valuesJSON[valuesJSON.length-1].imageCount;
						editURLParameter(galleryYearURLParam, galleryYear);
						makeGallery();
						return;
					}
				}
				else{
					var data_filter = valuesJSON.find( element => element.year == urlYear);
					if (data_filter != null||undefined){
						galleryYear = data_filter.year;
						imageCount = data_filter.imageCount;
						makeGallery();
						return;
					}
				}
			}
			error_galleryMessage();

		}


		function makeGallery() {
			year = galleryYear.toString();
			allImages = imageCount.toString();
			var gal = '<span class = "font-title">Foto galerie ' + galleryYear + '</span><br><br>'; //Title

			//All thumbnails
			for (var i=1; i<=imageCount; i++){
				var num = i.toString();
				gal += '<img src="foto/' + year + '_m/' + year + '_' + num + '.jpg" class="thumbnail" onclick="openLightbox();currentSlide(' + i + ');">';
			};

			gal += '<div class="galleryBox">';
			gal += '<div id="myLightbox" class="lightbox">';
			//Control buttons
			gal += '<span class="rightControlButtons">'
			gal += '<div class="close cursor" title="Zavřít" onclick="closeLightbox()"></div>'; //Close
			gal += '<div class="hideMinis" title="Skrýt miniatury" onclick="changeMinisDispState()"></div>'; //Hide/show miniatures
			gal += '<div><a id="imgDownload" class="downloadImageIcon" onmouseover="downloadPicturePath()" href="foto/' + year + '/' + year + '_1.jpg" download="SprintProtiRadaru' + year + '_foto1.jpg" title="Stáhnout tuto fotografii"></a></div>'; //Download image
			gal += '</span>'
			gal += '<div id="lbContent" class="lightboxContent">';

			//Main Images
			for (var i=1; i<=imageCount; i++){
				var num = i.toString();
				gal += '<div class="mySlides">';
				gal += '<div class="numbertext">' + num + '/' + allImages + '</div>';
				gal += '<img alt="unloaded" class="mainImage" id="mainImg' + num + '" usemap="#imageNavigationMap" src="img/transparent.png">';
				gal += '</div>';
			};

			gal += '<map name="imageNavigationMap" id="imageNavigation">';
  		gal += '<area id="imageNavigationPrev" shape="rect" coords="0,0,100,100" alt="imagePrev" onclick="plusSlides(-1)">';
  		gal += '<area id="imageNavigationNext" shape="rect" coords="101,0,200,200" alt="imageNext" onclick="plusSlides(1)">';
			gal += '</map>';

			//Image change
			gal += '<a class="prev"  onclick="plusSlides(-1)">&#10094;</a>';
			gal += '<a class="next"  onclick="plusSlides(1)">&#10095;</a>';

			//Caption
			gal += '<div class="caption-container">';
			gal += '<p id="caption"></p>';
			gal += '</div>';

			//Thumbnail (miniatures)
			gal += '<div id="rowOfMiniatures" class="miniatureRow">'; //For positioning
			gal += '<a class="prevMini" onclick="plusMiniatureRow(-1)">&#10094;</a>'; //Change row of miniatures (previous)
			gal += '<div class="columnMiniButL">Do not be scared, there is nothing here';
			gal += '</div>';

			//Thumbnail (miniature) import
			for (var i=1; i<=imageCount; i++){
				var num = i.toString();
				gal += '<div class="column">';
				gal += '<img style="max-height:18vh" class="miniature" src="foto/' + year + '_m/' + year + '_' + num + '.jpg" onclick="currentSlide(' + num + ')" alt="miniature_' + num + '">';
				gal += '</div>';
			};

			gal += '<a class="nextMini" onclick="plusMiniatureRow(1)">&#10095;</a>'; //Change row of miniatures
			gal += '</div>';
			gal += '</div></div>';
			gal += '</div>';
			gal += '<div id="pictureCommPlace" style="display:none" include-html="pictureComments/' + year + '.html"></div>'; //Importing page with photo comments

			document.getElementById('gallery-place').innerHTML = gal; //Print gal to html page

			includeHTML(); //Do all include-html
			processSizeChange();
			window.addEventListener('resize', processSizeChange); //Check if window size is changed and position control element

			//window.addEventListener('resize',  processOrientationChange); //Check if window size is changed and position control elementss
			//window.addEventListener('orientationchange', processOrientationChange, true); //For hiding/showing minis automaticly in mobile browsers
			openImageByParameter(); //Open photo respective to URL parametr
		}

		function error_galleryMessage(){
				var gal = '<span class = "font-title">Chyba galerie!</span><br><br>'; //Title
				gal += '<div>Fotografie nebyly nalezeny a načtení galerie neproběhlo úspěšně. <br> Pokud problémy přetrvávají, kontaktujte nás.';
				document.getElementById('gallery-place').innerHTML = gal; //Print gal to html page
				document.title = "Chyba galerie!";
		}
