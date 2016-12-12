/**
 * Created by LiDanni on 10/14/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController)

    function ProfileController($location, UserService, CollectionService) {
        var vm = this;

        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
        vm.logout = logout;

        function init() {
            UserService
                .findCurrentUser()
                .success(function (user) {
                    if (user != '0') {
                        vm.user = user;
                    }
                })
                .error(function () {
                    console.log("find user error");
                });
        }
        init();


        function updateUser() {
            UserService.updateUser(vm.user._id, vm.user)
                .success(function() {
                    alert("Update Successfully");
                })
                .error(function() {
                    alert("Update Failed");
                })
        }


        function deleteUser() {
            if (confirm('Are you sure you want to DELETE the user account')) {
                UserService.deleteUser(vm.user._id)
                    .success(function() {
                        $location.url("/login");
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