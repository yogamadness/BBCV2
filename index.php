<?php require('config.php'); ?>
 
 <?php
	$page = $_GET['page'];	/* gets the variable $page */
 ?>
<html lang="en">
<head>
	
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="BBC Program">
    <meta name="author" content="Yoga pratama-ATS">
    <meta name="keyword" content="">
    <title>BCC Module</title>
	<link rel="stylesheet" type="text/css" href="assets/jqueryui/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/dist/css/bootstrap.css">
	<link rel="stylesheet" href="assets/jqwidgets/styles/jqx.base.css" type="text/css" />
</head>


<body>
	<?php include('page/header.php');?>

	<?php
	if (!empty($page)) {
			$page .= '.php';
			include('page/'.$page);	
			
	} 	/* if $page has a value, include it */
	else {
		include('page/main.php'); 
	} 	/* otherwise, include the default page */
?>


</body>


<script TYPE="text/javascript" src = "assets/js/jquery.min.js">  </script>
<script type="text/javascript" src = "assets/jqueryui/jquery-ui.min.js"></script>
<script TYPE="text/javascript" src = "assets/js/jquery.tabledit.min.js"></script>
<script type="text/javascript" src = "assets/bootstrap/dist/js/bootstrap.js" ></script>
<script type="text/javascript" src="assets/jqwidgets/jqxcore.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxdata.js"></script> 
    <script type="text/javascript" src="assets/jqwidgets/jqxbuttons.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxscrollbar.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxmenu.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxgrid.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxgrid.sort.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxgrid.filter.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxgrid.columnsresize.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxgrid.columnsreorder.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxgrid.pager.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxgrid.edit.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxgrid.selection.js"></script> 
    <script type="text/javascript" src="assets/jqwidgets/jqxpanel.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxcheckbox.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxlistbox.js"></script>
    <script type="text/javascript" src="assets/jqwidgets/jqxdropdownlist.js"></script>



<script type="text/javascript" src = "include/js/main.js"></script>
</html>

