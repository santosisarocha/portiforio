function carregarVetores() {
  var numerosAInput = document.getElementById("numerosA").value;
  var numerosBInput = document.getElementById("numerosB").value;

  var vetorA = numerosAInput.split(",").map(function(item) {
    return parseInt(item.trim());
  });

  var vetorB = numerosBInput.split(",").map(function(item) {
    return parseInt(item.trim());
  });

  if (vetorA.length !== 5 || vetorB.length !== 5) {
    alert("Por favor, digite exatamente 5 números inteiros para cada vetor.");
    return;
  }

  var vetorC = [];
  for (var i = 0; i < 5; i++) {
    vetorC.push(vetorA[i]);
    vetorC.push(vetorB[i]);
  }

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h2>Vetor C (Alternados):</h2><p>" + vetorC.join(", ") + "</p>";
}
