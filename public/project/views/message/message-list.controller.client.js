/**
 * Created by danni on 12/9/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("MessageListController", MessageListController);

    function MessageListController($routeParams, MessageService, UserService, $location) {
        var vm = this;
        vm.username = $routeParams.username;
        vm.logout = logout;

        function init() {

            var promise = MessageService.findAllMessagesForUser(vm.username);
            promise
                .success(function(messages) {
                    vm.messages = messages;
                    console.log(vm.messages);
                })
                .error(function() {
                    console.log("no message");
                })
        }
        init();

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }
    }
})();