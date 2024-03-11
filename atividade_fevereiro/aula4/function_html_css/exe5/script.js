document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Resetar estilos de erro
    resetErrors();

    // Obter valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('endereco').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;

    // Validar campos
    var isValid = true;

    if (nome.trim() === '') {
        isValid = false;
        setError('nome', 'Nome é obrigatório');
    }

    if (!validateEmail(email)) {
        isValid = false;
        setError('email', 'E-mail inválido');
    }

    if (endereco.trim() === '') {
        isValid = false;
        setError('endereco', 'Endereço é obrigatório');
    }

    if (!validatePhoneNumber(telefone)) {
        isValid = false;
        setError('telefone', 'Telefone inválido');
    }

    if (!validateCPF(cpf)) {
        isValid = false;
        setError('cpf', 'CPF inválido');
    }

    if (isValid) {
        // Submeter formulário
        alert('Cadastro realizado com sucesso!');
        document.getElementById('cadastroForm').reset();
    }
});

function resetErrors() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('error');
        var nextSibling = inputs[i].nextElementSibling;
        if (nextSibling) {
            nextSibling.textContent = '';
        }
    }
}


function setError(id, message) {
    var input = document.getElementById(id);
    input.classList.add('error');
    var errorElement = document.createElement('span');
    errorElement.textContent = message;
    input.parentNode.appendChild(errorElement);
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validatePhoneNumber(phoneNumber) {
    return /^[0-9]+$/.test(phoneNumber);
}

function validateCPF(cpf) {
    return /^[0-9]{11}$/.test(cpf);
}