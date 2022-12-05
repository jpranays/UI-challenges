let icons = document.querySelectorAll("i");
let dragger = document.querySelector(".current-item");
let iconContainer = document.querySelector(".icon-container");

iconContainer.addEventListener("click", ({ target }) => {
	//check if the target is an icon and contains icon class
	if (target.tagName === "I" && target.classList.contains("icon")) {
		dragger.style.left = target.offsetLeft - 5 + "px";
		icons.forEach((icon) => icon.classList.remove("active"));
		target.classList.add("active");
	}
});
