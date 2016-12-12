/**
 * Created by danni on 12/3/16.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("CollectionListController", CollectionListController);

    function CollectionListController($routeParams, CollectionService, $location, UserService) {
        var vm = this;
        vm.username = $routeParams.username;

        var collectionId = $routeParams.cid;
        vm.cid = collectionId;

        vm.logout = logout;

        function init() {

            var promise = CollectionService.findAllCollectionsForUser(vm.username);
            promise
                .success(function(collections) {
                    vm.collections = collections;
                })
                .error(function() {
                    console.log("no collection found");
                })
        }
        init();

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }

        // function findAllCollections() {
        //     console.log("hello from find all collections")
        //     CollectionService.findAllCollections()
        //         .success(function(allcollections) {
        //             vm.allcollections = allcollections;
        //             console.log(vm.allcollections);
        //         })
        //         .error(function() {
        //             console.log("empty collection");
        //         })
        //     console.log("bye from find all collections")
        // }
    }
})();