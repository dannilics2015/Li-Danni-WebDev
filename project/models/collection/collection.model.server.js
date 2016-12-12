/**
 * Created by danni on 12/3/16.
 */
module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var CollectionSchema = require("./collection.schema.server")();
    var CollectionModel = mongoose.model("CollectionModel", CollectionSchema);

    var api = {
        findAllCollectionsForUser: findAllCollectionsForUser,
        createCollection: createCollection,
        findCollectionById: findCollectionById,
        updateCollection: updateCollection,
        deleteCollection: deleteCollection,
        findAllCollectionsByName: findAllCollectionsByName,
        findAllCollections: findAllCollections,
        setModel: setModel
    };
    return api;

    function setModel(_model) {
        model = _model;
    }

    function findAllCollectionsForUser(username) {
        return CollectionModel.find({
            username: username
        });
    }

    function createCollection(username, collection) {
        return CollectionModel
            .create(collection)
            .then(function(collection) {
                model.userModel
                    .findUserByUsername(username)
                    .then(function(user) {
                        collection._user = user._id;
                        collection.save();
                        user.collections.push(collection);
                        return user.save();
                    }, function(error){
                        console.log(error);
                    });
            })
    }


    function findCollectionById(collectionId) {
        return CollectionModel
            .findById(collectionId);
    }

    function updateCollection(collectionId, collection){
        return CollectionModel
            .update(
                {_id: collectionId},
                {name: collection.name, description: collection.description, price: collection.price,
                    date: collection.date, url: collection.url}
            );
    }

    function deleteCollection(username, collectionId) {
        return CollectionModel
            .remove({
                _id: collectionId
            })
            .then(function() {
                model.userModel
                    .findUserByUsername(username)
                    .then(function(user) {
                        user.collections.remove({
                            _id: collectionId
                        })
                        user.save();
                    }, function(error) {
                        console.log(error);
                    });
            })
    }

    function findAllCollectionsByName(name) {
        return CollectionModel.find({
            name: name
        });
    }

    function findAllCollections(name) {
        return CollectionModel.find({});
    }
};