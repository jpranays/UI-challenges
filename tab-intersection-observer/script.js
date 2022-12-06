let sections = document.querySelectorAll(".description > section");
let navTabs = document.querySelectorAll(".nav-tab");
let dash = document.querySelector(".dash");
let currentTab = undefined;
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				console.log(entry.target);
				currentTab = document.querySelector(`#${entry.target.className}`);
				document
					.querySelector(`#${entry.target.className}`)
					.classList.add("active");
				dash.style.left = `${currentTab.offsetLeft}px`;
				dash.style.width = `${currentTab.offsetWidth}px`;
			} else {
				document
					.querySelector(`#${entry.target.className}`)
					.classList.remove("active");
			}
		});
	},
	{
		threshold: 0.5,
	}
);
window.addEventListener("resize", () => {
	dash.style.left = `${currentTab.offsetLeft}px`;
	dash.style.width = `${currentTab.offsetWidth}px`;
});
sections.forEach((section) => {
	observer.observe(section);
});

navTabs.forEach((tab) => {
	tab.addEventListener("click", (e) => {
		let currentSection = tab.id;
		document.querySelector(`.${currentSection}`).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
});
