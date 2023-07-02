/* >>>>> Validating contact form <<<<< */
function validateForm(){
  console.log("Kontroluji údaje ve formuláři");
  var formOK = true;
  //Form inputs
  var mail = document.getElementById("email").value;
  var message = document.getElementById("text").value;
  var antibot = document.getElementById("test_URL").value;
  //Error fields
  var mailErr = document.getElementById("emailErr");
  var textErr = document.getElementById("textErr");
  //Email testing
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    mailErr.innerText = "";
  }
  else{
    formOK = false;
    mailErr.innerText = "Zadejte email."
  }
  //Message testing (if it is not empty)
  if(message==""){
    formOK = false;
    textErr.innerText = "Zadejte prosím zprávu.";
  }
  else {
    textErr.innerText = "";
  }
  //Antibot testing (field should be empty)
  if(antibot!=""){
    formOK = false;
  }
  // Antibot captcha testing
  var captcha_response = grecaptcha.getResponse();
  if (captcha_response.length == 0){
    formOK = false;
    textErr.innerText = "Captcha error"
  }
  else{
    // textErr.innerText = "Captcha OK"
  }
  return formOK;
}
/*-----------------------------------------------------*/
