<?php
	$email = trim($_POST["email"]);

	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html;charset=utf-8 \r\n";

	$message = "<p>Lead</p>
	<p><strong>Email:</strong> $email</p>";

	mail( "kirilltrachuk@gmail.com", "Lead from Website",
	    $message, $headers );
	header( "Location: /coming_soon.html" );
?>
