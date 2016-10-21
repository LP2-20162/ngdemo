app

    .controller('EmpleadoCtr', function($scope, $window, planillaService) {

    $scope.empleado = {};
    $scope.lista = [];

    $scope.listar = function() {
        planillaService.Empleado.query().$promise.then(function(r) {
            $scope.lista = r;
        }, function(err) {
            console.log("Hay error");
        });
    };
    $scope.listar();

    $scope.sel = function(d) {
        //$scope.empleado = d;

        planillaService.Empleado.get({ id: d.id }).$promise.then(function(r) {
            $scope.empleado = r;
        }, function(err) {
            console.log("Hay error");
        });

    };

    $scope.save = function() {

        if ($scope.empleado.id) {
            planillaService.Empleado.update({ id: $scope.empleado.id }, $scope.empleado).$promise.then(function(r) {
                console.log("Editó " + r);

                $scope.listar();

            }, function(err) {
                console.log("Hay error");
            });

        } else {
            planillaService.Empleado.save($scope.empleado).$promise.then(function(r) {
                console.log("Insertó " + r);

                $scope.listar();

            }, function(err) {
                console.log("Hay error");
            });
        }


    };

    $scope.delete = function(d) {
        if ($window.confirm("Está seguro?")) {
            planillaService.Empleado.delete({ id: d.id }).$promise.then(function(r) {
                console.log("Eliminado " + r);

                $scope.listar();

            }, function(err) {
                console.log("Hay error");
            });
        };
    };


});
