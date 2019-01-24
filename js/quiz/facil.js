var facilState = {
    create: function () {
        var dados = localStorage.getItem("dados");
        //var myJson = JSON.stringify(dados);
        var obj = JSON.parse(dados);
        var id = obj.id;
        //
        var xhr = new XMLHttpRequest();
        xhr.open('GET', encodeURI('https://game-tcc.herokuapp.com/palavra/paciente/' + id));
        xhr.onload = function () {
            if (xhr.status === 200) {
                var req = JSON.parse(xhr.responseText);
                aux = 150;
                for (let i = 0; i < req.length; i++) {
                    if (req[i].nivel == "facil") {
                        var txtLoading = game.add.text(game.world.centerX, aux, req[i].palavra, { font: '15px emulogic', fill: '#fff' });
                        txtLoading.anchor.set(.5);
                    }
                    //
                    aux += 50;
                    console.log(req[i].palavra);
                }

            }
            else {
                console.log('Erro:' + xhr.status);
            }
        };
        xhr.send();
    }
};