/**
 * Created by danni on 12/5/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("UserController", UserController)

    function UserController($routeParams, UserService, MessageService, $location) {
        var vm = this;
        //loggin username
        vm.username = $routeParams.username;

        //other user's userId
        vm.ownername = $routeParams.ownername;


        //sending message to other user
        vm.sendUserMessage = sendUserMessage;

        //log out
        vm.logout = logout;


        function init() {
            UserService.findUserByUsername(vm.ownername)
                .success(function (user) {
                    if (user != '0') {
                        vm.owner = user;
                    }
                    if (user == '0') {
                        console.log("cannot find user")
                    }
                })
                .error(function () {
                    console.log("find user error")
                });
        }

        init();


        function sendUserMessage() {
            var content = document.getElementById('message').value;
            if (content == "") {
                alert("please enter valid message");
                return;
            }
            var message = {};
            message.fromUsername = vm.username;
            message.content = content;
            message.toUsername = vm.ownername;

            MessageService.sendUserMessage(vm.ownername, message)
                .success(function () {
                    alert("Send Successfully");
                })
                .error(function () {
                    console.log("Failed to Send Message");
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