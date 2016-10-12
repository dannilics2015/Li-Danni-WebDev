/**
 * Created by LiDanni on 10/5/16.
 */
(function(){
    "use strict";
    angular
        .module("WebAppMaker")
        .factory("PageService ",PageService );

    function PageService (){

        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456" },
            { "_id": "432", "name": "Post 2", "websiteId": "456" },
            { "_id": "543", "name": "Post 3", "websiteId": "456" }
        ];

        var api = {
            "createPage" : "createPage",
            "findPageByWebsiteId" : "findPageByWebsiteId",
            "findPageById" : "findpageById",
            "updatePage" : "updatePage",
            "deletePage": "deletePage"
        };
        return api;

        function createPage(websiteId, page){

        }
        function findPageById(pageId){
            for(var i=0; i<pages.length; i++){
                if(pages[i]._id == pageId){
                    return pages[i];
                }
            }
            return null;
        }
        function findPagesByWebsiteId(websiteId){
            for(var i=0; i<pages.length; i++){
                if(pages[i].websiteId == websiteId){
                    return pages[i];
                }
            }
            return null;
        }
        function updatePage(pageId, page){
            for(var i=0; i<pages.length; i++){
                if(pages[i]._id == pageId){
                    pages[i].name = page.name;
                    pages[i].websiteId = page.websiteId;
                    break;
                }
            }
        }
        function deletepage(pageId){
            for(var i=0; i<pages.length; i++){
                if(pages[i]._id == pageId){
                    pages.splice(i,1);
                    break;
                }
            }
        }
    }
})();