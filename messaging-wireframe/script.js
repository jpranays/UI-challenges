let chats = document.querySelector(".chats");
let sendButton = document.querySelector("#send-button");
let messageInput = document.querySelector("#message");
let messageSenderForm = document.querySelector(".message-sender");
let messageContainer = document.querySelector(".message-container");
let messages = document.querySelectorAll(".chats >  p");
let unseenMessages = document.querySelector("#unseen-message-count");
let notification = document.querySelector(".notification");
let messageArrivedCount = messages.length;
let messageSeenCount = 0;
let unseenMessageCount = messageArrivedCount - messageSeenCount || 0;
let observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			messageSeenCount++;
			observer.unobserve(entry.target);
			calCulateUnseenMessagesCount();
		}
	});
});
messages.forEach((message) => {
	observer.observe(message);
});
messageSenderForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (messageInput.value.length === 0) {
		return alert("Enter Message First!!!");
	}
	let newMessage = document.createElement("p");
	newMessage.textContent = messageInput.value;
	chats.prepend(newMessage);
	// chats.append(newMessage);
	messageInput.value = "";
	//keep scrollbar to bottom on adding message
	messageContainer.scrollTop = messageContainer.scrollHeight;
	observer.observe(newMessage);
});
function calCulateUnseenMessagesCount() {
	messages = document.querySelectorAll(".chats >  p");
	unseenMessageCount = messages.length - messageSeenCount;
	console.log(unseenMessageCount);
	if (unseenMessageCount > 0) {
		notification.classList.add("active");
	} else {
		notification.classList.remove("active");
	}
	unseenMessages.textContent = unseenMessageCount;
}
messageContainer.addEventListener("scroll", calCulateUnseenMessagesCount);
