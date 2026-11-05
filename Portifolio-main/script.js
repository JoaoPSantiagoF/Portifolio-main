// Animação de fade conforme o scroll
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

function abrirImagem(imagem) {
    const visualizador = document.getElementById("visualizador");
    const imagemAmpliada = document.getElementById("imagemAmpliada");

    imagemAmpliada.src = imagem.src;
    visualizador.style.display = "flex";
}

function fecharImagem() {
    document.getElementById("visualizador").style.display = "none";
}