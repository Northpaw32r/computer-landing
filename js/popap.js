//Попап для записи на курс

$('.open-popup').click(function(e) {
	e.preventDefault();
	$('.popup-bg').fadeIn(600);
	$('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
	$('.popup-bg').fadeOut(600);
	$('html').removeClass('no-scroll');
});


// Попап для входа в личный кабинет

$('.open-popup-office').click(function(e) {
	e.preventDefault();
	$('.popup-bg-office').fadeIn(600);
	$('html').addClass('no-scroll');
});

$('.close-popup-office').click(function() {
	$('.popup-bg-office').fadeOut(600);
	$('html').removeClass('no-scroll');
});

// Попап для регистрации

$('.open-popup-office-register').click(function(e) {
	e.preventDefault();
	$('.popup-bg-office').fadeOut(600)
	$('html').addClass('no-scroll');
	$('.popup-bg-office-register').fadeIn(600);
});

$('.close-popup-office-register').click(function() {
	$('.popup-bg-office-register').fadeOut(600)
	$('html').removeClass('no-scroll');
});

