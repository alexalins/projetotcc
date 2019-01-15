var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('login', {
        url: '/login',
        templateUrl: 'view/login.html',
        controller: 'loginCtrl'
    })

    .otherwise('/login');
});