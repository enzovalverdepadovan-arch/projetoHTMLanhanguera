function somar(){
    //Coletando os dados
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = parseFloat(num1) + parseFloat(num2);
    // localstorage serve para salvar dados na memoria do navegador
    localStorage.setItem('resultado', resultado);
    //inserindo no textArea o dado
    document.getElementById('resultado').value = resultado;
}//fim do metodo somar

//Utilizar o window on load = Insere dadps no textArea apos o carregamento da pagina
window.onload = function(){
    document.getElementById('resultado').value = localStorage.getItem('resultado');
}