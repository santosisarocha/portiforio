function encontrarMaior() {
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    var n3 = parseFloat(document.getElementById("numero3").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
        return;
    }

    if (n1 > n2 && n1 > n3) {
        document.getElementById("resultado").innerText = "O maior número é: " + n1;

    } else if (n2 > n1 && n2 > n3) {
        document.getElementById("resultado").innerText = "O maior número é: " + n2;
    } else if (n3 > n1 && n3 > n2) {
        document.getElementById("resultado").innerText = "O maior número é: " + n3;
    } else {
       
        document.getElementById("resultado").innerText = "Há números iguais ou algum erro ocorreu.";
    }
}
