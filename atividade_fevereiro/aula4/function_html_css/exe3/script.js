function encontrarMaior() {
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    var n3 = parseFloat(document.getElementById("numero3").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    if (n1 > n2 && n1 > n3) {
        alert("O maior número é: " + n1);
    } else if (n2 > n1 && n2 > n3) {
        alert("O maior número é: " + n2);
    } else if (n3 > n1 && n3 > n2) {
        alert("O maior número é: " + n3);
    } else {
        alert("Há números iguais ou algum erro ocorreu.");
    }
}
