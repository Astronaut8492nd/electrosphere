const audio = document.getElementById("myAudio");

// Attempt to play the audio immediately 
// (might not work due to browser restrictions)
audio.play().catch(error => {
  console.error("Autoplay failed:", error);

  // Implement a user interaction to trigger playback
  const playButton = document.createElement("button");
  playButton.textContent = "Play Audio";
  playButton.addEventListener("click", () => {
    audio.muted = false; // Unmute the audio
    audio.play();
    playButton.remove(); // Remove the button after playback starts
  });
  document.body.appendChild(playButton);
});