/**
 * Created by LiDanni on 10/5/16.
 */
(function(){
    "use strict";
    angular
        .module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);

    function WebsiteService($http){

        var api = {
            createWebsite : createWebsite,
            findAllWebsitesForUser : findAllWebsitesForUser,
            findWebsiteById : findWebsiteById,
            updateWebsite : updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;


        function createWebsite(userId, website){
            var url = "/api/user/" + userId + "/website";
            return $http.post(url, website);
        }

        function findAllWebsitesForUser(userId) {
            var url = "/api/user/" + userId + "/website";
            return $http.get(url);
        }

        function findWebsiteById(websiteId){
            var url = "/api/website/" + websiteId;
            return $http.get(url);

            // for (var i=0; i <websites.length; i++) {
            //     if(websites[i]._id == websiteId) {
            //         return websites[i];
            //     }
            // }
            // return null;
        }

        function updateWebsite(websiteId, website){
            // for (var i=0; i <websites.length; i++) {
            //     if (websites[i]._id == websiteId) {
            //         websites[i].name = website.name;
            //         websites[i].developerId = website.developerId;
            //         websites[i].description = website.description;
            //     }
            // }
            var url = "/api/website/" + websiteId;
            return $http.put(url, website);
        }
        function deleteWebsite(websiteId){
            // for (var i=0; i<websites.length; i++) {
            //     if (websites[i]._id == websiteId) {
            //         websites.splice(i, 1);
            //         break;
            //     }
            // }
            var url = "/api/website/" + websiteId;
            return $http.delete(url);
        }
    }
})();