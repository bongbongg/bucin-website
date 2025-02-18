// Fungsi untuk menampilkan konten dan tombol kembali
function showContent(contentId) {
  document.getElementById("hadiah").style.display = "none";
  document.getElementById("memori").style.display = "none";
  document.getElementById("chest").style.display = "none";
  document.getElementById("pesanPesan").style.display = "none";
  document.getElementById(contentId).style.display = "block";

  // Menyembunyikan tombol utama dan menampilkan tombol kembali
  document.querySelectorAll('.button-container button').forEach(button => button.style.display = "none");
  document.getElementById('backButton').style.display = "block";
}

// Menampilkan kembali tombol utama saat tombol kembali ditekan
document.getElementById("backButton").addEventListener("click", function() {
  document.getElementById('backButton').style.display = "none";
  document.querySelectorAll('.button-container button').forEach(button => button.style.display = "block");
});

// Menangani klik pada tombol utama
document.getElementById("bukaHadiahButton").addEventListener("click", function() {
  showContent("hadiah");
});

document.getElementById("bukaMemoriButton").addEventListener("click", function() {
  showContent("memori");
});

document.getElementById("bukaChestButton").addEventListener("click", function() {
  showContent("chest");
});

document.getElementById("pesanPesanButton").addEventListener("click", function() {
  showContent("pesanPesan");
});

// Fungsionalitas hadiah dengan hadiah acak
let openedGift = false;
const gifts = [
  "💖 Ciuman virtual dari Bulol! 😘",
  "🌹 Bunga indah untukmu, Bulol! 💐",
  "🎶 Lagu cinta yang dipersembahkan oleh Bulol! 💘",
  "🍫 Cokelat manis dari Bulol! 🍬",
  "🐱 Pelukan dari Bulol si kucing lucu! 😻",
  "🌟 Stiker Bulol yang unik dan cantik! ✨"
];

document.querySelectorAll(".gift-box").forEach(gift => {
  gift.addEventListener("click", function() {
    if (!openedGift) {
      let randomGift = gifts[Math.floor(Math.random() * gifts.length)];
      alert("🎉 Wah, kamu membuka hadiah pertama! Hadiahmu adalah: " + randomGift);
      openedGift = true;
      this.disabled = true;
    } else {
      alert("Oups, kamu sudah membuka hadiah ini. 😜");
    }
  });
});


// Fungsionalitas chest dengan persentase cinta
document.querySelectorAll(".chest").forEach(chest => {
  chest.addEventListener("click", function() {
    let lovePercentage = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    alert("Selamat! Kamu mendapatkan " + lovePercentage + "% cinta untuk melanjutkan perjalanan cintamu. 💖");
    this.disabled = true;
  });
});

