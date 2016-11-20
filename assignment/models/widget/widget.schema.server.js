/**
 * Created by LiDanni on 11/15/16.
 */
module.exports = function() {
    var mongoose = require("mongoose");

    var WidgetSchema = mongoose.Schema({
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        _page: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Page'
        },
        type: String,
        name: String,
        text: String,
        placeholder: String,
        description: String,
        url: String,
        width: String,
        height: String,
        rows: Number,
        size: Number,
        class: String,
        icon: String,
        deletable: Boolean,
        formatted: Boolean,
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "widget"});

    return WidgetSchema;
};
