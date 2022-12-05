let btn = document.querySelector(".button");
let checkMark = document.querySelector("#checkmark");
btn.addEventListener(
	"click",
	() => {
		btn.textContent = "";
		btn.classList.add("shrink");
		btn.classList.add("circle");
		checkMark.classList.add("visible");
	},
	{
		once: true,
	}
);
