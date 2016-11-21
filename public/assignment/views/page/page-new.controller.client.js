/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, PageService, $location) {
        var vm = this;
        var websiteId = $routeParams.wid;
        var userId =  $routeParams.uid;
        vm.wid = websiteId;
        vm.uid = userId;

        vm.createPage = createPage;
        //var pages = PageService.findPageByWebsiteId(websiteId);
        //vm.pages = pages;

        function init() {
            var promise = PageService.findAllPagesForWebsite(websiteId);
            promise
                .success(function(pages) {
                    vm.pages = pages;
                })
        }
        init();

        function createPage(websiteId, page) {
            // var promise = PageService.createPage(websiteId, page);
            // promise
            //     .success(function (page) {
            //         $location.url("/user/" + userId + "/website/" + websiteId + "/page");
            //     })
            //     .error(function (error) {
            //         console.log("create page error");
            //     });
            var page ={};
            var name = document.getElementById('name').value;
            var title = document.getElementById('title').value;
            page.name = name;
            page.title = title;
            var promise = PageService.createPage(websiteId, page);
            promise
                .success(function (page) {
                    $location.url("/user/" + userId + "/website/" + websiteId + "/page");
                })
                .error(function (error) {
                    console.log("create page error");
                });
        }


    }
})();