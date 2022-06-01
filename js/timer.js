document.addEventListener('DOMContentLoaded', () => {

	const newYear = new Date('July 2022 16 00:00:00');

	const daysVal = document.querySelector('.time-count__days .time-count__val');
	const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
	const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

	const daysText = document.querySelector('.time-count__days .time-count__text');
	const hoursText = document.querySelector('.time-count__hours .time-count__text');
	const minutesText = document.querySelector('.time-count__minutes .time-count__text');
	const secondsText = document.querySelector('.time-count__seconds .time-count__text');

	function declOfNum(number, titles) {  
		cases = [2, 0, 1, 1, 1, 2];  
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	};

	const timeCount = () => {
		let now = new Date()
		let leftUntil = newYear - now;
		console.log(now);
		console.log(leftUntil);
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		console.log(days);

		let hours = Math.floor(leftUntil / 1000 / 60 / 60) & 24;
		console.log(hours);

		let minutes = Math.floor(leftUntil / 1000 / 60) & 60;
		console.log(minutes);

		let seconds = Math.floor(leftUntil / 1000) & 60;
		console.log(seconds);

		daysVal.textContent = days;
		hoursVal.textContent = hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		daysText.textContent = declOfNum(days, ['день', 'дней', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часов', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минут', 'минут']);
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунд', 'секунд']);
	};
	timeCount();
});

