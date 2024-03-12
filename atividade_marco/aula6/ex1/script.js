document.addEventListener("DOMContentLoaded", function() {
 
    var valores = [5, 10, 15, 20, 25];
    
  
    function calcularDobro(valores) {
      var outputDiv = document.getElementById("output");
      var outputHTML = "<h2>Dobro dos Valores:</h2><ul>";
      
      for (var i = 0; i < valores.length; i++) {
        var dobro = valores[i] * 2;
        outputHTML += "<li>O dobro de " + valores[i] + " é " + dobro + "</li>";
      }
      
      outputHTML += "</ul>";
      outputDiv.innerHTML = outputHTML;
    }
    

    calcularDobro(valores);
  });
  