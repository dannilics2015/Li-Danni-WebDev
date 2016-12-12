/**
 * Created by danni on 12/3/16.
 */

(function() {
    "use strict"
    angular
        .module("WebAppMaker")
        .factory("CollectionService", CollectionService);

    function CollectionService ($http) {

        var api = {
            createCollection: createCollection,
            findAllCollectionsForUser: findAllCollectionsForUser,
            findCollectionById: findCollectionById,
            updateCollection: updateCollection,
            deleteCollection: deleteCollection,
            findAllCollectionsByName: findAllCollectionsByName,
            findAllCollections : findAllCollections,
        };
        return api;

        function createCollection(username, collection) {
            var url = "/api/user/" + username + "/collection";
            return $http.post(url, collection);
        }

        function findAllCollectionsForUser(username) {
            var url = "/api/user/" + username+ "/collection";
            // var url = "/api/user/website";
            return $http.get(url);
        }

        function findCollectionById(collectionId) {
            var url = "/api/collection/" + collectionId;
            return $http.get(url);
        }

        function updateCollection(collectionId, collection) {
            var url = "/api/" + collection.username + "/collection/" + collectionId;
            return $http.put(url, collection);
        }

        function deleteCollection(username, collectionId) {
            var url = "/api/" + username + "/collection/" + collectionId;
            return $http.delete(url);
        }

        function findAllCollectionsByName(name) {
            var url = "/api/collection/search/" + name;
            return $http.get(url);
        }

        function findAllCollections(name) {
            var url = "/api/collection/" + name + "/all";
            console.log("did you get through?");
            return $http.get(url);
        }
    }
})();