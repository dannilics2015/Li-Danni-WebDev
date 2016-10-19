/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($routeParams, UserService, $location) {
        var vm = this;
        vm.createUser = createUser;

        function createUser(user) {
            if (vm.password === vm.passwordVerify) {
                var newUser = UserService.createUser(user);
                $location.url("/user/" + newUser._id);
            }
            else {
                vm.error = "Password doesn't match";
            }
        }
    }
})();