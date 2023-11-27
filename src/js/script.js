// Font
const texts = ["Moh. Luthfi Zain", "Seorang Fullstack Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 100;

function type() {
  const textContainer = document.getElementById('text-container');
  const currentText = texts[textIndex];
  let displayText = currentText.substring(0, charIndex);

  if (isDeleting) {
    displayText = currentText.substring(0, charIndex - 1);
    charIndex--;
    delay = 50; // Penghapusan teks menjadi lebih cepat
  } else {
    charIndex++;
    delay = 100;
  }

  textContainer.textContent = displayText;

  if (charIndex > currentText.length) {
    isDeleting = true;
    delay = 1000; // Delay saat teks telah selesai ditulis
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    delay = 100; // Delay sebelum mulai mengetik kalimat berikutnya
  }

  setTimeout(type, delay);
}

window.onload = function () {
  type();
};

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}