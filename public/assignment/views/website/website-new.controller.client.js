/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;

        var userId =parseInt($routeParams.uid);
        vm.uid = userId;


        vm.createWebsite = createWebsite;

            function init() {
                var promise = WebsiteService.findAllWebsitesForUser(userId);
                promise
                    .success(function(websites) {
                        vm.websites = websites;
                    })
            }

            init();




        function createWebsite(userId, website) {
            var promise = WebsiteService.createWebsite(userId, website);
            promise
                .success(function (website) {
                    $location.url("/user/" + userId + "/website");
                })
                .error(function (error) {
                    console.log("create website error");
                });
        }



    }
})();