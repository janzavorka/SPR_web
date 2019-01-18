<?php
$code = 303;
$url_OK =  'http://sprintprotiradaru.cz/kontakty_poodeslaniok.html';
$url_FAIL =  'http://sprintprotiradaru.cz/kontakty_poodeslanifail.html';
$mail_stat = FALSE;



if ((!empty($_POST['email']) or !empty($_POST['text'])) and empty($_POST['url']))  {
  $mail = test_input($_POST['email']);
  $message = test_input($_POST['text']);
	$to = "info@sprintprotiradaru.cz";
	$extra .= "From: ".$mail."\r\nReply-To: ".$mail."\r\n";
  $extra .= "MIME-Version: 1.0\n";
  $extra .= "Content-Type: text/plain; charset=\"utf-8\"\n";
  $extra .= "Content-Transfer-Encoding: base64\n";
	$subject = "Dotaz od ".$mail."";
	$mess ="Email: ".$mail."
		\nText:\n".$message."";
  //Send email
  $mail_stat =  mail ($to, $subject, $mess, $extra);
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
