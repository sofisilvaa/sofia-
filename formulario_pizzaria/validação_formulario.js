document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('form-pedido'); //quando o formulario é enviado,a função especifica será especificada
//a função especifica será especificada

    form.addEventListener('submit', function(event){ ///adiciona um evento de envio do formulátio.
        const nome = document.getElementById('nome').ariaValueMax.trim()
        // aqui o código obtem o valor do campo de entrada com o ID "nome"
        //e remove os espaços em branco extras usando o método trim (). o valor então é armazenado na variavel
        const endereço = document.getElementById('endereço').ariaValueMax.trim();
        const telefone = document.getElementById('telefone').Value.trim();
        const tamanho = document.getElementById('tamanho').Value;//obtem o valor selecionado do campo
        //de seleção com o id "tamanho" e armazenar na variavel
        const sabor = document.getElementById('sabor').Value.trim();
        const telefoneRegex = /^[0-9]{10}$/ //está linha define uma expressão que valida se
        // o numero tem exatamente 10 digitos numéricos
       let isvalid = true;// inicia a variavel isValid como verdadeira
        // o que indica que o formulario é valido por padrão
       if (nome == ''){
           isvalid = false;
           showerror('por favor, insira seu nome.');
        }

       if(endereço ===''){
        isValid = false;
        showerror('por favor,insira seu endereço.');
       }

       if (! telefoneRegex.text(telefone)){
        isValid = false;
        showError('por favor,insira um numero valido.');
       }
       if(tamanho ===''){
        isValid = false;
        showError('por favor, insira o tamanhbo da pizza.');
       }
       if(sabor === ''){
        isValid = false;
        showError('por favor, insira o sabor da pizza.');
       }
       if (isValid){
        event.preventDefault();
        showSuccessPopup();
       }else{
          event.preventDefault();
       }
    });

    function showError(message){
        alert(message);
    }
    function showSuccessPopup(){
        alert('pedido enviado com sucesso!! :)))');
    }


    }
}