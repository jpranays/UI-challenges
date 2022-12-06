let video = document.querySelector("video");
let videoContainer = document.querySelector(".video-container");
let progressBar = document.querySelector(".progress-bar");
let widgetContainer = document.querySelector(".widget-container");
let progressBarContainer = document.querySelector(".progress-bar-container");
let currentTimeShower = document.querySelector(".current-time-shower");
let currentTimedisplay = document.querySelector(".current-time");
let durationDisplay = document.querySelector(".duration");
let backwardbtn = document.querySelector("#backward-btn");
let forwardbtn = document.querySelector("#forward-btn");
let pause = document.querySelector("#pause-btn");
let play = document.querySelector("#play-btn");
let fullscreenBtn = document.querySelector(".full-screen-icon-svg");

videoContainer.onmouseenter = () => {
	widgetContainer.classList.remove("off");
};
videoContainer.onmouseleave = () => {
	widgetContainer.classList.add("off");
};

if (video.paused) {
	play.classList.add("visible");
	pause.classList.remove("visible");
}
videoContainer.addEventListener("click", (e) => {
	if (
		e.target == widgetContainer ||
		e.target == progressBarContainer ||
		e.target == progressBar ||
		e.target == fullscreenBtn
	) {
		return;
	}
	if (!video.paused) {
		video.pause();
		pause.classList.add("visible");
		pause.classList.add("active");
		pause.onanimationend = () => {
			pause.classList.remove("visible");
			pause.classList.remove("active");
		};
	} else {
		video.play();
		play.classList.add("visible");
		play.classList.add("active");
		play.onanimationend = () => {
			play.classList.remove("visible");
			play.classList.remove("active");
		};
	}
});

let duration = video.duration;
//Convert the duration to minutes and seconds
function convertDuration(duration) {
	let minutes = Math.floor(duration / 60);
	let seconds = Math.floor(duration % 60);
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return minutes + ":" + seconds;
}

video.onplaying = () => {
	progressBar.style.transition = "width 0.5s linear";
	play.classList.add("active");
	play.onanimationend = () => {
		play.classList.remove("visible");
		play.classList.remove("active");
	};
	duration = video.duration;
	durationDisplay.textContent = convertDuration(duration);
	let runner = setInterval(() => {
		let currentTime = video.currentTime;
		currentTimedisplay.textContent = convertDuration(currentTime);
		let percentage = Math.floor((currentTime / duration) * 100);
		progressBar.style.width = `${percentage}%`;
		if (percentage == 100) {
			clearInterval(runner);
		}
	}, 100);
};

video.onpause = () => {
	pause.classList.add("active");
	pause.onanimationend = () => {
		pause.classList.remove("visible");
		pause.classList.remove("active");
	};
	progressBar.style.transition = "none";
};
video.onended = () => {
	play.classList.remove("active");
	pause.classList.remove("active");
	play.classList.add("visible");
	pause.classList.remove("visible");
	//video on end immediately stop the transition
	progressBar.style.transition = "none";
};

progressBarContainer.addEventListener("click", (e) => {
	if (video.paused) {
		video.play();
	}
	let currentPointerPosition = e.offsetX;
	progressBar.style.transition = "none";

	video.currentTime =
		(duration * currentPointerPosition) / progressBarContainer.offsetWidth;
});

progressBarContainer.onmouseenter = () => {
	currentTimeShower.classList.add("visible");
};
progressBarContainer.addEventListener("mousemove", (e) => {
	currentTimeShower.style.left = `${e.offsetX + 25}px`;
	let currentPointerPosition = e.offsetX;
	let currentTime =
		(duration * currentPointerPosition) / progressBarContainer.offsetWidth;
	if (isNaN(currentTime)) {
		currentTimeShower.innerHTML = "00:00";
	} else {
		currentTimeShower.innerHTML = convertDuration(currentTime);
	}
});
progressBarContainer.addEventListener("mouseleave", () => {
	currentTimeShower.classList.remove("visible");
});

document.body.addEventListener("keypress", (e) => {
	//check if pressed key is spacebar
	if (e.keyCode == 32) {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	}
});
video.addEventListener("dblclick", handleFullScreen);

//open fullscreen mode on f key
document.body.addEventListener("keypress", (e) => {
	if (e.key == "f" || e.key == "F" || e.key == "F11") {
		handleFullScreen();
	}
});
//on fullscreen exit remove fullscreen class
document.addEventListener("fullscreenchange", () => {
	if (!document.fullscreenElement) {
		videoContainer.classList.remove("fullscreen");
	}
});
//on side arrow key press increment video time by 5 seconds
document.body.addEventListener("keydown", (e) => {
	if (e.key == "ArrowLeft") {
		video.currentTime -= 5;
		backwardbtn.classList.add("active");
	}
	if (video.ended) {
		return;
	}
	if (e.key == "ArrowRight") {
		video.currentTime += 5;
		forwardbtn.classList.add("active");
	}
});
[forwardbtn, backwardbtn].forEach((btn) => {
	btn.onanimationend = () => {
		btn.classList.remove("active");
	};
});
fullscreenBtn.addEventListener("click", handleFullScreen);
function handleFullScreen() {
	//check if browser is already in fullscreen mode
	if (document.fullscreenElement) {
		document.exitFullscreen();
	} else {
		//play video in fullscreen
		if (videoContainer.requestFullscreen) {
			videoContainer.requestFullscreen();
			videoContainer.classList.add("fullscreen");
		}
	}
}
