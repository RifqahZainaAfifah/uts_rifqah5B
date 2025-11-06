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

// === SLIDER PRODUK (vertikal dengan panah atas/bawah) ===
const track = document.getElementById('productTrack');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: 300, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -300, behavior: 'smooth' });
});

// Auto-scroll produk setiap 7 detik (opsional)
setInterval(() => {
  productTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
