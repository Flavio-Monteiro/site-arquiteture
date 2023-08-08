// Inicialize o ScrollReveal
ScrollReveal({ reset: true });

// Adicione a animação com atrasos de tempo para criar a sequência
ScrollReveal().reveal('.interiores', {
  duration: 1200,
  origin: 'left',
  delay: 10,
  beforeReveal: (el) => {
    el.style.position = 'absolute'; // Defina a posição como 'relative'
    el.style.left = '20px'; // Adicione um deslocamento de 20px para a esquerda
  }
});

ScrollReveal().reveal('.estrutural', { duration: 1000, origin: 'left', delay: 300 });
ScrollReveal().reveal('.residencial', { duration: 1000, origin: 'left', delay: 500 });
ScrollReveal().reveal('.projeto-txt', {
  duration: 1500,
  rotate: {
    x: 0,
    y: 80,
    z: 0,
   
  }
});


function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
  }