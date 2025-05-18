console.log("JS file is properly linked!");
// ==== EXTREME LEVEL NAVBAR SCRIPT ====

// Typing Animation
const text = "Welcome to My Website!";
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

let charIndex = 0;
let typingDelay = 100;
let initialDelay = 600;

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, initialDelay);
});

function type() {
  if (charIndex < text.length) {
    typedTextSpan.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
}

// Dark/Light Mode Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Optional: Close menu on link click
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

AOS.init({
  duration: 1000,
  once: true
});
  

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight && rect.bottom > 0
  );
}

function animateSkills() {
  const skills = document.querySelectorAll('.progress');
  skills.forEach(skill => {
    if (isInViewport(skill) && !skill.classList.contains('animated')) {
      skill.style.width = skill.getAttribute('data-progress');
      skill.classList.add('animated');
    }
  });
}

// স্ক্রল করলে বা পেজ লোড হলে animateSkills ফাংশন চালু হবে
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);


  

function revealServicesOnScroll() {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealServicesOnScroll);
window.addEventListener('load', revealServicesOnScroll);

/* Portfolio Section with GSAP Scroll Animation */
// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from("[data-portfolio]", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "[data-portfolio]",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from("[data-portfolio-grid] > div", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "[data-portfolio-grid]",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// Modal Functions
function openModal(image, title, desc) {
  document.getElementById('modal-img').src = image;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}
/* Portfolio Section end with GSAP Scroll Animation */
















