$(document).ready(function () { 
    $('img').on({
        mouseover: function () {
            $('body').css('background-color', 'black');
            $('h2').css('color', 'white')
            $('#h2').css('color', 'white').html('Lâmpada Apagada');
        },
        mouseout: function () {
            $('body').css('background-color', 'white');
            $('h2').css('color', 'black')
            $('#h2').css('color', 'black').html('Lâmpada Acesa');
        },

    })
})