// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sidebar toggle for mobile (optional, add hamburger if needed)
// Add more JS for animations or AOS.js/Typed.js integration as needed 

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = darkModeToggle.querySelector('i');

function setDarkMode(on) {
  document.body.classList.toggle('dark-mode', on);
  darkModeIcon.className = on ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('darkMode', on ? 'on' : 'off');
}

darkModeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  setDarkMode(!isDark);
});

// On load, set mode from localStorage
if (localStorage.getItem('darkMode') === 'on') {
  setDarkMode(true);
} else {
  setDarkMode(false);
} 