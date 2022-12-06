let hiremeBtn = document.querySelectorAll(".hireme");
let modalContainer = document.querySelector(".modal-container");
let closeBtn = document.querySelectorAll(".close-btn");

hiremeBtn.forEach((btn) => {
	let currentUser = btn.parentElement;
	let h3 = currentUser.querySelector("h3");
	let h4 = currentUser.querySelector("h4");
	let user = h3.textContent;
	let profession = h4.textContent;
	let img = currentUser.querySelector(".avatar").querySelector("img").src;
	btn.addEventListener("click", () => {
		let modalHeader = modalContainer.querySelector(".modal-header");
		let avatarImg = modalHeader.querySelector("img");
		let aboutH3 = modalContainer.querySelector(".about h3");
		let aboutH4 = modalContainer.querySelector(".about h4");
		avatarImg.src = img;
		aboutH3.textContent = user;
		aboutH4.textContent = profession;
		modalContainer.classList.add("active");
		document.body.classList.add("modal-active");
		//make user unable to scroll
		document.body.style.overflow = "hidden";
	});
});
closeBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		modalContainer.classList.remove("active");
		document.body.classList.remove("modal-active");
		//make user able to scroll
		document.body.style.overflow = "auto";
	});
});
document.body.addEventListener("click", function (e) {
	if (e.target.classList.contains("modal-backdrop")) {
		modalContainer.classList.remove("active");
		document.body.classList.remove("modal-active");
		document.body.style.overflow = "auto";
	}
});
