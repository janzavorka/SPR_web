
function EUCookieCallback( action, label ) {
		//console.log(action, label);
		// Example output: 'no-show', 'unsupported browser'
		if (label == "consent"){ //If using cookie is OK, analyse
			console.log("Analýza návštěvnosti povolena");
			//Google
			    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			    ga('create', 'UA-102260641-1', 'auto');
			    ga('send', 'pageview');
		}
}

var fucking_eu_config = {
		"l18n": {
			"text": "Tento web používá k analýze návštěvnosti soubory cookie. Používáním tohoto webu s tím souhlasíte."
		},
		"options": {
			"callback": EUCookieCallback
		}
	};
