var app = angular.module('app', [
    'ui.router',
    'ngResource',
    'LocalStorageModule',
]);
app.config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
app.config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
    console.log('authInterceptorService is loaded');
});

app.run(function(localStorageService, $window) {
    var storage = localStorageService.get('miSession');


    if (storage === null) {
        console.log('run');
        $window.location = 'http://localhost:8001/ngdemo_web/#/login';
    }
});
