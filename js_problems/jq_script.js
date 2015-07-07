$(document).ready(function(){

	var hiddenContent = $('#intro');
	var header =$("#header");


	hiddenContent.slideUp(0,function(){


		header.hover(function(){
			hiddenContent.slideDown(1000);
			header.hide(300);
			hiddenContent.mouseleave(function(){
				header.show(300);
				hiddenContent.slideUp(1000);	

			});

		});

	});

});


/*
<!--

	$('#header').click(function(){

		if(hiddenContent.is(":visible")){
		
			hiddenContent.click(function(){
				
				hiddenContent.slideUp("slow");
				
			});
		}
		else{
			$('#header').hide('slow');
			hiddenContent.slideDown("slow");
		}
	});

-->*/