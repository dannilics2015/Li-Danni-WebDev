/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, PageService, $location) {
        var vm = this;
        var websiteId =parseInt($routeParams.wid);
        var userId = parseInt($routeParams.uid);
        vm.wid = websiteId;
        vm.uid = userId;

        vm.createPage = createPage;

        function createPage(websiteId, page) {
            PageService.createPage(websiteId, page);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page");
        }

    }
})();