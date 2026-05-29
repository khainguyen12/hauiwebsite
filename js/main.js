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