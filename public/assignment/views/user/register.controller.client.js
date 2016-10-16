/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($routeParams, UserService) {
        var vm = this;
        vm.createUser = createUser;

        function createUser() {
            UserService.createUser;
        }
    }
})();