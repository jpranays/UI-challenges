let headers = document.querySelectorAll(".accordion-header");
headers.forEach((header) => {
	header.onclick = (e) => {
		let parent = e.target.parentElement;
		if (parent.classList.contains("active")) {
			parent.classList.remove("active");
			parent.style.maxHeight = null;
		} else {
			parent.classList.add("active");
			parent.style.maxHeight = parent.scrollHeight + "px";
		}
	};
});
