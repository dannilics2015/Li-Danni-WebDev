/**
 * Created by LiDanni on 11/15/16.
 */
module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    // var MessageSchema = require("../message/message.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);
    // var MessageModel = mongoose.model("MessageModel", MessageSchema);


    var api = {
        createUser: createUser,
        findUserById: findUserById,
        updateUser: updateUser,
        findUserByCredentials: findUserByCredentials,
        findUserByUsername : findUserByUsername,
        deleteUser : deleteUser,
        setModel : setModel,
        findUserByGoogleId : findUserByGoogleId,
        findAllUsers : findAllUsers,

    };
    return api;

    function setModel(_model) {
        model = _model;
    }

    function createUser(user) {
        return UserModel.create(user);
    }

    function findUserById(userId) {
        return UserModel.findById(userId);
    }

    function updateUser(userId, user) {
        return UserModel
            .update(
                {_id: userId},
                {username: user.username, firstname: user.firstname, lastname: user.lastname, email: user.email, street: user.street, city: user.city, country: user.country, zip: user.zip}
            );
    }

    function findUserByCredentials(username, password) {
        return UserModel.findOne({
            username: username,
            password: password
        });
    }

    function findUserByUsername(username) {
        return UserModel.findOne( {
            username: username
        })
    }

    function deleteUser(userId) {
        return UserModel.remove({_id: userId});
    }


    function findUserByGoogleId(googleId) {
        return UserModel.findOne({'google.id' : googleId});
    }

    function findAllUsers(username) {
        return UserModel.find({});
    }
};