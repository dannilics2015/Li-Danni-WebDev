/**
 * Created by LiDanni on 10/6/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        //to do vm.error
        function login(username, password) {
            var promise = UserService.login(username, password);
            promise
                .success(function (user) {
                    if (user == '0') {
                        vm.error = "No such User";
                    }
                    else {
                        $location.url("/user");
                    }
            })
                .error(function () {
                    vm.error = "Password doesn't match"
                    console.log("login error");
                });
        }
    }

})();