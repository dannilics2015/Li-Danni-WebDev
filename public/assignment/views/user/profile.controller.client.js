/**
 * Created by LiDanni on 10/14/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController)

    function ProfileController($routeParams, UserService) {
        var vm = this;
        var userId = parseInt($routeParams.uid);
        vm.uid = userId;
        vm.updateUser = updateUser;

        function init() {
            var user = UserService.findUserById(userId);

            if (user != null) {
                vm.user = user;
            }
        }
        init();


        function updateUser(userId, user) {
            UserService.updateUser(userId, user);
        }
    }
})();