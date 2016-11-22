/**
 * Created by LiDanni on 10/14/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController)

    function ProfileController($location, $routeParams, UserService) {
        var vm = this;
        var userId = $routeParams.uid;
        vm.uid = userId;
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
        vm.logout = logout;

        function init() {
            UserService.findUserById(userId)
                .success(function (user) {
                    if (user != '0') {
                        vm.user = user;
                    }
                })
                .error(function () {
                    
                });
        }
        init();


        function updateUser() {
            UserService.updateUser(vm.user._id, vm.user);
        }


        function deleteUser() {
            UserService.deleteUser(vm.user._id)
            .success(function() {
                $location.url("/login");
            })
            .error(function() {

            })
        }

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }
    }
})();