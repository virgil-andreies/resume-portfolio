$(document).ready(function () {

	/* ======= Scrollspy ======= */
	$('body').scrollspy({ target: '#navigation', offset: 100 });

	/* ======= ScrollTo ======= */
	$('.scrollto').on('click', function (e) {

		//store hash
		var target = this.hash;

		e.preventDefault();

		$('body').scrollTo(target, 800, { offset: -60, 'axis': 'y' });

	});

	/* *************** Fixed page nav when scrolled *************** */
	$(window).on('scroll resize load', function () {

		$('#navigation').removeClass('fixed');

		var scrollTop = $(this).scrollTop();
		var topDistance = $('#navigation').offset().top;

		// console.log(scrollTop);
		// console.log(topDistance);

		if ((topDistance) > scrollTop) {
			$('#navigation').removeClass('fixed');
			$('body').removeClass('sticky-page-nav');
			console.log('removed');
		}
		else {
			$('#navigation').addClass('fixed');
			$('body').addClass('sticky-page-nav');
			console.log('added');
		}

	});

	$nav = $("#navigation"),
		$slideLine = $("#slide-line"),
		$currentItem = $("#navigation li.active");


	$(window).on('resize load', function () {

		if ($currentItem[0]) {
			$slideLine.css({
				"width": $currentItem.width(),
				"left": $currentItem.position().left
			});
		}
	});

	// Underline transition
	$nav.find("li").hover(
		// Hover on
		function () {
			$slideLine.css({
				"width": $(this).width(),
				"left": $(this).position().left
			});
		},
		// Hover out
		function () {
			if ($currentItem[0]) {
				// Go back to current
				$slideLine.css({
					"width": $currentItem.width(),
					"left": $currentItem.position().left
				});
			} else {
				// Disapear
				$slideLine.width(0);
			}
		}
	);

	/* *************** Chart ************* */
	$('.chart').easyPieChart({
		barColor: '#143652',//Pie chart colour
		trackColor: '#e8e8e8',
		scaleColor: false,
		lineWidth: 5,
		animate: 2000,
		onStep: function (from, to, percent) {
			$(this.el).find('span').text(Math.round(percent));
		}
	});

	// Progress Bar 
	// made with jquery ui
	$(function () {
		$('.progress-bar').each(function () {
			var bar_value = $(this).attr('aria-valuenow') + '%';
			$(this).animate({ width: bar_value }, { duration: 1800, easing: 'linear' });
		});
	});


	$('.flip').hover(function () {
		$(this).find('.card').toggleClass('flipped');
	});

});