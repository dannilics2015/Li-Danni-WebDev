/**
 * Created by LiDanni on 11/15/16.
 */
module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

    var api = {
        createWebsite: createWebsite,
        findAllWebsitesForUser: findAllWebsitesForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite,
        setModel: setModel
    };
    return api;

    function createWebsite(uid, website) {

        website._user = uid;
        return WebsiteModel.create(website);
    }

    function setModel(_model) {
        model = _model;
    }
    function findAllWebsitesForUser(userId) {
        //return model.userModel.findAllWebsitesForUser(userId);
        return WebsiteModel.find({
                _user: userId
            });
    }

    function findWebsiteById(websiteId) {
        return WebsiteModel
            .findById(websiteId);
    }

    function updateWebsite(websiteId, website){
        return WebsiteModel
            .update(
                {_id: websiteId},
                {name: website.name, description: website.description}
            );
    }
    function deleteWebsite(websiteId){
        return WebsiteModel
            .remove({
                _id: websiteId
            })
    }
};