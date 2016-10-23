app
    .factory('authInterceptorService', function($injector) {
        var accessToken = 'XtejIDLPxV4wbFrLtQ7orN7ClJ7Q0A';
        return {
            request: function(configs) {
                configs.headers = configs.headers || {};
                configs.headers.Authorization = 'Bearer ' + accessToken;
                return configs;
            },
            response: ''
        };
    });
/*
authInterceptorService.request(??????);
authInterceptorService.response(??????);
*/
