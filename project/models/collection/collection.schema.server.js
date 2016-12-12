/**
 * Created by danni on 12/3/16.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    // var PageSchema = require("../page/page.schema.server.js")(mongoose);
    var CollectionSchema = mongoose.Schema({
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String,
        name: String,
        description: String,
        price: String,
        date: {type: Date, default: Date.now},
        condition: String,
        url: String,
    }, {collection: "collection"});
    return CollectionSchema;
};
