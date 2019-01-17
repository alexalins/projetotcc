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

    .otherwise('/login');
});