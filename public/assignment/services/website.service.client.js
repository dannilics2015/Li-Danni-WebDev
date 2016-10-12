/**
 * Created by LiDanni on 10/5/16.
 */
(function(){
    "use strict";
    angular
        .module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);

    function WebsiteService(){
        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
            { "_id": "678", "name": "Checkers",    "developerId": "123" },
            { "_id": "789", "name": "Chess",       "developerId": "234" }
        ];

        var api = {
            "createWebsite" : "createWebsite",
            "findWebsitesByUser" : "findWebsitesByUser",
            "findWebsiteById" : "findWebsiteById",
            "updateWebsite" : "updateWebsite",
            "deleteWebsite": "deleteWebsite"
        };
        return api;


        function createWebsite(website){}

        function findWebsitesByUser(userId){
            var user_webs = [];
            for(var i=0; i<websites.length; i++){
                if(websites[i].developerId == userId){
                    user_webs.push(websites[i]);
                }
            }
            return user_webs;
        }

        function findWebsiteById(websiteId){
            for (var i=0; i <websites.length; i++) {
                if(websites[i]._id == websiteId) {
                    return websites[i];
                }
            }
            return null;
        }

        function updateWebsite(websiteId, website){
            for (var i=0; i <websites.length; i++) {
                if (websites[i]._id == websiteId) {
                    websites[i].name = website.name;
                    websites[i].developerId = website.developerId;
                }
            }
        }
        function deleteWebsite(websiteId){
            for (var i=0; i<websites.length; i++) {
                if (websites[i]._id = websiteId) {
                    websites.splice(i, 1);
                    break;
                }
            }
        }
    }
})();