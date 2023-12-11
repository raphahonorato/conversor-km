function calcular(event) {

    event.preventDefault();
    const preco = parseFloat(document.getElementById("preco").value);
    const km = parseFloat(document.getElementById("km").value);

    if (!isNaN(preco) && !isNaN(km) && km !== 0) {

        const resultadoDivisao = preco / km;
        document.getElementById("resultado").innerHTML = "R$ " + resultadoDivisao.toFixed(2);

    } else {
        document.getElementById("resultado").innerHTML = "Sabe escrever não!? CALABRESO!";
    }
}

function selecionarTexto(input) {
    input.select();
}