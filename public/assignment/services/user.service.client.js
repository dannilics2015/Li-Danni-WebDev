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
            deleteUser : deleteUser,
            login : login,
            checkLogin: checkLogin,
            logout: logout,
            register : register
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
            // for (var i in users) {
            //     if(users[i].username === username) {
            //         return users[i];
            //     }
            // }
            // return null;
            var url = "/api/user/" + username;
            return $http.get(url);
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

        function login(username, password){
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/login", user);
        }

        function checkLogin() {
            return $http.post("/api/checkLogin");
        }

        function logout() {
            return $http.post("/api/logout");
        }

        //create an user and login them in with passport
        function register(user) {
            var user = {
                username: user.username,
                password: user.password
            };
            return $http.post("/api/register", user);
        }
    }
})();