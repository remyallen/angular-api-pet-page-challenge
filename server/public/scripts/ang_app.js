var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/dog', {
            templateUrl: '/views/templates/dog.html',
            controller: 'DogController'
        })
        .when('/cat', {
            templateUrl: '/views/templates/cat.html',
            controller: 'CatController'
        })
        .when('/bird', {
            templateUrl: '/views/templates/bird.html',
            controller: 'BirdController'
        })
        .otherwise({
            redirectTo: 'dog'
        });
}]);