/**
 * Created by danni on 12/9/16.
 */
//send user message
(function() {
    angular
        .module("WebAppMaker")
        .factory("MessageService", MessageService);

    function MessageService($http) {

        var api = {
            sendUserMessage : sendUserMessage,
            findAllMessagesForUser : findAllMessagesForUser,
        };
        return api;

        function sendUserMessage(ownername, message) {
            var url = "/api/user/" + ownername + "/message";
            return $http.post(url, message);
        }
        function findAllMessagesForUser(username) {
            var url = "/api/user/" + username + "/message";
            return $http.get(url);
        }
    }
})();