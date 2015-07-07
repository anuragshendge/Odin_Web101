$(document).ready(function(){

	var hiddenContent = $('#intro');
	var header =$("#header");


	hiddenContent.slideUp(0,function(){


		header.hover(function(){
			hiddenContent.slideDown(400);

			header.mouseleave(function(){
				hiddenContent.slideUp(400);	
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