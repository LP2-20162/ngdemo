app

    .factory('authInterceptorService', function($injector, localStorageService) {
        var accessToken = 'AMgqwI9ybiw8smrjLI4eEqAAVxFzpN';
    return {

        
        request: function(configs) {
            configs.headers= configs.headers || {};
            //
            configs.headers.Authorization = 'Bearer '+ accessToken;
            //
            return configs;
        },

        response: ''

    };
    
});


/*
authInterceptorService.request(???????);
authInterceptorService.response(?????);

*/