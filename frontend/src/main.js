angular.module('ponies.rocks', ["ui.router"])
.config(["$stateProvider", "$locationProvider", function($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'main'
    });
}]);

