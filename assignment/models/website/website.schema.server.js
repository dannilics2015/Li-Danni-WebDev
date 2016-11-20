/**
 * Created by LiDanni on 11/15/16.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var PageSchema = require("../page/page.schema.server.js")(mongoose);
    var WebsiteSchema = mongoose.Schema({
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        name: String,
        description: String,
        pages: [PageSchema],
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "website"});
    return WebsiteSchema;
};
