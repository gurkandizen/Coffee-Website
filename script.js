const menuOpenBtn = document.querySelector("#menu-open-btn");
const menuCloseBtn = document.querySelector("#menu-close-btn");

menuOpenBtn.addEventListener("click", () => {
    // Mobil menü görünürlüğünü aç/kapat
    document.body.classList.toggle("show-mobile-menu");
});

// Kapat düğmesine tıklandığında menüyü kapatır
menuCloseBtn.addEventListener("click", () => menuOpenBtn.click());

const swiper = new Swiper('.slide-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   Resposive Breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2 
    },
    1024: {
        slidesPerView: 3
    }
  }
});

document.getElementById("year").textContent = new Date().getFullYear();