function generateSelector(target) {
	return "TODO: Implementation missing";
}

document.body.addEventListener("click", ({ target }) => {
	console.clear();
	let selector = document.querySelector(".selector");
	let path = ``;
	let node = target;
	let index = getIndex(node);
	while (target.parentNode) {
		path += `${target.localName}> `;
		target = target.parentNode;
	}
	path = path
		.split(" ")
		.reverse()
		.join(" ")
		.substring(0, path.length - 1);
	path += `:nth-child(${index})`;
	console.log(path);

	selector.innerHTML = `${path}`;
});
function getIndex(node) {
	let i = 1;
	let tagName = node.tagName;
	while (node.previousSibling) {
		node = node.previousSibling;
		if (
			node.nodeType === 1 &&
			tagName.toLowerCase() == node.tagName.toLowerCase()
		) {
			i++;
		}
	}
	return i;
}
