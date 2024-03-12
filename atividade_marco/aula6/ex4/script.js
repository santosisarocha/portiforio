function encontrarPares() {
  var numerosInput = document.getElementById("numeros").value;
  var numerosArray = numerosInput.split(",").map(function(item) {
    return parseInt(item.trim());
  });

  var pares = numerosArray.filter(function(numero) {
    return numero % 2 === 0;
  });

  var outputDiv = document.getElementById("output");
  if (pares.length > 0) {
    outputDiv.innerHTML = "<h2>Valores Pares:</h2><p>" + pares.join(", ") + "</p>";
  } else {
    outputDiv.innerHTML = "<p>Todos os números são ímpares.</p>";
  }
}
