// === JAM JAKARTA REAL-TIME ===
function updateJakartaTime() {
  const now = new Date();
  const options = { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const timeString = now.toLocaleTimeString("id-ID", options);
  document.getElementById("Jakarta").textContent = timeString;
}
setInterval(updateJakartaTime, 1000);
updateJakartaTime();

// === ANIMASI TIMELINE ON SCROLL ===
const timelineItems = document.querySelectorAll('.timeline-item');

const showTimelineOnScroll = () => {
  timelineItems.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 200); // Delay per item
    }
  });
};

window.addEventListener("scroll", showTimelineOnScroll);
window.addEventListener("load", showTimelineOnScroll);

