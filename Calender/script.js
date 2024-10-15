const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
	"JAN",
	"FEB",
	"MAR",
	"APR",
	"MAY",
	"JUN",
	"JULY",
	"AUG",
	"SEP",
	"OCT",
	"NOV",
	"DEC",
];

const currentDay = new Date();
const currentFullYear = currentDay.getFullYear();
let currentDate = currentDay.getDate();
let currentMonth = currentDay.getMonth();
let currentYear = currentDay.getFullYear();
let totalCurrentMonthDay = new Date(currentYear, currentMonth + 1, 0);

const datesContainer = document.querySelector(".dates-container");
const weeksContainer = document.querySelector(".weeks-container");
const currentDateContainer = document.querySelector(".current-date");
const prevMonthBtn = document.querySelector(".btn.prev");
const nextMonthBtn = document.querySelector(".btn.next");

function getDates() {
	datesContainer.innerHTML = "";
	currentDateContainer.textContent = `${MONTHS[currentMonth]}-${currentYear}`;
	const firstDay = new Date(currentYear, currentMonth, 1);
	const lastDay = new Date(currentYear, currentMonth + 1, 0);
	datesContainer.setAttribute("data-month", currentMonth);
	for (let i = 0; i < 49; i++) {
		let dateBox = document.createElement("div");
		dateBox.classList.add("date");
		dateBox.classList.add("inactive");
		dateBox.setAttribute("data-index", i);
		if (i >= firstDay.getDay() && i - firstDay.getDay() < lastDay.getDate()) {
			dateBox.textContent = i - firstDay.getDay() + 1;
			dateBox.classList.remove("inactive");
		}
		datesContainer.appendChild(dateBox);
	}
}
function getWeeks() {
	for (let i = 0; i < 7; i++) {
		let dayBox = document.createElement("div");
		dayBox.classList.add("day");
		dayBox.textContent = DAYS[i];
		weeksContainer.appendChild(dayBox);
	}
}
getDates();
getWeeks();

prevMonthBtn.addEventListener("click", () => {
	if (currentMonth == 0) {
		currentYear--;
		currentMonth = 12;
	}
	currentMonth--;
	getDates();
});
nextMonthBtn.addEventListener("click", () => {
	if (currentMonth == 11) {
		currentYear++;
		currentMonth = -1;
	}
	currentMonth++;
	getDates();
});
