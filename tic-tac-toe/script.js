const rowsByCols = 3;
const gameBoard = document.querySelector(".game-board");
let gameArray = [];
function createBoard() {
	for (let i = 0; i < rowsByCols; i++) {
		let temp = [];
		for (let j = 0; j < rowsByCols; j++) {
			temp.push({
				type: "",
				isFilled: false,
			});
			let box = document.createElement("div");
			box.classList.add("box");
			box.setAttribute("data-index", `${i}-${j}`);
			gameBoard.appendChild(box);
		}
		gameArray.push(temp);
	}
}
createBoard();
gameBoard.addEventListener("click", (e) => {
	if (e.target.classList.contains("box")) {
		let box = e.target;
		let [i, j] = box.getAttribute("data-index").split("-");
		i = parseInt(i);
		j = parseInt(j);
		gameArray = gameArray.map((arr, index) => {
			if (index === i && !arr[j].type && !arr[j].isFilled) {
				arr[j].type = "circle";
				arr[j].isFilled = true;
				return arr;
			}
			return arr;
		});
	}
});

function updateBoard() {
	let boxes = document.querySelectorAll(".box");
	for (let i = 0; i < gameArray.length; i++) {
		for (let j = 0; j < gameArray[i].length; j++) {
			gameBoard.appendChild(box);
		}
		gameArray.push(temp);
	}
}
