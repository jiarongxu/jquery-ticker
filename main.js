// Sprite Sheet animation with CSS3 using the steps() feature.
// To change the speed, just edit the ".8s" animation time.

// Inspired by Lea's typing animation: http://t.co/9RPMmV7

$(document).ready(function(){
	$(".ticker-digits").ticker({delayForEachDigit: 200});
	// var number = $(".ticker").attr("data-number");
	// for(var i = 0; i < number.length; i++ ){
	// 	$(".ticker").append("<div class='basic-digit'></div>");
	// }

	// var index = 0;
	// $(".basic-digit").each(function(){
	// 	var div = $(this);
	// 	setTimeout(function(){div.addClass("infinite-scrolling");}, index*300 );
	// 	index = index + 1;
	// });

	// setTimeout(function(){
	// 	index = 0
	// 	$(".basic-digit").each(function(){
	// 		var div = $(this);
	// 		var digit = number.charAt(index);
	// 		setTimeout(function(){div.removeClass("infinite-scrolling").addClass("number"+digit);}, index*300 );
	// 		index = index + 1;
	// 	});
	// }, 5000);	  
});