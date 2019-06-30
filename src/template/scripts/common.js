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
	})

	reviewsList.on('afterChange', function(event, slick, direction){
	  reviewsCounter.html(direction + 1)
	});
});
