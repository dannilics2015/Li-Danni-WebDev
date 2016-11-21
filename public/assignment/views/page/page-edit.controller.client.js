/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService, $location) {
        var vm = this;
        var websiteId = $routeParams.wid;
        vm.wid = websiteId;

        var userId = $routeParams.uid;
        vm.uid = userId;

        var pageId = $routeParams.pid;
        vm.pid = pageId;


        // var pages = PageService.findPageByWebsiteId(websiteId);
        // vm.pages = pages;

        vm.updatePage = updatePage;
        vm.deletePage = deletePage;
        vm.findPageById = findPageById;

        function init() {
            PageService.findPageById(pageId)
                .success(function(page) {
                    if(page != '0') {
                        vm.page = page;
                    }
                })

            PageService.findAllPagesForWebsite(websiteId)
                .success(function(pages) {
                    vm.pages = pages;
                })
        }

        init();

        function updatePage() {
            // PageService.updatePage(pageId, page);
            // $location.url("/user/" + userId + "/website/" + websiteId + "/page");
            // PageService.updatePage(vm.pid, vm.page)
            //     .success(function() {
            //         $location.url("/user/" + userId + "/website/" + websiteId + "/page");
            //     });
            var page ={};
            var name = document.getElementById('name').value;
            var title = document.getElementById('title').value;
            page._id = vm.pid;
            page.name = name;
            page.title = title;
            page.websiteId = vm.wid;
            // PageService.updatePage(pageId, page);
            // $location.url("/user/" + userId + "/website/" + websiteId + "/page");
            PageService.updatePage(vm.pid, vm.page)
                .success(function() {
                    $location.url("/user/" + userId + "/website/" + websiteId + "/page");
                });
        }

        function deletePage(pageId) {
            // PageService.deletePage(pageId);
            // $location.url("/user/" + userId + "/website/" + websiteId + "/page");
            PageService.deletePage(pageId)
                .success(function () {
                    $location.url("/user/" + userId + "/website/" + websiteId + "/page");
                })

        }

            function findPageById(pageId) {
                PageService.findPageById(pageId)
                    .success(function(page) {
                        vm.page = page;
                    })
                //$location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId);
            }
    }
})();