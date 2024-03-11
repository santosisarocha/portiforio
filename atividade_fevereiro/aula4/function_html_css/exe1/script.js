function calcularQuadrado() {
    var n1 = document.getElementById("numero").value;
    var resultado = numeroQuadrado(Number(n1));
    document.getElementById("resultado").innerText = "O quadrado de " + n1 + " é: " + resultado;
}

function numeroQuadrado(n1) {
    return n1 * n1;
}
