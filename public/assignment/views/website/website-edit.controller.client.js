/**
 * Created by LiDanni on 10/15/16.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService, $location) {
        var vm = this;

        var websiteId =parseInt($routeParams.wid);
        vm.wid = websiteId;

        var userId =parseInt($routeParams.uid);
        vm.uid = userId;

        vm.deleteWebsite = deleteWebsite;
        vm.updateWebsite = updateWebsite;
        vm.findWebsiteById =findWebsiteById;

        function init() {


            WebsiteService.findWebsiteById(websiteId)
                .success(function(website) {
                    vm.website = website;
                })


            var promise = WebsiteService.findAllWebsitesForUser(vm.uid);
            promise
                .success(function(websites) {
                    vm.websites = websites;
                })
        }
        init();

        function deleteWebsite(websiteId) {
            WebsiteService.deleteWebsite(websiteId)
                .success(function() {
                    $location.url("/user/" + userId + "/website")
                })
        }

        function updateWebsite() {
            WebsiteService.updateWebsite(websiteId, vm.website);
            $location.url("/user/" + userId + "/website");
        }

        function findWebsiteById(websiteId) {
            WebsiteService.findWebsiteById(websiteId);
            $location.url("/user/" + userId + "/website/" + websiteId);
        }
    }
})()