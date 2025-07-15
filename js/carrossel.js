const imagens = ["imagem1.png", "imagem2.png", "imagem3.png", "imagem4.png"];
let indiceAtual = 0;
const imgElement = document.getElementById("imagem");

setInterval(() => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  imgElement.src = "imagens/" + imagens[indiceAtual];
}, 3000); // troca a cada 3 segundos