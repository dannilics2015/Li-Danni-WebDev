/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        var userId = $routeParams.uid;
        vm.uid = userId;

        var websiteId = $routeParams.wid;
        vm.wid = websiteId;

        function init() {
            var promise = PageService.findAllPagesForWebsite(websiteId);
            promise
                .success(function(pages) {
                    vm.pages = pages;
                })
                .error(function(){
                    console.log("no pages");
                })
        }
        init();

    }
})();