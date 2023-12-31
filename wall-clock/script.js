let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");

window.onload = function () {
	setInterval(setClockHands, 1000);
};

function setClockHands() {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let hourDeg = hour * 30 + minute * 0.5;
	let minuteDeg = minute * 6 + second * 0.1;
	let secondDeg = second * 6;

	hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
	minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
	secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
}
