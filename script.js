const bar = document.getElementById('.bar');
const nav = document.getElementById('.navbar');

if (menu) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}