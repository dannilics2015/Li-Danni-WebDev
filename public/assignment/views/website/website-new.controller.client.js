/**
 * Created by LiDanni on 10/15/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;

        var userId = $routeParams.uid;
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




        function createWebsite() {
            var name = document.getElementById('name').value;
            var description = document.getElementById('description').value;
            if(name == "") {
                vm.error = "please enter valid website name";
                return;
            }
            if(name != "") {
                var website = {};
                website.name = name;
                website.description = description;
                var promise = WebsiteService.createWebsite(vm.uid, website);
                promise
                    .success(function(website){
                        if(website){
                            $location.url("/user/" + vm.uid + "/website");
                        }
                    })
                    .error(function (error) {
                        console.log("create website error");
                    });
            }
        }



    }
})();