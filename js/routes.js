var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'view/login.html',
        controller: 'loginCtrl'
    })

    .when('/cadastroFono', {
        templateUrl: 'view/fono/cadastroFono.html',
        controller: 'fonoCtrl'
    })

    .otherwise('/login');
});