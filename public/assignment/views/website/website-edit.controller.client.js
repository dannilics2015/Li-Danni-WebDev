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

        function deleteWebsite(websiteId) {
            WebsiteService.deleteWebsite(websiteId);
        }

        function updateWebsite(websiteId, website) {
            WebsiteService.updateWebsite(websiteId, website);
            $location.url("/user/" + userId + "/website");
        }
        function init() {
            vm.website =  WebsiteService.findWebsiteById(websiteId);
            vm.websites = WebsiteService.findWebsitesByUser(userId);
        }
        init();


    }
})()