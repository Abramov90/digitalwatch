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
            _startTimer();
		}, 1e3);
	};

	var _initDayMarker = function() {
		var weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
		var day = weekDays[(new Date).getDay()];
		$('.weekdays').find('span').removeClass('active');
		$('.weekdays span:contains(' + day + ')').addClass('active');
	};

	var _startTimer = function() {
        [
            { digits: [_digits[0], _digits[1]], getter: 'getHours' },
            { digits: [_digits[3], _digits[4]], getter: 'getMinutes' },
            { digits: [_digits[6], _digits[7]], getter: 'getSeconds' }
        ].forEach(function(item) {
            var time = '' + (new Date)[item.getter]();
            if (time.length < 2) time = '0' + time;
            item.digits.forEach(function(digit, index) {
                $(digit).removeClass().addClass(_self.digits[+time[index]])
            })
        });

	};

	var _digits = null;

	var _self = this;

	this.init();
})();
