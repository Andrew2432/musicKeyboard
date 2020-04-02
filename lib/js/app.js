window.addEventListener("keypress", playAudio);
document
	.querySelectorAll(".keys")
	.forEach(key => key.addEventListener("click", playAudioClick));

function playAudio(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
}

function playAudioClick(e) {
	const keyValue = e.target.attributes[1].value;
	if (!keyValue) return;
	const audio = document.querySelector(`audio[data-key="${keyValue}"]`);
	const key = document.querySelector(`.key[data-key="${keyValue}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
}

document.querySelectorAll(".key").forEach(key => {
	key.addEventListener("transitionend", e => {
		if (e.propertyName !== "transform") return;
		key.classList.remove("playing");
	});
});
