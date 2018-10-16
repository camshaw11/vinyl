jQuery(document).ready(function($){
	//open popup
	$('.button-confirm').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	$('#confirm-order-yes').click(function() {
		event.preventDefault();

		$('#rotating-logo').addClass('rotate');
		$('.cd-popup').removeClass('is-visible');
	});
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});

$(document).ready(function(){

	$(document).on('click', '#cart-test .box', function(){
		$("#products-test").append($(this));
	})

	$(document).on('click', '#products-test .box', function(){
		$("#cart-test").append($(this));
	})

});

	$('[lang="mi"]').hide();
	$('#switch-lang').click(function() {
  	$('[lang="mi"]').toggle();
  	$('[lang="en"]').toggle();
});

function move() {
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 400);
  function frame() {

    if (width >= 100) {
    	$('#rotating-logo').removeClass('rotate');
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}