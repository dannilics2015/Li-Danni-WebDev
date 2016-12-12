/**
 * Created by danni on 12/3/16.
 */

module.exports = function(app, model) {
    app.get('/api/user/:username/collection', correctUser, findAllCollectionsForUser);
    app.post('/api/user/:username/collection', correctUser,createCollection);
    app.get('/api/collection/:cid', findCollectionById);
    app.put('/api/:username/collection/:cid', correctUser, updateCollection);
    app.delete('/api/:username/collection/:cid', correctUser, deleteCollection);
    app.get('/api/collection/search/:name', findAllCollectionsByName);
    app.get('/api/collection/:name/all', findAllCollections);

    function findAllCollectionsForUser(req, res) {
        var username = req.params.username;
        model.collectionModel.findAllCollectionsForUser(username)
            .then(
                function(collections){
                    // if(websites){
                    res.send(collections);
                    // }
                    // else{
                    //     res.send('0');
                    // }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function createCollection(req, res) {
        var collection = req.body;
        var username = req.params.username;
        model
            .collectionModel
            .createCollection(username, collection)
            .then(
                function(newCollection) {
                    console.log(newCollection);
                    res.send(newCollection);
                },
                function(error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findCollectionById(req, res) {
        var collectionId = req.params.cid;
        model
            .collectionModel
            .findCollectionById(collectionId)
            .then(
                function(collection) {
                    if(collection) {
                        res.send(collection);
                    }
                    else {
                        res.send('0');
                    }
                },
                function(error) {
                    res.sendStatus(400).send(error);
                });
    }

    function updateCollection(req, res) {
        var collection = req.body;
        var cid = req.params.cid;
        model
            .collectionModel
            .updateCollection(cid, collection)
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function deleteCollection(req, res) {
        var collectionId = req.params.cid;
        var username = req.params.username;
        model
            .collectionModel
            .deleteCollection(username, collectionId)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findAllCollectionsByName(req, res) {
        var name = req.params.name;
        model.collectionModel.findAllCollectionsByName(name)
            .then(
                function(collections){
                    // if(websites){
                    res.send(collections);
                    // }
                    // else{
                    //     res.send('0');
                    // }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findAllCollections(req, res) {
        model.collectionModel.findAllCollections()
            .then(
                function(allcollections) {
                    res.send(allcollections);
                },
                function(error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    //check if it is the same log in user before proceed the operation
    function correctUser(req, res, next) {
        var loggedin = req.isAuthenticated();
        var username = req.params.username;
        var self = username == req.user.username;
        if(self && loggedin) {
            next();
        } else {
            res.send(400, "You are not authorized to manage other user's collection");
        }
    }
};