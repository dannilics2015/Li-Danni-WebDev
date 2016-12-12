/**
 * Created by LiDanni on 11/15/16.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var MessageSchema = require("../message/message.schema.server")(mongoose);
    var CollectionSchema = require("../collection/collection.schema.server")(mongoose);
    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstname: String,
        lastname: String,
        role: {type: String, default: 'NONADMIN', enum:['ADMIN', 'NONADMIN']},
        email: String,
        street: String,
        city: String,
        country: String,
        zip: String,
        collections: [CollectionSchema],
        dateCreated: {type: Date, default: Date.now},
        message: [MessageSchema],
        google: {
            id: String,
            token: String,
        }
    }, {collection: "user"});
    return UserSchema;
};