	var wrapperMenu = document.querySelector('.wrapper-menu');
	const element = document.querySelector('form');

	element.addEventListener('submit', event => {
	var varNum = document.getElementById("verification");
	var checkLabel = document.getElementById("botCheck");
	  // actual logic, e.g. validate the form
		if (varNum.value != 7) {
			event.preventDefault();
			varNum.style.borderColor = "red";
			varNum.style.boxShadow = "0 1px 0 0 red"
			checkLabel.style.color = "red";
		} else {
			return;
		}
	});
	
	window.setTimeout(function () {
		$('.alert').slideUp(500, function () {
			$(this).remove();
		});
	}, 3000);

	wrapperMenu.addEventListener('click', function() {
		wrapperMenu.classList.toggle('open');
	});

	document.querySelectorAll('.nav-link').forEach(item => {
		item.addEventListener('click', event => {
			wrapperMenu.classList.toggle('open');
		});
	});

		typer('.brand-heading')
			.cursor({ color: '#e1a87a' })
			.line('Intuitive', { min: 20, max: 350 })
			.pause(550)
			.back(-1, 200)
			.continue('nnovative', { min: 30, max: 350 })
			.pause()
			.back(-1, 200)
			.continue('ntriguing', { min: 30, max: 350 })
			.pause()
			.back(-1, 150)
			.continue('mpressive', { min: 30, max: 350 })
			.pause()
			.back(-1, 200)
			.continue('nspiring', { min: 30, max: 350 })

$(document).ready(function() {
	'use strict';

	// hides navbar upon scrolling down and then reappears upon scrolling up

	var c,
		currentScrollTop = 0,
		navbar = $('nav');

	$(window).scroll(function() {
		var a = $(window).scrollTop();
		var b = navbar.height();

		currentScrollTop = a;

		if (c < currentScrollTop && a > b + b) {
			navbar.addClass('scrollUp');
		} else if (c > currentScrollTop && !(a <= b)) {
			navbar.removeClass('scrollUp');
		}
		c = currentScrollTop;
	});

	// Closes responsive menu when a scroll trigger link is clicked

	$('.nav>li>a').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top - 48
					},
					1000,
					'easeInOutExpo'
				);
				return false;
			}
		}
	});
});