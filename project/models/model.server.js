module.exports = function () {
    var mongoose = require('mongoose');
    // mongoose.connect('mongodb://localhost/webdev');

    var userModel = require("./user/user.model.server")();
    var collectionModel = require("./collection/collection.model.server")();
    var messageModel = require("./message/message.model.server")();

    var model = {
        userModel: userModel,
        collectionModel: collectionModel,
        messageModel : messageModel
    };

    userModel.setModel(model);
    messageModel.setModel(model);
    collectionModel.setModel(model);
    return model;
};