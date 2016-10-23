app
    .factory('authInterceptorService', function($injector, localStorageService) {


        return {
            request: function(configs) {
                configs.headers = configs.headers || {};
                var storage = localStorageService.get('miSession');
                if (storage) {
                    configs.headers.Authorization = 'Bearer ' + storage.accessToken;
                }
                return configs;
            },
            response: ''
        };
    });
/*
authInterceptorService.request(??????);
authInterceptorService.response(??????);
*/
