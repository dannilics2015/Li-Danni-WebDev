/**
 * Created by danni on 12/11/16.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("AdminController", AdminController)

    function AdminController($routeParams, $location, UserService) {
        var vm = this;
        vm.username = $routeParams.username;
        vm.deleteUser = deleteUser;
        vm.logout = logout;

        function init() {
            findAllUsers();
        }
        init();

        function findAllUsers() {
            UserService
                .findAllUsers(vm.username)
                .success(function (users) {
                    vm.users = users;
                })
                .error(function () {
                    console.log("find user error");
                });
        }

        function deleteUser(userId) {
            if (confirm('Are you sure you want to DELETE this user')) {
                UserService.deleteUser(userId)
                    .success(function() {
                        alert("Delete Successfully!");
                        findAllUsers();
                    })
                    .error(function() {

                    })
            } else {
                // Do nothing!
            }

        }

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }
    }
})();