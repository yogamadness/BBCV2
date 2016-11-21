<?php 
 	
error_reporting(E_ERROR  | E_PARSE);

$date = date("Y/m/d");
$no_bbc = 'BBC/' . $date;

//SAP CONNECTION 

require('include/saprfc.php');

?>