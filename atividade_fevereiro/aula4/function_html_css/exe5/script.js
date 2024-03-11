function calcular() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado = document.getElementById("resultado");

    switch (operacao) {
        case "soma":
            resultado.textContent = n1 + n2;
            break;
        case "subtracao":
            resultado.textContent = n1 - n2;
            break;
        case "multiplicacao":
            resultado.textContent = n1 * n2;
            break;
        case "divisao":
            resultado.textContent = n1 / n2;
            break;
        case "exponenciacao":
            resultado.textContent = Math.pow(n1, n2);
            break;
        case "raiz":
            resultado.textContent = "Raiz de n1: " + Math.sqrt(n1) + ", Raiz de n2: " + Math.sqrt(n2);
            break;
        case "porcentagem":
            resultado.textContent = (n1 * n2) / 100;
            break;
        case "fibonacci":
            resultado.textContent = calcularFibonacci(n1);
            break;
        case "fatorial":
            resultado.textContent = calcularFatorial(n1);
            break;
        default:
            resultado.textContent = "Operação inválida";
    }
}

function calcularFibonacci(numero) {
    var fibonacci = [0, 1];
    for (var i = 2; i <= numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.join(", ");
}

function calcularFatorial(numero) {
    var fatorial = 1;
    for (var i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}
