//creates a new browser window for easy level
function myFunction() {
  window.open("easy.html");
}
//creates a new browser window for medium level
function myFunction1() {
  window.open("medium.html");
}
//creates a new browser window for hard level
function myFunction2() {
  window.open("hard.html");
}

function toggleMute() {
  let video = document.getElementById("autoplay-video");
  let button = document.getElementById("mute-button");

  if (video.src.includes("mute=1")) {
    // Unmute video
    video.src = video.src.replace("mute=1", "mute=0");
    button.textContent = "🔊"; // Change to unmute emoji
  } else {
    // Mute video
    video.src = video.src.replace("mute=0", "mute=1");
    button.textContent = "🔇"; // Change back to mute emoji
  }
}
