let circles = document.querySelectorAll(".circle");
const ImagesArray = ["avatar-1.png", "avatar-2.png", "avatar-3.png", "avatar-4.png", "avatar-5.png"];
circles.forEach((circle, index) => {
	circle.setAttribute("data-index", index + 1);
	const img = document.createElement("img");
	img.classList.add("circle-img");
	img.addEventListener("load", () => {
		circle.classList.remove("loading");
	});
	img.src = `./public/${ImagesArray[index]}`;
	circle.appendChild(img);
});
const IndexArray = [
	{
		transform: "translate(-50%, -50%) translateX(-200%) scale(1)",
		zIndex: 2,
	},
	{
		transform: "translate(-50%, -50%) translateX(-100%) scale(1.5)",
		zIndex: 3,
	},
	{
		transform: "translate(-50%, -50%) translateX(0%) scale(2)",
		zIndex: 4,
	},
	{
		transform: "translate(-50%, -50%) translateX(100%) scale(1.5)",
		zIndex: 3,
	},
	{
		transform: "translate(-50%, -50%) translateX(200%) scale(1)",
		zIndex: 2,
	},
];
setInterval(() => {
	circles.forEach((circle) => {
		let currentIndex = parseInt(circle.getAttribute("data-index"));
		let nextIndex = currentIndex - 1;
		if (nextIndex < 0) nextIndex = circles.length - 1;
		circle.setAttribute("data-index", nextIndex);
		circle.style.transform = IndexArray[nextIndex].transform;
		circle.style.zIndex = IndexArray[nextIndex].zIndex;
		if (nextIndex == 2) {
			circle.classList.add("center");
		} else {
			circle.classList.remove("center");
		}
	});
}, 2000);
