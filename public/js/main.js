// Interacción básica para Kallpa Marketing
console.log('Kallpa Marketing Loaded');

// Smooth scroll for internal links if needed (though already handled by CSS and simple JS)
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Reveal animations on scroll
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  const triggerBottom = window.innerHeight / 5 * 4;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// Initialize cards for scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
  });
});
