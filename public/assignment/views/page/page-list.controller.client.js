/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        // var websiteId =parseInt($routeParams.uid);

        var pages = PageService.findPageByWebsiteId(100);

        vm.pages = pages;
    }
})();