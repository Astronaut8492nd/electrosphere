const audioFiles = [
  'assets/sound/ace3_menu_start.mp3',
  'assets/sound/linkage.mp3'
];

function playAudioSequentially() {
  let currentAudioIndex = 0;

  function playNext() {
    if (currentAudioIndex < audioFiles.length) {
      const audio = new Audio(audioFiles[currentAudioIndex]);
      audio.onended = () => {
        currentAudioIndex++;
        playNext();
      };
      audio.play();
    }
  }

  playNext();
}

playAudioSequentially();