/**
 * Created by LiDanni on 10/5/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService() {

        var users = [
            {username: 'Green', password: 'Arrow', _id: 001, firstname: 'Green', lastname: 'Arrow', email: 'ga@mail.com'},
            {username: 'Jessica', password: 'Jones', _id: 002, firstname: 'Jessica', lastname: 'Jones', email: 'jj@mail.com'},
            {username: 'Dare', password: 'Devil', _id: 003, firstname: 'Dare', lastname: 'Devil', email: 'dd@mail.com'}
        ];

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
            var last_user_id = users[user.length-1]._id;
            user._id = last_user_id + 1 ;
            users.push(user);
            console.log("create user successfully");
        }

        function findUserById(userId) {
            for(var i=0; i<users.length; i++){
                if(users[i]._id == userId){
                    return users[i];
                }
            }
            return null;
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
            for(var i in users){
                if(users[i].username === username && users[i].password === password){
                    return users[i];
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            for (var i=0; i < users.length; i++) {
                if (users[i]._id == userid) {
                    users[i]._id = userid;
                    users[i].username = user.username;
                    users[i].email = user.email;
                    users[i].firstname = user.firstname;
                    user[i].lastname = user.lastname;
                }
            }
        }

        function deleteUser(userId) {
            for (var i=0; i < users.length; i++) {
                if (users[i]._id == userId) {
                    users.splice(i, 1);
                }
            }
        }
    }
})();