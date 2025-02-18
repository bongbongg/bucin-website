document.querySelectorAll(".cintaButton").forEach(button => {
  button.addEventListener("click", function() {
    // Play background music when the page loads
    const backgroundMusic = document.getElementById("backgroundMusic");
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    }

    const result = Math.random();
    let message = "";

    if (result > 0.5) {
      message = "Kamu jatuh cinta! 💖";
    } else {
      message = "Cinta kamu masih di ujung sana! 💔";
    }

    // Show love animation and result
    document.getElementById("hasilCinta").style.display = "block";
    document.getElementById("hasilCinta").textContent = message;
    document.getElementById("loveAnimation").style.display = "block";

    // Play sound effect for fun
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
    
    // Create heart emoji animation
    const loveEmoji = document.getElementById("loveEmoji");
    loveEmoji.innerHTML = "❤️💖💘";
  });
});
