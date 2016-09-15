app.controller('FormCtr', function ($scope) {
    $scope.precio=23;
    $scope.save = function  () {
        console.log('precio='+$scope.precio);
    }
});