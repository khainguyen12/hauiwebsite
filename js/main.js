const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const backTop = document.getElementById('backTop');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 350) {
    backTop.classList.add('show');
  } else {
    backTop.classList.remove('show');
  }
});

backTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    current = (current + 1) % 2;
    showSlide(current);
});

prevBtn.addEventListener("click", () => {
    current = (current - 1 + 2) % 2;
    showSlide(current);
});

// tự động chuyển ảnh sau 5 giây
setInterval(() => {
    current = (current + 1) % 2;
    showSlide(current);
}, 5000);