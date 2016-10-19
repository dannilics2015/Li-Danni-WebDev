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
            { "_id": "100", "name": "Facebook",    "developerId": "123", "description": "a social networking website"},
            { "_id": "101", "name": "Tweeter",     "developerId": "123", "description": "popluar platform to trend hot topics"},
            { "_id": "102", "name": "Gizmodo",     "developerId": "234", "description": "a design technology and science fiction website"},
            { "_id": "103", "name": "Tic Tac Toe", "developerId": "234", "description": "a paper-and-pencil game for two players" },
            { "_id": "104", "name": "Checkers",    "developerId": "345", "description": "a strategy board games for two players" },
            { "_id": "105", "name": "Chess",       "developerId": "345", "description": "a strategy board games for two players" },
            { "_id": "106", "name": "Seattle Times", "developerId": "123", "description": "a news agency for local Seattle area"},
            { "_id": "107", "name": "IKEA",        "developerId": "123", "description": "a popular furniture shopping store"},
            { "_id": "108", "name": "Uwajimaya",   "developerId": "123", "description": "a Japanese Supermarket in Seattle/Bellevue"},

        ];

        var api = {
            // createWebsite : createWebsite,
            findWebsitesByUser : findWebsitesByUser,
            findWebsiteById : findWebsiteById,
            updateWebsite : updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;


        // function createWebsite(website){
        //     var last_website_id = websites[websites.length-1]._id;
        //     last_website_id.toString.
        //         website["_id"] = last_website_id + 1 ;
        //     websites.push(website);
        // }

        function findWebsitesByUser(userId){
            var user_websites = [];
            for(var i=0; i<websites.length; i++){
                if(websites[i].developerId == userId){
                    user_websites.push(websites[i]);
                }
            }
            return user_websites;
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