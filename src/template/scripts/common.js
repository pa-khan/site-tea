$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	var reviewsList = $('.reviews__list'),
			reviewsArrows = $('.reviews__arrows'),
			reviewsCounter = $('.reviews__count-current'),
			reviewsTotal = $('.reviews__count-total'),
			reviewsLength = $('.reviews__item').length;


	if(reviewsLength < 10) {
		reviewsTotal.html('0'+reviewsLength);
	} else{
		reviewsTotal.html(reviewsLength);
	}

	reviewsList.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		appendArrows: reviewsArrows,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	reviewsList.on('afterChange', function(event, slick, direction){
	  reviewsCounter.html(direction + 1)
	});

	$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
	});


	$('.buy__form .form__btn').click(function(event) {

		$.fancybox.close();
		$.fancybox.open({src  : '#popup-thanks',type : 'inline'});
		
	});

	var shareBlock = $('.share'),
			shareClose = $('.share__close');

	shareClose.click(function(event) {
		shareBlock.slideUp(300);
	});
});
