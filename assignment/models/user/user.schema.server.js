/**
 * Created by LiDanni on 11/15/16.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstname: String,
        lastname: String,
        email: String,
        phone: String,
        //websites: Website,
        // dateCreated: {type: Date, default: Date.now}
    }, {collection: "user"});
    return UserSchema;
};