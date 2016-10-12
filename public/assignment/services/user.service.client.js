/**
 * Created by LiDanni on 10/5/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ]
        var api = {
            "createUser"   : "createUser",
            "findUserById" : "findUserById",
            "findUserByUsername" : "findUserByUsername",
            "findUserByCredentials" : "findUserByCredentials",
            "updateUser" : "updateUser",
            "deleteUser" : "deleteUser"
    };
        return api;

        function createUser(user) {
            var last_user_id = users[user.length-1]._id;
            last_user_id.toString.
            user["_id"] = last_user_id + 1 ;
            users.push(user);
        }

        function findUserById(userid) {
            for(var i=0; i<users.length; i++){
                if(users[i]._id == userid){
                    return users[i];
                }
            }
            return null;
        }

        function findUserByCredentials(username, password, callback){
            for(var i=0; i<users.length; i++){
                if(users[i].username == username && users[i].password==password){
                    callback(users[i]);
                    break;
                }
            }
        }

        function updateUser(userid, user) {
            for (var i=0; i < users.length; i++) {
                if (user[i]._id == userid) {
                    user[i]._id = userid;
                    user[i].username = user.username;
                }
            }
        }

        function deleteUser(userid) {
            for (var i=0; i < users.length; i++) {
                if (user[i]._id == userid) {
                    users.splice(i, 1);
                }
            }
        }
    }
})();