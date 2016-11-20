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
        }

        function updateWebsite(websiteId, website){
            var url = "/api/website/" + websiteId;
            return $http.put(url, website);
        }
        function deleteWebsite(websiteId){
            var url = "/api/website/" + websiteId;
            return $http.delete(url);
        }
    }
})();