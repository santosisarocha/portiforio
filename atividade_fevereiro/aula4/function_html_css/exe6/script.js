document.getElementById('statusForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores das notas e pesos
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var peso1 = parseFloat(document.getElementById('peso1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var peso2 = parseFloat(document.getElementById('peso2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var peso3 = parseFloat(document.getElementById('peso3').value);

    // Calcular média ponderada
    var media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

    // Verificar status do aluno
    var resultado = '';
    if (media >= 9) {
        resultado = 'Aprovado com excelência';
    } else if (media >= 6) {
        resultado = 'Aprovado';
    } else {
        // Solicitar nota extra
        var notaExtra = parseFloat(prompt('Você foi reprovado. Insira uma nota extra (com peso de 40%):'));
        if (!isNaN(notaExtra)) {
            media = (media * (peso1 + peso2 + peso3) + notaExtra * 0.4) / (peso1 + peso2 + peso3 + 0.4);
            if (media >= 6) {
                resultado = 'Aprovado após recuperação';
            } else {
                resultado = 'Reprovado';
            }
        } else {
            resultado = 'Reprovado';
        }
    }

    // Exibir resultado
    document.getElementById('resultado').textContent = resultado;
});
