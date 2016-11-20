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
            UserService
                .createUser(user)
                .success(function(user) {
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
    }
})();