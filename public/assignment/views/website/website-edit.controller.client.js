/**
 * Created by LiDanni on 10/15/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService) {
        var vm = this;

        var websiteId =parseInt($routeParams.wid);
        vm.wid = websiteId;

        var userId =parseInt($routeParams.uid);
        vm.uid = userId;



        function init() {
            vm.website =  WebsiteService.findWebsiteById(websiteId);
            vm.websites = WebsiteService.findWebsitesByUser(userId);
        }
        init();

    }
})()