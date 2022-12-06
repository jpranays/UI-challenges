let time = document.querySelectorAll(".time > span.time-text");
let [lightMode, darkMode] = document.querySelectorAll("svg.icon");
let timePeriod = document.querySelector(".time-period");
let [hoursText, minutesText, secondsText] = time;
let counter = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(() => {
	let date = new Date();
	let hoursNow = date.getHours();
	let minutesNow = date.getMinutes();
	let secondsNow = date.getSeconds();
	timePeriod.textContent = hoursNow > 12 ? "PM" : "AM";
	if (hoursNow > 12) {
		hoursNow -= 12;
	}
	if (hoursNow === 0) {
		hoursNow = 12;
	}
	hoursText.textContent = formatTime(hoursNow);
	minutesText.textContent = formatTime(minutesNow);
	secondsText.textContent = formatTime(secondsNow);
}, 1000);

function formatTime(time) {
	if (time < 10) {
		return `0${time}`;
	}
	return `${time}`;
}

lightMode.addEventListener("click", () => {
	darkMode.classList.add("active");
	lightMode.classList.remove("active");
	document.body.classList.remove("dark-mode");
});
darkMode.addEventListener("click", () => {
	lightMode.classList.add("active");
	darkMode.classList.remove("active");
	document.body.classList.add("dark-mode");
});
if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	// dark mode
	lightMode.classList.add("active");
	darkMode.classList.remove("active");
	document.body.classList.add("dark-mode");
}
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", (event) => {
		const newColorScheme = event.matches ? "dark" : "light";
		if (newColorScheme == "dark") {
			lightMode.classList.remove("active");
			darkMode.classList.add("active");
			document.body.classList.add("dark-mode");
		} else {
			darkMode.classList.remove("active");
			lightMode.classList.add("active");
			document.body.classList.remove("dark-mode");
		}
	});
