var app = angular.module("iDo", [
							"ngRoute",
                            "xeditable",
                            "ngMaterial"
                        ]);

app.config(['$routeProvider',
 function ($routeprovider) {
            $routeprovider.
            when('/GuestList', {
                templateUrl: 'app/guestlist/views/guestList.html',
                controller: 'GuestList'
            }).
			when('/Venue', {
                templateUrl: 'app/venue/views/venue.html',
                controller: ''
            }).
            otherwise({
                redirectTo: '/GuestList'
            });

 }])
 .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('green');
})
;


app.run(function ($rootScope, $location) {
    // $rootScope.checkUser = function () {
        // if (localStorageService.get('user') == null) {
            // $location.path("/Login");
        // }
    // }

});