let heroText = document.querySelector(".hero-text");
const CONTENT = "Legacy is Earned money is made";
const ADDSPEED = 200;
const DELETESPEED = 200;
const PAUSETIME = 10;
addText(CONTENT);

async function addText(CONTENT) {
	let counter = 0;
	CONTENT = CONTENT.split(" ");
	for (let word of CONTENT) {
		let promise = new Promise((res, rej) => {
			let addTimer = setInterval(() => {
				let span = document.createElement("span");
				span.textContent = word[counter];
				heroText.appendChild(span);
				counter++;
				if (counter > word.length) {
					clearInterval(addTimer);
					counter = 0;
					setTimeout(() => {
						deletetext(res);
						//manage the pausetime according to the length percentage of the word
					}, PAUSETIME * word.length);
				}
			}, ADDSPEED);
		});
		await promise;
	}
	heroText.textContent = CONTENT.join(" ");
	document.querySelector("span.line").classList.remove("line");
}
async function deletetext(res) {
	let spans = heroText.querySelectorAll("span");
	let counter = spans.length - 1;
	let deleteTimer = setInterval(() => {
		spans[counter].remove();
		counter--;
		if (counter < 0) {
			clearInterval(deleteTimer);
			return res(true);
		}
	}, DELETESPEED);
}
