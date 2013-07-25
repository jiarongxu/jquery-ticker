(function($){
	$.fn.extend({ 
		//plugin name - animatemenu
		ticker: function(options) {

			//Settings list and the default values
			var defaults = {
				initDelayForEachDigit: 100,
				delayForEachDigit: 300,
				finalDelay: 3000,
				beginDate: "2008,01,02",
				endDate: "2008,01,22"
			};
			
			var options = $.extend(defaults, options);
		
    		return this.each(function() {
				var o =options;
				
				//Assign current element to variable, in this case is UL element
				var obj = $(this);

				var days = parseInt($(this).attr("data-number"));

				var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
				var firstDate = new Date(o.beginDate);
				var secondDate = new Date(o.endDate);

				var days = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

				var dailyIncrease = parseInt($(this).attr("data-daily"));
				var number = "" + days*dailyIncrease 

        $(this).append("<div class='dollor'>$</div>");
        var mod = number.length % 3;
				for(var i = 0; i < number.length; i++ ){
					if((i+1)%3 == mod && i != number.length-1){
						$(this).append("<div class='basic-digit'></div>");
						$(this).append("<div class='comma'>,</div>");	
					}else{
						$(this).append("<div class='basic-digit'></div>");
					}
				}

				var index = 0;
				$(".basic-digit").each(function(){
					var div = $(this);
					setTimeout(function(){div.addClass("infinite-scrolling");}, index*o.initDelayForEachDigit );
					index = index + 1;
				});

				setTimeout(function(){
					index = 0
					$(".basic-digit").each(function(){
						var div = $(this);
						var digit = number.charAt(index);
						setTimeout(function(){div.removeClass("infinite-scrolling").addClass("number"+digit).addClass("clear-number");}, index*o.delayForEachDigit );
						index = index + 1;
					});
				}, o.finalDelay);	 
				
    		});
    	}
	});
})(jQuery);