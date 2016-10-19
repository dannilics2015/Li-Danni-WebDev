/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService) {
        var vm = this;

        var userId =parseInt($routeParams.uid);
        vm.uid = userId;


        // var createWebsite = createWebsite;
        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(userId);
            // vm.createWebsite = WebsiteService.createWebsite();
        }

        init();

    }
})();