app.controller('partidaCtrl', function($scope, $routeParams, partidaService) {
    //
    partidaService.getPartida($routeParams.id)
    .then(function(success){
		$scope.partida = success.data;
		console.log($scope.partida);
    	relatorio($scope.partida.relatorio)
    })
    .catch(function(error){
    	alert("Não foi possível listar os dados");
    })
    //
    //RELATORIO
    
    let relatorio = function(dados){
    	var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
    	type: 'pie',
    	data: {
    		labels: ["Erro", "Acerto"],
    		datasets: [{
    			data: [dados.erros.length, dados.acertos.length],
    			backgroundColor: [
    			'rgba(255,99,132,1)',
    			'rgba(75, 192, 192, 1)'
    			],
    			borderColor: [
    			'rgba(255,99,132,1)',
    			'rgba(75, 192, 192, 1)'
    			],
    			borderWidth: 1
    		}]
    	},
    	options: {
    		scales: {
    			yAxes: [{
    				ticks: {
    					beginAtZero:true
    				}
    			}]
    		}
    	}
    });
    }

})