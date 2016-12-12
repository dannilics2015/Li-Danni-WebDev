/**
 * Created by danni on 12/3/16.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("CollectionEditController", CollectionEditController);

    function CollectionEditController($routeParams, CollectionService, $location, UserService) {
        var vm = this;
        vm.username = $routeParams.username;

        var collectionId = $routeParams.cid;
        vm.cid = collectionId;

        // vm.createCollection = createCollection;
        vm.findCollectionById = findCollectionById;
        vm.updateCollection  = updateCollection;
        vm.deleteCollection = deleteCollection;

        vm.logout = logout;

        function init() {
            var promise = CollectionService.findAllCollectionsForUser(vm.username);
            promise
                .success(function(collections) {
                    vm.collections = collections;
                    console.log(vm.collections);
                })
                .error(function() {
                    console.log("empty website");
                })
            findCollectionById(collectionId);
        }
        init();

        function findCollectionById(collectionId) {
            CollectionService.findCollectionById(collectionId)
                .success(function(collection) {
                    if(collection != '0') {
                        vm.collection = collection;
                        console.log("hello from findCollectionById");
                    }
                })
                .error(function(error) {
                    console.log("find website error");
                });
        }


        function updateCollection() {
            var collection ={};
            var name = document.getElementById('name').value;
            var description = document.getElementById('description').value;
            var price = document.getElementById('price').value;
            var condition = document.getElementById('condition').value;
            var url = document.getElementById('url').value;
            collection._id = vm.cid;
            collection.name = name;
            collection.description = description;
            collection.price = price;
            collection.condition = condition;
            collection.url = url;
            if(name == "") {
                vm.error = "please enter valid website name";
                return;
            }
            CollectionService.updateCollection(vm.cid, collection)
                .success(function() {
                    alert("Update Successfully")
                })
                .error(function() {
                    console.log("create website error");
                })
        }

        function deleteCollection(collectionId) {
            if (confirm('Are you sure you want to DELETE the game')) {
                CollectionService.deleteCollection(vm.username, collectionId)
                    .success(function () {
                        $location.url("/homepage/" + vm.username + "/collection");
                    })
                    .error(function() {

                    })
            } else {
                // Do nothing!
            }
        }

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }
    }
})();