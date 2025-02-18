document.getElementById("bukaHadiahButton").addEventListener("click", function() {
  document.getElementById("hadiah").style.display = "block";
  document.getElementById("memori").style.display = "none";
  document.getElementById("chest").style.display = "none";
  document.getElementById("pesanPesan").style.display = "none";
});

document.getElementById("bukaMemoriButton").addEventListener("click", function() {
  document.getElementById("hadiah").style.display = "none";
  document.getElementById("memori").style.display = "block";
  document.getElementById("chest").style.display = "none";
  document.getElementById("pesanPesan").style.display = "none";
});

document.getElementById("bukaChestButton").addEventListener("click", function() {
  document.getElementById("hadiah").style.display = "none";
  document.getElementById("memori").style.display = "none";
  document.getElementById("chest").style.display = "block";
  document.getElementById("pesanPesan").style.display = "none";
});

document.getElementById("pesanPesanButton").addEventListener("click", function() {
  document.getElementById("hadiah").style.display = "none";
  document.getElementById("memori").style.display = "none";
  document.getElementById("chest").style.display = "none";
  document.getElementById("pesanPesan").style.display = "block";
});

// Gift box functionality (only 1 can be opened)
let openedGift = false;
document.querySelectorAll(".gift-box").forEach(gift => {
  gift.addEventListener("click", function() {
    if (!openedGift) {
      alert("Selamat! Kamu membuka hadiah!");
      openedGift = true;
      this.disabled = true;
    } else {
      alert("Hadiah sudah dibuka!");
    }
  });
});

// Chest functionality (random discount)
document.querySelectorAll(".chest").forEach(chest => {
  chest.addEventListener("click", function() {
    let discount = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
    alert("Selamat! Kamu mendapatkan potongan harga: Rp " + discount);
    this.disabled = true;
  });
});
