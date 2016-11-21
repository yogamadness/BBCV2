$(document).ready(function(){
			var url      = window.location.href;  
			var urlsplit = url.split('?');
			var sub;

			sub = urlsplit[1];

			switch(sub)
				 {
				 	case "page=input_bbc":
				 		$.getScript('include/js/input_bbc.js', function() {
							set_header();
							set_jqgrid();	
						});
				 	break;
				 	case "edit_bbc" :
				 		$.getScript('include/js/input_bbc.js', function() {
							set_filter();	
						});
				 	break;
				 	case "verif_bbc" :
				 		$.getScript('include/js/input_bbc.js', function() {
							set_filter();	
						});
				 	break;

				 }

});



