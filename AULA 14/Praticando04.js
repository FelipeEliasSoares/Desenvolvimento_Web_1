$(document).ready(function() {
    let selectedSquare = null;
    let originalPosition = null;

    $(document).on('keydown', function(event) {
        const moveSquare = (direction, value) => {
            if (selectedSquare) {
                const square = $('#' + selectedSquare);
                const position = parseInt(square.css(direction));
                square.css(direction, position + value + 'px');
            }
        };

        if (event.key.toLowerCase() === 'w' || event.key === 'ArrowUp') {
            moveSquare('top', -10);
        } else if (event.key.toLowerCase() === 'a' || event.key === 'ArrowLeft') {
            moveSquare('left', -10);
        } else if (event.key.toLowerCase() === 's' || event.key === 'ArrowDown') {
            moveSquare('top', 10);
        } else if (event.key.toLowerCase() === 'd' || event.key === 'ArrowRight') {
            moveSquare('left', 10);
        }
    });

    $(document).on('click', function(event) {
        const clickedSquare = $(event.target);
        const fecharModal = () => $('#modal-background').css('display', 'none');
        const exibirAviso = () => {
            $('#warning').css('display', 'block');
            setTimeout(() => {
                $('#warning').css('display', 'none');
            }, 2000);
        };

        if (clickedSquare.hasClass('square')) {
            if (selectedSquare && selectedSquare !== clickedSquare.attr('id')) {
                const currentSquare = $('#' + selectedSquare);
                currentSquare.removeClass('selected');
                currentSquare.css('transform', 'none');
                currentSquare.css('top', originalPosition.top + 'px');
                currentSquare.css('left', originalPosition.left + 'px');
            }

            if (selectedSquare !== clickedSquare.attr('id')) {
                if (selectedSquare) {
                    exibirAviso();
                } else {
                    clickedSquare.addClass('selected');
                    selectedSquare = clickedSquare.attr('id');
                    originalPosition = { 
                        top: parseInt(clickedSquare.css('top')),
                        left: parseInt(clickedSquare.css('left'))
                    };
                }
            } else {
                clickedSquare.removeClass('selected');
                selectedSquare = null;
                originalPosition = null;
            }
        } else if (clickedSquare.attr('id') === 'fecharModalBtn') {
            fecharModal();
        }
    });

    $(document).on('click', function(event) {
        const clickedSquare = $(event.target);
        
        if (clickedSquare.attr('id') === 'fecharModalBtn') {
            fecharModal();
        }
    });

    $(window).on('load', () => $('#modal-background').css('display', 'flex'));

    
    $('#modal').on('click', '#fecharModalBtn', function() {
        fecharModal();
    });
});
