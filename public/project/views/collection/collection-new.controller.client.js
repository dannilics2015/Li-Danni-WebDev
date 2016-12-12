/**
 * Created by danni on 12/3/16.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("CollectionNewController", CollectionNewController);

    function CollectionNewController($routeParams, CollectionService, $location, UserService) {
        var vm = this;
        vm.username = $routeParams.username;


        var collectionId = $routeParams.cid;
        vm.cid = collectionId;

        vm.logout = logout;

        vm.createCollection = createCollection;
        // vm.findCollectionById = findCollectionById;

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
             // findCollectionById(collectionId);
        }
        init();

        function createCollection() {
            var name = document.getElementById('name').value;
            var description = document.getElementById('description').value;
            var price = document.getElementById('price').value;
            var url = document.getElementById('url').value;
            var condition = document.getElementById('condition').value;
            if(name == "") {
                vm.error = "please enter valid website name";
                return;
            }
            if(name != "") {
                var collection = {};
                collection.name = name;
                collection.description = description;
                collection.price = price;
                collection.username = vm.username;
                collection.url = url;
                collection.condition = condition;
                var promise = CollectionService.createCollection(vm.username, collection);
                promise
                    .success(function(collection){
                            alert("Create Successfully");
                            $location.url("/homepage/" + vm.username + "/collection");

                    })
                    .error(function (error) {
                        console.log("create collection error");
                    });
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