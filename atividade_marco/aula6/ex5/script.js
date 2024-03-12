function validarNumeros() {
  var numerosInput = document.getElementById("numeros").value;
  var numerosArray = numerosInput.split(",").map(function(item) {
    return parseInt(item.trim());
  });

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  for (var i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] < 100 || numerosArray[i] > 200 || isNaN(numerosArray[i])) {
      outputDiv.innerHTML = "<p>Valor inválido. Por favor, digite apenas números entre 100 e 200.</p>";
      return;
    }
  }

  outputDiv.innerHTML = "<h2>Valores Armazenados:</h2><p>" + numerosArray.join(", ") + "</p>";
}
