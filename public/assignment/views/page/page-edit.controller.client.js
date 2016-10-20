/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService, $location) {
        var vm = this;
        var websiteId = parseInt($routeParams.wid);
        vm.wid = websiteId;

        var userId = parseInt($routeParams.uid);
        vm.uid = userId;

        var pageId = parseInt($routeParams.pid);
        vm.pid = pageId;

        var page = PageService.findPageById(pageId);
        vm.page = page;

        var pages = PageService.findPageByWebsiteId(websiteId);
        vm.pages = pages;

        vm.updatePage = updatePage;
        vm.deletePage = deletePage;
        vm.findPageById = findPageById;

        function updatePage(pageId, page) {
            PageService.updatePage(pageId, page);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page");
        }

        function deletePage(pageId) {
            PageService.deletePage(pageId);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page");
        }

        function findPageById(pageId) {
            PageService.findPageById(pageId);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId);
        }
    }
})();