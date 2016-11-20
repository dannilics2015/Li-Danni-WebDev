/**
 * Created by LiDanni on 11/15/16.
 */
module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        updateUser: updateUser,
        findUserByCredentials: findUserByCredentials,
        deleteUser : deleteUser
    };
    return api;


    function createUser(user) {
        return UserModel.create(user);
    }

    function findUserById(userId) {
        return UserModel.findById(userId);
    }

    function updateUser(userId, user) {
        return UserModel
            .update(
                {
                    _id: userId
                },
                {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email
                }
            );
    }

    function findUserByCredentials(username, password) {
        return UserModel.find({
            username: username,
            password: password
        });
    }

    function deleteUser(userId) {
        return UserModel.remove({_id: userId});
    }
};