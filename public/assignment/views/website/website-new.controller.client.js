/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;

        var userId =parseInt($routeParams.uid);
        vm.uid = userId;


        vm.createWebsite = createWebsite;

        function createWebsite(userId, website) {
            WebsiteService.createWebsite(userId, website);
            $location.url("/user/" + userId + "/website");
        }

        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(userId);

        }

        init();

    }
})();