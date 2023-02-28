alert(
	"Try to go offline and back online to see the changes in the background color of the page."
);
window.addEventListener(
	"load",
	function (e) {
		if (navigator.onLine) {
			console.log("We're online!");
			document.body.style.setProperty("--color", "green");
		} else {
			console.log("We're offline...");
			document.body.style.setProperty("--color", "red");
		}
	},
	false
);

window.addEventListener(
	"online",
	function (e) {
		console.log("And we're back :).");
		document.body.style.setProperty("--color", "green");
	},
	false
);

window.addEventListener(
	"offline",
	function (e) {
		console.log("Connection is down.");
		document.body.style.setProperty("--color", "red");
	},
	false
);
