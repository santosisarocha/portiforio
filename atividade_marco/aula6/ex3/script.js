function calcularIdadesAcimaMedia() {
  var idadesInput = document.getElementById("idades").value;
  var idadesArray = idadesInput.split(",").map(function(item) {
    return parseInt(item.trim());
  });

  if (idadesArray.length !== 20) {
    alert("Por favor, digite as idades de 20 pessoas.");
    return;
  }

  var soma = idadesArray.reduce(function(total, idade) {
    return total + idade;
  }, 0);

  var media = soma / idadesArray.length;

  var idadesAcimaMedia = idadesArray.filter(function(idade) {
    return idade > media;
  });

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h2>Idades Acima da Média:</h2><p>" + idadesAcimaMedia.join(", ") + "</p>";
}
