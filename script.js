const menuOpenBtn = document.querySelector("#menu-open-btn");
const menuCloseBtn = document.querySelector("#menu-close-btn");

menuOpenBtn.addEventListener("click", () => {
    // Mobil menü görünürlüğünü aç/kapat
    document.body.classList.toggle("show-mobile-menu");
});

// Kapat düğmesine tıklandığında menüyü kapatır
menuCloseBtn.addEventListener("click", () => menuOpenBtn.click())