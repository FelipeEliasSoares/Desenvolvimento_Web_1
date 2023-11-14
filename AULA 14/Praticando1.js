$(document).ready(function (){
    let nome = prompt("Por favor, insira seu nome:");
    let resposta= $("#resposta");

    if (nome !== null) {
        resposta.html("Seu nome é " + nome)
    } else {
        resposta.html("Você não inseriu um nome.")
    }


    $('#adicionar').on("click", function() {
        $('#paragrafoContainer').append("<p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.  </p>")
    })
    
    $('#remover').on("click", function() {
        $('#paragrafoContainer').remove()
    })
    
    
    
})