const formGroup = document.querySelector(".form-group");
const dropdown = document.querySelector(".dropdown#multi-select-dropdown");
const dropdownContainer = document.querySelector(".multi-select-container");
const OPTIONS = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
const SELECTED_OPTIONS = [];
function populateDropdown(OPTIONS) {
	if (OPTIONS.length === 0) {
		let noResults = document.createElement("div");
		noResults.classList.add("dropdown-item");
		noResults.classList.add("no-results");
		noResults.textContent = "No results found";
		dropdown.appendChild(noResults);
		return;
	}
	OPTIONS.forEach((option) => {
		let optionElement = document.createElement("div");
		optionElement.classList.add("dropdown-item");
		optionElement.textContent = option;
		if (SELECTED_OPTIONS.includes(option)) {
			optionElement.classList.add("selected");
		}
		optionElement.addEventListener("click", function () {
			if (SELECTED_OPTIONS.includes(option)) {
				SELECTED_OPTIONS.splice(SELECTED_OPTIONS.indexOf(option), 1);
			} else {
				SELECTED_OPTIONS.push(option);
			}
			dropdown.innerHTML = "";
			populateDropdown(OPTIONS);
			populateFormGroup();
		});
		dropdown.appendChild(optionElement);
	});
}
function populateFormGroup() {
	formGroup.innerHTML = "";
	SELECTED_OPTIONS.forEach((option) => {
		let optionElement = document.createElement("div");
		let closeSpan = document.createElement("span");
		closeSpan.innerHTML = "&times;";
		optionElement.classList.add("selected-option");
		optionElement.textContent = option;
		closeSpan.classList.add("close");
		closeSpan.addEventListener("click", function () {
			SELECTED_OPTIONS.splice(SELECTED_OPTIONS.indexOf(option), 1);
			dropdown.innerHTML = "";
			populateDropdown(OPTIONS);
			populateFormGroup();
		});
		optionElement.appendChild(closeSpan);
		formGroup.appendChild(optionElement);
	});
	let input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", "Type to search");
	input.classList.add("search-input");
	input.addEventListener("input", function () {
		let searchValue = input.value.toLowerCase();
		let filteredOptions = OPTIONS.filter((option) =>
			option.toLowerCase().includes(searchValue)
		);
		dropdown.innerHTML = "";
		populateDropdown(filteredOptions);
	});
	input.addEventListener("focus", function () {
		updateDropdownVisibility(true);
	});
	input.addEventListener("blur", function () {
		setTimeout(() => {
			updateDropdownVisibility(false);
		}, 300);
	});
	input.addEventListener("keydown", function (e) {
		if (e.key === "Backspace" || e.key === "Delete") {
			SELECTED_OPTIONS.pop();
			dropdown.innerHTML = "";
			populateDropdown(OPTIONS);
            populateFormGroup();
		}
	});
	formGroup.appendChild(input);
}
function updateDropdownVisibility(show) {
	if (show === false) {
		dropdown.style.display = "none";
	} else {
		dropdown.style.display = "block";
	}
}
const mutationObserver = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		let formGroupHeight = mutation?.target?.offsetHeight;
		dropdown.style.top = `calc(${formGroupHeight}px + 10px)`;
	});
});
mutationObserver.observe(formGroup, {
	childList: true,
});
populateDropdown(OPTIONS);
populateFormGroup();
updateDropdownVisibility(false);
