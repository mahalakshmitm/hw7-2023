var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")

});
document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"
	video.play()
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
		video.pause()
});
document.querySelector('#slower').addEventListener("click", function(){
	console.log("Slower the Video");
	video.playbackRate -= .1;
	console.log("New speed-rate:", video.playbackRate)
});
document.querySelector('#faster').addEventListener("click", function(){
	console.log("Speed-up the Video");
	video.playbackRate += 0.1 * video.playbackRate;
	console.log("New speed-rate:", video.playbackRate)
});
document.querySelector('#skip').addEventListener("click", function(){
	{
		var newTime = video.currentTime + 10;
		if(newTime <= video.duration)
		{
			video.currentTime = newTime;
		} 
		else
		{
			video.currentTime = 0;
		}
}
	console.log('Current time is', video.currentTime)
});
document.querySelector("#vintage").addEventListener('click',function(){
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener('click',function(){
	video.classList.remove("oldSchool")
});
const mute_video = document.querySelector("#mute");
mute_video.addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;
    mute_video.textContent = "Mute";
	console.log("audio muted")
  } else {
    video.muted = true;
    mute_video.textContent = "Unmute";
	console.log("audio unmuted")
  }
});

const volume_slider = document.querySelector("#slider");
const volume_info = document. querySelector("#volume");

// video.volume = volume_slider.value / 100;

volume_slider.addEventListener("input", function(){
	video.volume = this.value / 100;
	volume_info.textContent = `${this.value}%`;
	console.log('slider value:', this.value)
});







