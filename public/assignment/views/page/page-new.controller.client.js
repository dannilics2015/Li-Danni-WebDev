/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, PageService) {
        var vm = this;
        // var websiteId =parseInt($routeParams.uid);

        var createPage = PageService.createPage()

    }
})();