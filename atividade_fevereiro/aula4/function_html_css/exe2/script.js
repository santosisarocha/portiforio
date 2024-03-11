function verificarPar() {
    var n1 = document.getElementById("numeroInput").value;
    if (n1 % 2 === 0) {        
        document.getElementById("resultado").innerText = "O número é par";
    } else {
        document.getElementById("resultado").innerText = "O número é ímpar";
    }
}
