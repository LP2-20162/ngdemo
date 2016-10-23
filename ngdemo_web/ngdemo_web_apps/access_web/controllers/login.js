app

    .controller('LoginCtr', function($scope, $state, loginService) {
    $scope.d = {};
    $scope.login = function() {
        loginService.login($scope.d).then(function(r) {
            console.log("Login succcess");
            $state.go('empleados');
        }, function(err) {
            console.log("Errorr::" + JSON.stringify(err));
        });
    };

});
