(function() {

	this.digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
		'seven', 'eight', 'nine'],

	this.init = function() {
		_getClock();
	};

	var _getClock = function() {
		$.ajax({url:'clock.html'}).done(function(data) {
			$('.watch-container').html(data);
		});
		_initClock();
	};

	var _initClock = function() {
		setInterval(function() {
			if (!_digits) _digits = $('.digits div');
			_initDayMarker();
			_initTimeCounter();
		}, 1000);
	};

	var _initDayMarker = function() {
		var weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
		var day = weekDays[(new Date).getDay()];
		$('.weekdays').find('span').removeClass('active');
		$('.weekdays span:contains(' + day + ')').addClass('active');
	};

	var _initTimeCounter = function() {
		_startHoursCounter();
	};

	var _startHoursCounter = function() {
		var hours = [_digits[0], _digits[1]];
		var timeHours = '' + (new Date).getHours();
		$.each(hours, function(index, hour) {
			$(hour).removeClass().addClass(_self.digits[+timeHours[index]]);
		});
	};

	var _digits = null;

	var _self = this;

	this.init();
})();