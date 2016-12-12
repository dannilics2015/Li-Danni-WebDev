
/**
 * Created by LiDanni on 12/2/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location, $http, UserService) {
        var vm = this;

        vm.username = $routeParams.username;

        vm.logout = logout;


        //when page load will display top 50 games immediately
        function init() {
            var url = "https://bgg-json.azurewebsites.net/hot";
            $http.get(url)
                .success(function(result) {
                    vm.games = result;
                });

            findUserByUsername();
        }

        init();

        function searchGameByName(name) {
            var url = "http://bgg-api.herokuapp.com/api/v1/search?query=" + name;
            $http.get(url)
                .success(function(result) {
                    vm.game = result.items.item;
                    console.log(result.items.item);
                });
        }

        function findUserByUsername() {
            UserService.findUserByUsername(vm.username)
                .success(function (user) {
                    if (user != '0') {
                        vm.user = user;
                    }
                    if (user == '0') {
                        console.log("cannot find user")
                    }
                })
                .error(function () {
                    console.log("find user error")
                });
        }

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }
    }
})();