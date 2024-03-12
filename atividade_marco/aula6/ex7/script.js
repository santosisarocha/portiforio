var nomes = ["Isabela", "Murilo", "Ana", "Adailton", "Giovanna", "Marcelo", "Gabriel", "Afonso", "Hemily", "Sara"];
var tentativas = 5;
var tentativaAtual = 0;

function verificarNome() {
  var nomeInput = document.getElementById("nome").value;
  var outputDiv = document.getElementById("output");
  var posicao = nomes.indexOf(nomeInput);

  if (tentativaAtual < tentativas) {
    tentativaAtual++;
    
    if (posicao !== -1) {
      outputDiv.innerHTML = "<p>O nome " + nomeInput + " está na posição " + posicao + " do vetor. Encontrado na tentativa " + tentativaAtual + ".</p>";
    } else {
      outputDiv.innerHTML = "<p>Nome não encontrado. Tentativa " + tentativaAtual + " de " + tentativas + ".</p>";
    }
  } else {
    outputDiv.innerHTML = "<p>Você excedeu o número de tentativas permitidas.</p>";
  }
}
