/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController(UserService, $location) {
        var vm = this;

        vm.adminRegister = adminRegister;
        vm.register = register;

        function register(user) {
            if(vm.password != vm.passwordVerify) {
                vm.error = "Your password doesn't match";
            }
            else {
                UserService
                    .register(user)
                    .success(function (user) {
                        $location.url("/user");
                    })
                    .error(function (error) {
                        vm.error("Username already taken")
                    })
            }
        }

        function adminRegister(user) {
            if(vm.adminKey == "") {
                vm.error = "Please enter admin key";
            }
            else {
                UserService
                    .adminRegister(user)
                    .success(function (user) {
                        $location.url("/user");
                    })
                    .error(function (error) {
                        vm.error = "Admin Key is not Correct";
                    })
            }
        }
    }
})();