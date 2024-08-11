let carouseContainer = document.querySelector(".carousel-container");
let carouselItemsContainer = carouseContainer.querySelector(
	".carousel-items-container"
);
let previousBtn = document.querySelector(".carousel-btn.previous");
let nextBtn = document.querySelector(".carousel-btn.next");
let carouselItems = new Array(10)
	.fill(0)
	.map(
		(item) =>
			`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
				Math.random() * 255
			)}, ${Math.floor(Math.random() * 255)})`
	);
let activeItemIndex = 1;

function createCarouselItems() {
	carouselItemsContainer.innerHTML = "";
	for (let i = 0; i < carouselItems.length; i++) {
		let carouselItem = document.createElement("div");
		carouselItem.style.backgroundColor = carouselItems[i];
		carouselItem.classList.add("carousel-item");
		if (activeItemIndex === i) {
			carouselItem.classList.add("active");
		}
		carouselItemsContainer.appendChild(carouselItem);
	}
}
createCarouselItems();
scrollIntoView();
function scrollIntoView() {
	let currentActiveItem = carouselItemsContainer.querySelector(
		".carousel-item.active"
	);
	carouselItemsContainer.scrollTo({
		left: currentActiveItem.offsetLeft - currentActiveItem.offsetWidth,
		behavior: "smooth",
	});
}

previousBtn.addEventListener("click", () => {
	activeItemIndex--;
	if (activeItemIndex === -1) {
		activeItemIndex = carouselItems.length - 1;
	}
	createCarouselItems();
	scrollIntoView();
});
nextBtn.addEventListener("click", () => {
	activeItemIndex++;
	if (activeItemIndex === carouselItems.length) {
		activeItemIndex = 0;
		carouselItemsContainer.scrollLeft = 0;
	}
	createCarouselItems();
	scrollIntoView();
});
