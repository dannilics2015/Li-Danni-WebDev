/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        var userId =parseInt($routeParams.uid);
        vm.uid = userId;

        var websiteId = parseInt($routeParams.wid);
        vm.wid = websiteId;

        var pages = PageService.findPageByWebsiteId(websiteId);
        vm.pages = pages;

    }
})();