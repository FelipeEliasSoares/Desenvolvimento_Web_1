$(document).ready(function () { 
    $('img').on({
        mouseover: function () {
            $('body').css('background-color', 'black');
            $('h2').css('color', 'white');
        },
        mouseout: function () {
            $('body').css('background-color', 'white');
            $('h2').css('color', 'black');
        },

    })
})