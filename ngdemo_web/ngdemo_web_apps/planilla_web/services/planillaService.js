app

    .factory('planillaService', function($resource) {
    var url = 'http://localhost:8000/api/planilla/';
    return {
        Empleado: $resource(url + 'empleados/:id/', { id: '@id' }, {
            'update': { method: 'PUT' },

        }),
        Empresa: $resource(url + '/empresas/:id/', { id: '@id' }, {
            'update': { method: 'PUT' }
        }),

    };
});

// planillaService.Empleado.save(...);
// 'list': { method: 'GET' },