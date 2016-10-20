app

.controller('EmpleadoCtr', function ($scope, planillaService) {

	$scope.lista = [];
	
	planillaService.Empleado.query().$promise.then(function (r) {
		$scope.lista = r;
	}, function (err) {
		console.log("Hay error");
	});

    $scope.save = function  () {
        
    };
});