angular.module('ponies.rocks', ["ui.router"])
.config(["$stateProvider", function($stateProvider) {
    $stateProvider.state('root', {
        url: '/',
        templateUrl: 'main.html'
    });
});

