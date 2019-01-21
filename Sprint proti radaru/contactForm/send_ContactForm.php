<?php
$code = 303;
$url_OK =  'http://sprintprotiradaru.cz/kontakty_poodeslaniok.html';
$url_FAIL =  'http://sprintprotiradaru.cz/kontakty_poodeslanifail.html';
$mail_stat = FALSE;


//Form validation (has to be done here if user has JS disabled)
//Filter for email, message isn't empty and antibot (input which is for human invisible) empty
if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) and !empty($_POST['text']) and empty($_POST['url']))  {
  //Read inputs
  $mail = test_input($_POST['email']);
  $message = test_input($_POST['text']);
  //Prepare email
	$to = "info@sprintprotiradaru.cz";
	$extra .= "From: ".$mail."\r\nReply-To: ".$mail."\r\n";
  $extra .= "MIME-Version: 1.0\n";
	$subject = "Dotaz od ".$mail."";
	$mess ="Email: ".$mail."
		\nText:\n".$message."";

  //Send email
  mb_language('Neutral');
  mb_internal_encoding("UTF-8");
  mb_http_input("UTF-8");
  mb_http_output("UTF-8");

  $mail_stat =  mb_send_mail ($to, $subject, $mess, $extra);
  if($mail_stat){
    header('Location: '.$url_OK, true, $code);
  }
  else{
    header('Location: '.$url_FAIL, true, $code);
  }
}
else {
      header('Location: '.$url_FAIL, true, $code);
};

//Function for testing data (special chars)
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
