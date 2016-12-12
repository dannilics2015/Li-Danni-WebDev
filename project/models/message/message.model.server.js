/**
 * Created by danni on 12/7/16.
 */
module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var MessageSchema = require("../message/message.schema.server")();
    var MessageModel = mongoose.model("MessageModel", MessageSchema);


    var api = {
        sendUserMessage : sendUserMessage,
        findAllMessagesForUser : findAllMessagesForUser,
        setModel: setModel
};
    return api;

    function setModel(_model) {
        model = _model;
    }

    function sendUserMessage(ownername, message) {
        return MessageModel
            .create(message)
            .then(function(message) {
                model.userModel
                    .findUserByUsername(ownername)
                    .then(function(user) {
                        message._user = user._id;
                        message.save();
                        user.message.push(message);
                        return user.save();
                    }, function(error){
                        console.log(error);
                    });
            })
    }

    function findAllMessagesForUser(username) {
        return MessageModel.find({
            toUsername: username
        });
    }

};