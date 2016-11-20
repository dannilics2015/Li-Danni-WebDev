/**
 * Created by LiDanni on 10/5/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            createUser   : createUser,
            findUserById : findUserById,
            findUserByUsername : findUserByUsername,
            findUserByCredentials : findUserByCredentials,
            updateUser : updateUser,
            deleteUser : deleteUser
    };
        return api;

        function createUser(user) {
            return $http.post("/api/user/", user);
        }

        function findUserById(userId) {
            var url = "/api/user/" + userId;
            return $http.get(url);
        }

        function findUserByUsername(username) {
            for (var i in users) {
                if(users[i].username === username) {
                    return users[i];
                }
            }
            return null;
        }

        function findUserByCredentials(username, password){
            var url = '/api/user?username=' + username + '&password=' + password;
            return $http.get(url);
        }

        function updateUser(userId, user) {

            var url = "/api/user/" + userId;
            return $http.put(url, user);
        }

        function deleteUser(userId) {

            var url = "/api/user/" + userId;
            return $http.delete(url);
        }
    }
})();