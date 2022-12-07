let container = document.querySelector(".container");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");

let colors = [
	"rebeccapurple",
	"violet",
	"magenta",
	"pink",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"indigo",
];

let count = 0;
if (count == 0) {
	container.style.backgroundColor = "rebeccapurple";
}
checkCount();
next.addEventListener("click", () => {
	count++;
	container.classList.remove("fadein");
	container.classList.remove("fadeinleft");
	container.classList.add("fadeout");
	container.onanimationend = () => {
		container.classList.remove("fadeout");
		container.classList.add("fadein");
		container.style.backgroundColor = colors[count];
		checkCount();
	};
});
previous.addEventListener("click", () => {
	count--;
	container.classList.remove("fadeinleft");
	container.classList.remove("fadein");
	container.classList.add("fadeout");
	container.onanimationend = () => {
		container.classList.remove("fadeout");
		container.classList.add("fadeinleft");
		container.style.backgroundColor = colors[count];
		checkCount();
	};
});
function checkCount() {
	if (count == 0 && colors.length == 1) {
		next.style.display = "none";
		previous.style.display = "none";
	} else if (count == 0) {
		previous.style.display = "none";
		next.style.display = "block";
	} else if (count == colors.length - 1) {
		next.style.display = "none";
		previous.style.display = "block";
	} else {
		previous.style.display = "block";
		next.style.display = "block";
	}
}
