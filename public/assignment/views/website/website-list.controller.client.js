/**
 * Created by LiDanni on 10/11/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;

        var userId =parseInt($routeParams.uid);

        var websites = WebsiteService.findWebsitesByUser(userId);

        vm.websites = websites;
    }
})();
