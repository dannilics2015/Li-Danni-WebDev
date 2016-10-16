/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService) {
        var vm = this;

        var page = PageService.findPageById(321);

        var updateThePage = PageService.updatePage(321, page)

        vm.page = page;
        vm.updateThePage = updateThePage;
    }
})();