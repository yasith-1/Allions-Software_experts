<?php

include "connection.php";

$name = $_POST["n"];
$email = $_POST["e"];
$mobile = $_POST["m"];
$msg = $_POST["msg"];

// echo("ok");

if (empty($name)) {
    echo ("Please Enter Name.");
} else if (strlen($name) > 20) {
    echo ("First Name Must Contain LOWER THAN 20 characters.");
} else if (empty($email)) {
    echo ("Enter Email Address.");
} else if (strlen($email) > 100) {
    echo ("Email Address Must Contain LOWER THAN 100 characters.");
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo ("Invalid Email Address.");
} else if (empty($msg)) {
    echo ("Type your message here.");
} else if (strlen($msg) > 200) {
    echo ("Message Must Contain LOWER THAN 200 characters.");
} else {

    $rs = Database::search("SELECT * FROM `request` WHERE `email`='" . $email . "'");
    $num = $rs->num_rows;

    if ($num == 1) {
        // Update query
        Database::iud("UPDATE `request` SET `msg`='" . $msg . "' WHERE `email`='" . $email . "'");
        echo ("Update");
    } else {
        // Insert query
        Database::iud("INSERT INTO `request` (`name`,`email`,`mobile`,`msg`) VALUES ('" . $name . "','" . $email . "','" . $mobile . "','" . $msg . "')");
        echo ("success");
    }
}

?>