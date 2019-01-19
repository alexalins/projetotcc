var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'view/login.html',
        controller: 'loginCtrl'
    })

    .when('/cadastroFono', {
        templateUrl: 'view/fono/cadastroFono.html',
        controller: 'cadastroCtrl'
    })

    .when('/atualizarFono', {
        templateUrl: 'view/fono/atualizarFono.html',
        controller: 'fonoCtrl'
    })

    .when('/inicioFono', {
        templateUrl: 'view/fono/inicioFono.html',
        controller: 'fonoCtrl'
    })

    .when('/dadosFono', {
        templateUrl: 'view/fono/dadosFono.html',
        controller: 'fonoCtrl'
    })

    .when('/pacientesFono', {
        templateUrl: 'view/fono/pacientesFono.html',
        controller: 'fonoCtrl'
    })

    .when('/cadastroPacientes', {
        templateUrl: 'view/paciente/cadastroPaciente.html',
        controller: 'cadastroCtrl'
    })

    .when('/inicioPaciente', {
        templateUrl: 'view/paciente/inicioPaciente.html',
        controller: "jogoCtrl"
    })

    .when('/dadosPaciente', {
        templateUrl: 'view/paciente/dadosPaciente.html',
        controller: 'pacienteCtrl'
    })

    .when('/partidasPaciente', {
        templateUrl: 'view/paciente/partidasPaciente.html',
        controller: 'pacienteCtrl'
    })

    .when('/atualizarPaciente', {
        templateUrl: 'view/paciente/atualizarPaciente.html',
        controller: 'pacienteCtrl'
    })

    .when('/relatorioPartida/:id', {
        templateUrl: 'view/paciente/relatorioPartida.html',
        controller: 'partidaCtrl'
    })

    .when('/relatorioFono/:id', {
        templateUrl: 'view/fono/relatorioPartida.html',
        controller: 'partidaCtrl'
    })

    .when('/pacientePartida/:id', {
        templateUrl: 'view/fono/partidasPaciente.html',
        controller: 'partidasFonoCtrl'
    })

    .otherwise('/login');
});