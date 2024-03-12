document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-pedido');

    form.addEventListener('submit', function(event) {
        const nome = document.getElementById('nome').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const tamanho = document.getElementById('tamanho').value;
        const sabor = document.getElementById('sabor').value.trim();
        const telefoneRegex = /^[0-9]{10}$/;

        let isValid = true;

        if (nome === '') {
            isValid = false;
            showError('Por favor, insira seu nome.');
        }

        if (endereco === '') {
            isValid = false;
            showError('Por favor, insira seu endereço.');
        }

        if (!telefoneRegex.test(telefone)) {
            isValid = false;
            showError('Por favor, insira um número de telefone válido (apenas números, 10 dígitos).');
        }

        if (tamanho === '') {
            isValid = false;
            showError('Por favor, selecione o tamanho da pizza.');
        }

        if (sabor === '') {
            isValid = false;
            showError('Por favor, insira o sabor da pizza.');
        }

        if (isValid) {
            event.preventDefault();
            showSuccessPopup();
        } else {
            event.preventDefault();
        }
    });

    function showError(message) {
        alert(message);
    }

    function showSuccessPopup() {
        alert('Pedido de pizza enviado com sucesso!:)))');
    }
});