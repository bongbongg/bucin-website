document.getElementById("cekButton").addEventListener("click", function() {
  let cowok = document.getElementById("cowok").value;
  let cewek = document.getElementById("cewek").value;

  if (cowok && cewek) {
      let hasil = Math.floor(Math.random() * 100) + 1;
      document.getElementById("hasil").innerHTML = `<h2>Kecocokan Cinta: ${hasil}%</h2>`;
  } else {
      alert("Masukkan nama kedua belah pihak terlebih dahulu!");
  }
});

document.getElementById("cekButton").addEventListener("click", function() {
  let cowok = document.getElementById("cowok").value;
  let cewek = document.getElementById("cewek").value;

  if (cowok && cewek) {
      let hasil = Math.floor(Math.random() * 100) + 1;
      
      // Simpan hasil kecocokan di sessionStorage dan arahkan ke halaman baru
      sessionStorage.setItem('hasil', hasil);
      window.location.href = 'result.html'; // Arahkan ke halaman hasil
  } else {
      alert("Masukkan nama kedua belah pihak terlebih dahulu!");
  }
});

// Script untuk halaman hasil (result.html)
window.onload = function() {
  let hasil = sessionStorage.getItem('hasil');
  if (hasil) {
      let progress = document.querySelector(".circle .progress");
      let percentText = document.querySelector(".circle .percent");
      let resultMessage = document.getElementById("resultMessage");

      // Update progress dan persen
      setTimeout(() => {
          progress.style.background = `conic-gradient(#ff0033 0% ${hasil}%, #fbc7d5 ${hasil}% 100%)`;
          percentText.textContent = `${hasil}%`;

          // Menampilkan pesan berdasarkan hasil kecocokan
          if (hasil >= 50) {
              resultMessage.textContent = "Selamat, kecocokan Anda tinggi!";
              resultMessage.style.color = "#4CAF50"; // Hijau untuk hasil baik
          } else {
              resultMessage.textContent = "Maaf, kecocokan Anda rendah.";
              resultMessage.style.color = "#f44336"; // Merah untuk hasil rendah
          }
      }, 500);
  }

  // Fungsi untuk kembali ke halaman utama
  document.getElementById("backButton").addEventListener("click", function() {
      window.location.href = 'index.html';
  });
};
