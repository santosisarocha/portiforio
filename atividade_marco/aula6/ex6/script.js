var nomes = ["Isabela", "Murilo", "Ana", "Adailton", "Giovanna", "Marcelo", "Gabriel", "Afonso", "Hemily", "Sara"];

function verificarNome() {
  var nomeInput = document.getElementById("nome").value;
  var outputDiv = document.getElementById("output");
  var posicao = nomes.indexOf(nomeInput);
  
  if (posicao !== -1) {
    outputDiv.innerHTML = "<p>O nome " + nomeInput + " está na posição " + posicao + " do vetor.</p>";
  } else {
    outputDiv.innerHTML = "<p>Nome não encontrado!</p>";
  }
}
