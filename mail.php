<?php
	$name=$_POST['name'];
	$mail=$_POST['mail'];
	$contact=$_POST['num'];
	$remarks=$_POST['remarks'];
	$sitemail="sidhugautam23298@gmail.com";
	$headers = "From: site@indicatorscontrollers.com";
	$message="Name: $name<br>E-mail: $mail<br>Contact: $contact<br>Remarks:<br>$remarks";
	mail($sitemail, "New Contact Request", $message,$headers);
?>