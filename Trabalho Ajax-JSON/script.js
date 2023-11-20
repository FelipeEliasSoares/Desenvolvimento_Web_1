function atualizarTabela() {
    const url = 'https://epansani.com.br/2023/dw1s4/ajax/list.php';

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            $('#tabela tbody').empty();

            response.forEach(function(item) {
                var newRow = $('<tr>');
                newRow.append('<td>' + item.nome + '</td>');
                newRow.append('<td>' + item.email + '</td>');

                var deleteButton = $('<button>Delete</button>');
                deleteButton.on('click', function() {
                    excluirRegistro(item.id);
                });

                newRow.append($('<td>').append(deleteButton));
                $('#tabela tbody').append(newRow);
            });
        },
        error: function(error) {
            console.error('Ocorreu um erro ao carregar a tabela:', error);
        }
    });
}

function excluirRegistro(id) {
    const url = 'https://epansani.com.br/2023/dw1s4/ajax/rem.php';

    var dados = {
        id: id
    };

    if (confirm('Tem certeza que deseja excluir este registro?')) {
        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dados),
            success: function(response) {
                atualizarTabela();
            },
            error: function(error) {
                console.error('Ocorreu um erro ao excluir o registro:', error);
                alert('Ocorreu um erro ao excluir o registro.');
            }
        });
    }
}



function enviarForm(event) {
    event.preventDefault(); 

    var nome = $("#Nome").val();
    var email = $("#Email").val();

    const url = 'https://epansani.com.br/2023/dw1s4/ajax/ins.php';

    $.ajax({
        url: url,
        type: 'POST',
        data: {nome: nome, email: email},
        dataType: 'json',
        success: function(response) {
            alert("Cadastro realizado com sucesso!", response);
        },
        error: function(error) {
            alert('Ocorreu um erro:', error);
        }
    });
}


