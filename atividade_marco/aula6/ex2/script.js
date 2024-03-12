document.addEventListener("DOMContentLoaded", function() {
  
  var valores = [10, 20, 30, 40, 50, 60, 70, 80];
  

  function calcularMedia(valores) {
    var soma = 0;
    

    for (var i = 0; i < valores.length; i++) {
      soma += valores[i];
    }
    

    var media = soma / valores.length;
    
    return media;
  }
  

  var outputDiv = document.getElementById("output");
  var media = calcularMedia(valores);
  outputDiv.innerHTML = "<h2>Média Aritmética:</h2><p>A média dos valores é " + media + "</p>";
});
