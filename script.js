document.getElementById("cintaButton").addEventListener("click", function() {
  const result = Math.random();
  let message = "";

  if (result > 0.5) {
    message = "Kamu jatuh cinta!";
  } else {
    message = "Cinta kamu masih di ujung sana!";
  }

  document.getElementById("hasilCinta").style.display = "block";
  document.getElementById("hasilCinta").textContent = message;
});

