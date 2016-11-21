<?php 

  $BUKRS =  $_GET['BUKRS'];
  $ESTNR =  $_GET['ESTNR'];
  $DATE  =  $_GET['DATE'];
  $DIVNR =  $_GET['DIVNR'];

  $LOGIN = array (                                 // Set login data to R/3
      "ASHOST"=>"10.20.1.35",                // application server host name
      "SYSNR"=>"00",                       // system number
      "CLIENT"=>"700",                     // client
      "USER"=>"TAP1",                   // user
      "PASSWD"=>"tap123"                   // password
  );                 // codepage

	$rfc = saprfc_open($LOGIN);
   if (! $rfc )
   {
       echo "RFC connection failed with error:".saprfc_error();
       exit;

   }


	 $function  = "ZGET_HEADER_BBC_EMP";
   $table    = "ZPAY_EMPLOYEE";

   $fce = saprfc_function_discover($rfc,  $function );
   if (! $fce )
   {
       echo "Discovering interface of function module RFC_READ_REPORT failed";
       exit;
   }

   saprfc_import ($fce,"BUKRS", $BUKRS);
   saprfc_import ($fce,"ESTNR", $ESTNR);
   saprfc_import ($fce,"DATUM", $DATE);
   saprfc_import ($fce,"DIVNR", $DIVNR);
   saprfc_table_init($fce,$table); 
   $rfcresults = saprfc_call_and_receive($fce); 


   if ($rfcresults != SAPRC_OK){

   if ($rfcresults == SAP_EXCEPTION){
      $error = ("Exception raised:".saprfc_exception($fce));

    }else{
   $error = ("Call error:".saprfc_error($fce));
   }
   echo $error;
   exit();
   }


   $results =array(); 
   $numrows = saprfc_table_rows($fce,$table);

   $start_date = saprfc_export ($fce,"START_DATE");
   $end_date = saprfc_export ($fce,"END_DATE");

   $_SESSION['START_DATE'] = $start_date;
   $_SESSION['END_DATE']   = $END_DATE;
 
     for ($i=1; $i <= $numrows; $i++){

     $results[$i] = saprfc_table_read($fce,$table,$i);

     }

	  saprfc_function_free($fce);
	  saprfc_close($rfc);

    echo  json_encode($results);

 
?>