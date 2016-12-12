/**
 * Created by danni on 12/11/16.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("CollectionAllController", CollectionAllController);

    function CollectionAllController($routeParams, CollectionService, $location, UserService) {
        var vm = this;
        vm.username = $routeParams.username;

        // var collectionId = $routeParams.cid;
        // vm.cid = collectionId;

        vm.logout = logout;

        function init() {

            var promise = CollectionService.findAllCollections(vm.username);
            promise
                .success(function(allcollections) {
                    vm.allcollections = allcollections;
                    console.log(vm.allcollections);
                })
                .error(function() {
                    console.log("empty collection");
                })
        }
        init();

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }

    }
})();