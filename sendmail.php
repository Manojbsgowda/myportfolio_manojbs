<?php
$to="manojbs743@gmail.com";
$name="manu"
$message="i am";
$headers="From:manojgowdas996@gmail.com";

if(mail($to,$name, $message,$headers )){
	echo "mail sent";
	else{
		echo "cannot send";
	}
}

?>