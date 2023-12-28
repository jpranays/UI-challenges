// add random images here
const IMAGES = [
	"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/1136571/pexels-photo-1136571.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600",
];
let currentImageIndex = 0;
let carousel = document.querySelector(".carousel");
let image = document.querySelector(".carousel-image");
let carouselPositionIndicator = document.querySelector(
	".carousel-position-indicator"
);
let prevButton = document.querySelector(".carousel-btn.left");
let nextButton = document.querySelector(".carousel-btn.right");

function createDotsIndicator(length) {
	for (let i = 0; i < length; i++) {
		let dot = document.createElement("div");
		dot.classList.add("dot");
		if (i === currentImageIndex) {
			dot.classList.add("active");
		}
		dot.addEventListener("click", () => {
			currentImageIndex = i;
			createCarouselImage();
		});
		carouselPositionIndicator.appendChild(dot);
	}
}
function createCarouselImage() {
	image.classList.add("fade");
	image.addEventListener("animationend", () => {
		image.classList.remove("fade");
	});
	image.src = IMAGES[currentImageIndex];
	let dots = document.querySelectorAll(".dot");
	dots.forEach((dot) => {
		dot.classList.remove("active");
	});
	dots[currentImageIndex].classList.add("active");
}
prevButton.addEventListener("click", () => {
	currentImageIndex--;
	if (currentImageIndex < 0) {
		currentImageIndex = IMAGES.length - 1;
	}
	createCarouselImage();
});
nextButton.addEventListener("click", () => {
	currentImageIndex++;
	if (currentImageIndex > IMAGES.length - 1) {
		currentImageIndex = 0;
	}
	createCarouselImage();
});
image.addEventListener("error", () => {
	image.src = "https://via.placeholder.com/600";
});
createDotsIndicator(IMAGES.length);
createCarouselImage();
