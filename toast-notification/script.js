let btn = document.querySelector(".toast-button");
let toastMessage = document.querySelector(".toast-message");

btn.addEventListener("click", function () {
	toastMessage.classList.remove("hidden");
	btn.classList.add("disabled");
	let timer = setTimeout(function () {
		toastMessage.classList.add("hidden");
		btn.classList.remove("disabled");
		clearTimeout(timer);
	}, 3000);
});
