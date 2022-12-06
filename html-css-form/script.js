let inputs = document.querySelectorAll(".input");
let [first, second, third, fourth] = document.querySelectorAll(".bar");
let [firstSpan, secondSpan, thirdSpan, fourthSpan] = document.querySelectorAll(
	".error-messages span.status"
);

let [email, password] = inputs;

let isFocused = false;
inputs.forEach((input) => {
	input.addEventListener("focus", function () {
		input.closest(".input-container").classList.add("focus");
		isFocused = true;
	});
	input.addEventListener("blur", function () {
		if (input.value == "") {
			input.closest(".input-container").classList.remove("focus");
		}
		isFocused = false;
	});
	input.addEventListener("input", () => {
		if (input.value == "" && !isFocused) {
			input.closest(".input-container").classList.remove("focus");
		} else {
			input.closest(".input-container").classList.add("focus");
		}
	});
});

password.addEventListener("input", (e) => {
	//must be 5 characters long
	if (password.value.length > 5) {
		first.classList.add("active");
		firstSpan.innerHTML = "✅";
	} else {
		first.classList.remove("active");
		firstSpan.textContent = "❌";
	}
	//must contain at a capital letter
	if (password.value.match(/[A-Z]/)) {
		second.classList.add("active");
		secondSpan.textContent = "✅";
	} else {
		//on transition end remove class
		second.classList.remove("active");
		secondSpan.textContent = "❌";
	}
	//must contain at least one number
	if (password.value.match(/[0-9]/)) {
		third.classList.add("active");
		thirdSpan.textContent = "✅";
	} else {
		third.classList.remove("active");
		thirdSpan.textContent = "❌";
	}
	//must containe at least one special character
	if (password.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
		fourth.classList.add("active");
		fourthSpan.textContent = "✅";
	} else {
		fourth.classList.remove("active");
		fourthSpan.textContent = "❌";
	}
});
