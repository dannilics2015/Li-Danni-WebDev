/**
 * Created by danni on 12/5/16.
 */
/**
 * Created by danni on 12/5/16.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("CollectionSearchController", CollectionSearchController);

    function CollectionSearchController($routeParams, CollectionService, UserService, $location) {
        var vm = this;

        vm.username = $routeParams.username;

        vm.logout = logout;


        vm.findAllCollectionsByName = findAllCollectionsByName;


        // vm.searchGameByName = searchGameByName;

        // vm.createWebsite = createWebsite;

        // vm.findGameDetails = findGameDetails;

        //when page load will display top 50 games immediately
        function init() {
            // var promise = WebsiteService.findAllWebsitesForUser(userId);
            // promise
            //     .success(function(websites) {
            //         vm.websites = websites;
            //     })
            // var url = "https://bgg-json.azurewebsites.net/hot";
            // $http.get(url)
            //     .success(function(result) {
            //         vm.games = result;
            //     });

        }

        init();


        function findAllCollectionsByName(name) {
            CollectionService.findAllCollectionsByName(name)
                .success(function(collections) {
                    vm.collections = collections;

                    console.log(vm.collections);

                    // var user_col= {userIndex: '0', username:'alice', name:'test', url:'url'};
                    // vm.user_collections.splice(0, vm.user_collections.length);
                    //
                    // for( var i=0; i<vm.collections.length-1; i++){
                    //
                    //     var website = vm.collections[i];
                    //
                    //     UserService.findUserById(website._user)
                    //         .success(function (user) {
                    //             if (user != '0') {
                    //                 console.log(user);
                    //                 user_col.userIndex = i;
                    //                 user_col.username = user.username;
                    //                 user_col.name = website.name;
                    //                 user_col.url = website.url;
                    //
                    //                 console.log('update collections for user: ' + user_col.username);
                    //                 vm.user_collections.push(user_col);
                    //             }
                    //         })
                    //         .error(function () {
                    //             console.log("find user error");
                    //         });
                    // }
                    // $apply();

                })
            //$location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId);
        }

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }

    }
})();