/**
 * Created by danni on 11/30/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("HomepageController", HomepageController)

    function HomepageController(UserService, $location, $http) {
        var vm = this;

        //log out
        vm.logout = logout;

        function init() {
            UserService
                // .findUserById(userId)
                .findCurrentUser()
                .success(function (user) {
                    if (user != '0') {
                        vm.user = user;
                    }
                })
                .error(function () {

                });

            var url = "https://bgg-json.azurewebsites.net/hot";
            $http.get(url)
                .success(function(result) {
                    vm.games = result;
                });

        }
        init();

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }
    }



})();