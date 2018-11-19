$(document).ready(function() {
	 
	$nav = $("#navigation"),
	$slideLine = $("#slide-line"),
	$currentItem = $("#navigation li.active");
	

	$(window).on('resize load', function() {
		
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
		function(){
		  $slideLine.css({
		    "width": $(this).width(),
		    "left": $(this).position().left
		  });
		},
		// Hover out
		function(){
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
		barColor:'#143652',//Pie chart colour
		trackColor: '#e8e8e8',
		scaleColor: false,
		lineWidth : 5,
		animate: 2000,
		onStep: function(from, to, percent) {
			$(this.el).find('span').text(Math.round(percent));
		}
	});  
	
	// Progress Bar 
	// made with jqueru ui
	$(function() {
		$('.progress-bar').each(function() {
			var bar_value = $(this).attr('aria-valuenow') + '%';                
			$(this).animate({ width: bar_value }, { duration: 3000, easing: 'linear' });
		});
	});

});