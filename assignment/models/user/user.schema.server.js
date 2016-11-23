/**
 * Created by LiDanni on 11/15/16.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var WebsiteSchema = require("../website/website.schema.server")(mongoose);
    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstname: String,
        lastname: String,
        //role: {type: String, enum:['ADMIN', 'STUDENT', 'FACULTY']},
        email: String,
        phone: String,
        websites: [WebsiteSchema],
        //websites: [{type:mongoose.Schema.Types.ObjectId, ref:'WebsiteModel'}] //prefer for have the instances live in and share only with the user
        dateCreated: {type: Date, default: Date.now},
        facebook: {
            id: String,
            token: String
        }
    }, {collection: "user"});
    return UserSchema;
};