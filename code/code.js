function calcular(event) {
    event.preventDefault();

    // Captura os valores dos inputs
    var preco = parseFloat(document.getElementById("preco").value);
    var km = parseFloat(document.getElementById("km").value);

    // Verifica se os valores são válidos
    if (!isNaN(preco) && !isNaN(km) && km !== 0) {
        // Realiza a divisão
        var resultadoDivisao = preco / km;

        // Exibe o resultado na página
        document.getElementById("resultado").innerHTML = resultadoDivisao.toFixed(2);
    } else {
        // Exibe uma mensagem de erro se os valores não forem válidos
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos e não divida por zero.";
    }
} 

function selecionarTexto(input) {
    // Seleciona todo o texto dentro do input
    input.select();
  }