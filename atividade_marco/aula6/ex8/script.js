function carregarVetores() {
  var numerosInput = document.getElementById("numeros").value;
  var numerosArray = numerosInput.split(",").map(function(item) {
    return parseInt(item.trim());
  });

  if (numerosArray.length !== 6) {
    alert("Por favor, digite exatamente 6 números inteiros.");
    return;
  }

  var vetorA = numerosArray;
  var vetorB = [];

  for (var i = 0; i < vetorA.length; i++) {
    vetorB.push(vetorA[i] / 2);
  }

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h2>Vetor A:</h2><p>" + vetorA.join(", ") + "</p><h2>Vetor B:</h2><p>" + vetorB.join(", ") + "</p>";
}
