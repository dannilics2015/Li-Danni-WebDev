/**
 * Created by danni on 12/7/16.
 */

module.exports = function () {
    var mongoose = require("mongoose");
    // var UserSchema = require("../user/user.schema.server")(mongoose);
    var MessageSchema = mongoose.Schema({
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        toUsername: String,
        fromUsername: String,
        content: String,
        dateCreated: {type: Date, default: Date.now},
    }, {collection: "message"});
    return MessageSchema;
};