/**
 * Created by LiDanni on 10/11/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;

        var userId = $routeParams.uid;
        vm.uid = userId;

        //load and execute initially
        function init() {
            var promise = WebsiteService.findAllWebsitesForUser(vm.uid);
            promise
                .success(function(websites) {
                    vm.websites = websites;
                })
        }

        init();
    }
})();
