app

    .factory('loginService', function($http, localStorageService) {
    var url = 'http://localhost:8000/o/token/';
    return {
        login: function(d) {

            var data = "" +
                "client_id=f1U7EgmNDM16pZLDfRwLZfsXArMjmZHQ99dbMFeS" +
                "&client_secret=KdEWYBzknc6hJLIyziHOusRytMvPgGpyQjLhV9tDdOhW1Zjt7UBtmxMTtiyPV0y1DXn8ummN1rm3ZrCzIvO8Rm5OhfrkQZqxPRJqosRfIBllh5B8RXXb0jRTqS5LOwv3" +
                "&grant_type=password" +
                "&username=" + d.userName +
                "&password=" + d.password;

            return $http.post(url, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function(r) {
                localStorageService.set('miSession', {
                    accessToken: r.access_token,
                    isAuth: true,
                    userName: d.userName,
                });
                return r;
            }).error(function(err) {
                localStorageService.remove('miSession');
                return err;
            });
        },
        salir: "",
    };
});
// d.userName="admin"
// d.password="12345"
// loginService.login(d);
