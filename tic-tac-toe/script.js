const userInput = window.prompt("Enter the size of the board");
const rowsByCols = Number.isInteger(parseInt(userInput))
	? parseInt(userInput) < 3 || parseInt(userInput) > 10
		? 3
		: parseInt(userInput)
	: 3;

const gameBoard = document.querySelector(".game-board");
let gameArray = [];
let sign = Math.round(Math.random() * 3) % 2 === 0 ? "X" : "O";
function createBoard() {
	gameBoard.style.gridTemplateColumns = `repeat(${rowsByCols}, minmax(100px, 200px))`;
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
	window.alert(`${sign} will start the game`);
	gameBoard.addEventListener("click", handleUserClick);
}
function handleUserClick(e) {
	if (e.target.classList.contains("box")) {
		let box = e.target;
		let [i, j] = box.getAttribute("data-index").split("-");
		i = parseInt(i);
		j = parseInt(j);
		gameArray = gameArray.map((arr, index) => {
			if (index === i && !arr[j].type && !arr[j].isFilled) {
				arr[j].type = sign;
				arr[j].isFilled = true;
				updateBoard(i, j);
				return arr;
			}
			return arr;
		});
	}
}
function updateBoard(i, j) {
	let boxes = document.querySelectorAll(".box");
	let boxTobeUpdate = [...boxes].find((box) => {
		if (box.getAttribute("data-index") === `${i}-${j}`) {
			return true;
		}
		return false;
	});
	if (boxTobeUpdate) {
		let span = document.createElement("span");
		span.classList.add("sign");
		span.textContent = sign;
		boxTobeUpdate.appendChild(span);
		checkWinner();
		sign = sign === "X" ? "O" : "X";
	}
}
function checkWinner() {
	let winnerFound = false;
	for (let i = 0; i < gameArray.length; i++) {
		let rowArr = gameArray[i];
		if (rowArr.every((box) => box.isFilled && box.type === sign)) {
			winnerFound = true;
			break;
		}
	}
	for (let i = 0; i < gameArray.length; i++) {
		let flag = true;
		for (let j = 0; j < gameArray[i].length; j++) {
			if (!gameArray[j][i].isFilled || gameArray[j][i].type !== sign) {
				flag = false;
			}
		}
		if (flag) {
			winnerFound = true;
			break;
		}
	}
	let diagonalFlag1 = true;
	for (let i = 0; i < gameArray.length; i++) {
		if (!gameArray[i][i].isFilled || gameArray[i][i].type !== sign) {
			diagonalFlag1 = false;
		}
	}
	if (diagonalFlag1) {
		winnerFound = true;
	}
	let diagonalFlag2 = true;
	for (let i = 0; i < gameArray.length; i++) {
		if (
			!gameArray[i][gameArray.length - 1 - i].isFilled ||
			gameArray[i][gameArray.length - 1 - i].type !== sign
		) {
			diagonalFlag2 = false;
		}
	}
	if (diagonalFlag2) {
		winnerFound = true;
	}
	if (winnerFound) {
		alert(`${sign} won the game`);
		gameBoard.removeEventListener("click", handleUserClick);
		setTimeout(() => {
			location.reload();
		}, 1000);
	}
	// check for draw
	let drawFlag = true;
	for (let i = 0; i < gameArray.length; i++) {
		for (let j = 0; j < gameArray[i].length; j++) {
			if (!gameArray[i][j].isFilled) {
				drawFlag = false;
				break;
			}
		}
	}
	if (drawFlag) {
		alert(`It's a draw`);
		gameBoard.removeEventListener("click", handleUserClick);
		setTimeout(() => {
			location.reload();
		});
	}
}
createBoard();
