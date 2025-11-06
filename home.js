// === SLIDER HERO ===
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const showSlide = index => {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
};

document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

// Auto-slide setiap 5 detik (diperbaiki dari 5000ms)
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000);

// === SLIDER PRODUK ===
let productCurrentSlide = 0;
const productSlides = document.querySelectorAll('.product-slide');
const totalProductSlides = productSlides.length;
const productSlidesContainer = document.querySelector('.product-slides');

const showProductSlide = index => {
  // Menggunakan transform untuk smooth slide horizontal
  productSlidesContainer.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById('product-next').addEventListener('click', () => {
  productCurrentSlide = (productCurrentSlide + 1) % totalProductSlides;
  showProductSlide(productCurrentSlide);
});

document.getElementById('product-prev').addEventListener('click', () => {
  productCurrentSlide = (productCurrentSlide - 1 + totalProductSlides) % totalProductSlides;
  showProductSlide(productCurrentSlide);
});

// Auto-slide produk setiap 7 detik (opsional, bisa dihapus jika tidak diinginkan)
setInterval(() => {
  productCurrentSlide = (productCurrentSlide + 1) % totalProductSlides;
  showProductSlide(productCurrentSlide);
}, 7000);

// === JAM JAKARTA REAL-TIME ===
function updateJakartaTime() {
  const now = new Date();
  const options = { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const timeString = now.toLocaleTimeString("id-ID", options);
  document.getElementById("Jakarta").textContent = timeString;
}
setInterval(updateJakartaTime, 1000);
updateJakartaTime();

// === FADE-IN ON SCROLL ===
const sections = document.querySelectorAll("section");

const fadeInOnScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.8s ease-out";
    }
  });
};

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

// Inisialisasi gaya awal
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
});
