/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService) {
        var vm = this;

        var createWebsite = createWebsite;

        function createWebsite() {
            WebsiteService.createWebsite()
        }
    }
})();