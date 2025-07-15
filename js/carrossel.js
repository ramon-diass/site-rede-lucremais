const imagens = ["imagem1.png", "imagem2.png", "imagem3.png"];
let indiceAtual = 0;
const imgElement = document.getElementById("imagem");
const btnAnterior = document.getElementById("anterior");
const btnProximo = document.getElementById("proximo");

function atualizarImagem() {
  imgElement.src = "imagens/" + imagens[indiceAtual];
}

function proximaImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  atualizarImagem();
}

function imagemAnterior() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
}

// Rotação automática
let intervalo = setInterval(proximaImagem, 3000);

// Pausar rotação ao passar o mouse
imgElement.addEventListener("mouseenter", () => {
  clearInterval(intervalo);
});

imgElement.addEventListener("mouseleave", () => {
  intervalo = setInterval(proximaImagem, 3000);
});

// Controle manual
btnProximo.addEventListener("click", () => {
  proximaImagem();
  reiniciarIntervalo();
});

btnAnterior.addEventListener("click", () => {
  imagemAnterior();
  reiniciarIntervalo();
});

function reiniciarIntervalo() {
  clearInterval(intervalo);
  intervalo = setInterval(proximaImagem, 3000); // reinicia temporizador
}