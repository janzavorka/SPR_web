<?php
    if (ereg("^.+@.+\\..+$", $_POST['email']))
    { 
?>
  
<html>
	<script>location.href="http://sprintprotiradaru.cz/kontakty_poodeslaniok.html?"
	</script>
</html>

<?php   
	 
	$to = "info@sprintprotiradaru.cz";
	$extra = "From: ".$_POST['email']."\r\nReply-To: ".$_POST['email']."\r\n";
	$subject = "Dotaz od ".$_POST['email']."";
	$mess ="Email: ".$_POST['email']."
		\nText:\n".$_POST['text']."";
                    mail ($to, $subject, $mess, $extra);
    }
    else {
?>
  
<html>
	<script>location.href="http://sprintprotiradaru.cz/kontakty_poodeslanifail.html?"
	</script>
</html>

<?php   
};
?>

	
<html>

<head>
		<meta http-equiv="refresh" content="5; url=kontakty_poodeslanifail.html">
		<title>Přesměrování...</title>
	</head>
	
	<body>
	
	</body>
</html>