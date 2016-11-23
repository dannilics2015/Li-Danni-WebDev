/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($routeParams, UserService, $location, $rootScope) {
        var vm = this;
        vm.createUser = createUser;
        vm.register = register;

        function createUser(user) {
            UserService
                .createUser(user)
                //.register(user)
                .success(function (user) {
                    var user = user.data;
                    $rootScope.currentUser = user;
                    $location.url("/user/" + user._id);
                });
            // if(vm.password == vm.passwordVerify) {
            //     var promise = UserService.createUser(user);
            //     promise
            //         .success(function (user) {
            //             $location.url("/user/" + user._id);
            //         })
            //         .error(function (error) {
            //             console.log("register error");
            //         })
            // }
            // else vm.error = "Passowrd doesn't match";
        }

        function register(user) {
            if (vm.password != vm.passwordVerify) {
                vm.error = "Passowrd doesn't match";
            } else {
                UserService
                //.createUser(user)
                    .register(user)
                    .success(function (user) {
                        // var user = user.data;
                        // $rootScope.currentUser = user;
                        $location.url("/user/" + user._id);
                    })
                    .error(function (error) {
                        vm.error = "Username already exist";
                    })
            }
        }
    }
})();