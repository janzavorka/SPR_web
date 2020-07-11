/* >>>>>  Function for inserting html/text file to existing html page <<<<< */
/* How to use it:
*   place "<div include-html="content.html"></div>" where html should be placed
*   call includeHTML() at the bottom of the page
*/
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
/*-----------------------------------------------------*/

/* >>>>>  Function for inserting html/text file to existing html page <<<<< */
/* How to use it:
*   place "<div include-html="content.html"></div>" where html should be placed
*   call includeHTML() at the bottom of the page
*/
function editURLParameter(parameter, value) {
  const params = new URLSearchParams(location.search); //Read URL
  params.set(parameter, value); //Update parameters
  window.history.replaceState({}, '', `${location.pathname}?${params}`); //Update user URL
  return;
}
/*-----------------------------------------------------*/
