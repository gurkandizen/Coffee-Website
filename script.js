const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenBtn = document.querySelector("#menu-open-btn");
const menuCloseBtn = document.querySelector("#menu-close-btn");

menuOpenBtn.addEventListener("click", () => {
    // Mobil menü görünürlüğünü aç/kapat
    document.body.classList.toggle("show-mobile-menu");
});

// Kapat düğmesine tıklandığında menüyü kapatır
menuCloseBtn.addEventListener("click", () => menuOpenBtn.click());

navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenBtn.click());
});

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

// Aktif sayfa göstergesi için scroll takibi
const sections = document.querySelectorAll('section[id]');

function setActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // Navbar yüksekliği kadar offset
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Tüm aktif sınıfları kaldırIR
            navLinks.forEach(link => link.classList.remove('active'));
            // İlgili link'e aktif sınıfı ekle
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });

    // Eğer sayfanın en üstündeyse Home'u aktif yap
    if (scrollY < 100) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('.nav-menu a[href="#"]').classList.add('active');
    }
}

// Scroll olayını dinle
window.addEventListener('scroll', setActiveNavLink);

// Sayfa yüklendiğinde çalıştır
setActiveNavLink();