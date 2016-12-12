/**
 * Created by danni on 12/9/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("MessageReplyController", MessageReplyController);

    function MessageReplyController($routeParams, MessageService, UserService, $location) {
        var vm = this;
        vm.fromusername = $routeParams.username;
        vm.tousername = $routeParams.fromusername;
        vm.sendUserMessage = sendUserMessage;
        vm.logout = logout;

        function init() {
            UserService.findUserByUsername(vm.tousername)
                .success(function (user) {
                    if (user != '0') {
                        vm.touser = user;
                    }
                    if (user == '0') {
                        console.log("cannot find user")
                    }
                })
                .error(function () {
                    console.log("find user error")
                });

            UserService.findUserByUsername(vm.fromusername)
                .success(function (user) {
                    if (user != '0') {
                        vm.fromuser = user;
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
            message.fromUsername = vm.fromusername;
            message.content = content;
            message.toUsername = vm.tousername;

            MessageService.sendUserMessage(vm.fromusername, message)
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