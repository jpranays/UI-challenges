/*
Weak : only alphabets
medium : only alphabets and numbers
strong : alphabets,numbers and special characters
*/
alert(`Weak : only alphabets
medium : only alphabets and numbers
strong : alphabets,numbers and special characters`);
let passwordInput = document.querySelector(".password-input");
let helperText = document.querySelector(".helper-text");
let inputContainer = document.querySelector(".input-container");
passwordInput.addEventListener("input", (e) => {
	let password = e.target.value;
	//Regex containing alphabets
	let regexAlphabets = /[a-zA-Z]/g;
	//Regex containing numbers
	let regexNumbers = /[0-9]/g;
	//Regex containing special characters
	let regexSpecialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

	let strong, medium, weak;
	strong = regexSpecialCharacters.test(password);
	if (!strong) {
		medium = regexNumbers.test(password);
	}
	if (!medium) {
		weak = regexAlphabets.test(password);
	}
	if (strong) {
		helperText.textContent = "Password is Strong";
		inputContainer.classList.add("strong");
		inputContainer.classList.remove("medium");
		inputContainer.classList.remove("weak");
	} else if (medium) {
		helperText.textContent = "Password is Medium";
		inputContainer.classList.remove("strong");
		inputContainer.classList.remove("weak");
		inputContainer.classList.add("medium");
	} else if (weak) {
		helperText.textContent = "Password is Weak";
		inputContainer.classList.remove("strong");
		inputContainer.classList.remove("medium");
		inputContainer.classList.add("weak");
	} else {
		helperText.textContent = "";
		inputContainer.classList.remove("strong");
		inputContainer.classList.remove("medium");
		inputContainer.classList.remove("weak");
	}
});
