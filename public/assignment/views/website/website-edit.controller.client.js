/**
 * Created by LiDanni on 10/15/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService) {
        var vm = this;

        //var websiteId =parseInt($routeParams.uid);

        var website = WebsiteService.findWebsiteById(100);

        vm.website = website;
    }
})()