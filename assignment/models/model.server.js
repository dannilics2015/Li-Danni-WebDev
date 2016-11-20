module.exports = function () {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/webdev');
    var userModel = require("./user/user.model.server")();

    var model = {
        userModel: userModel
    };

    //userModel.setModel(model);
    return model;
};