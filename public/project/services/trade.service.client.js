/**
 * Created by danni on 12/5/16.
 */

(function() {
    "use strict"
    angular
        .module("WebAppMaker")
        .factory("TradeService",TradeService);

    function TradeService ($http) {

        var api = {
            // createPage: createPage,
            // findAllPagesForWebsite: findAllPagesForWebsite,
            // findPageById: findPageById,
            // updatePage: updatePage,
            // deletePage: deletePage
            findAllCollectionsByName: findAllCollectionsByName,
        };
        return api;

        function findAllCollectionsByName(name) {
            // for (var i = 0; i < pages.length; i++) {
            //     if (pages[i]._id == pageId) {
            //         return pages[i];
            //     }
            // }
            // return null;
            var url = "/api/website/" + name;
            return $http.get(url);
        }

        // function createPage(websiteId, page) {
        //     // var last_page_id = pages[pages.length - 1]._id;
        //     // page._id = last_page_id + 1;
        //     // page.websiteId = websiteId;
        //     // pages.push(page);
        //     var url = "/api/website/" + websiteId + "/page";
        //     return $http.post(url, page);
        //
        //
        // }
        //
        // function findAllPagesForWebsite(websiteId) {
        //     // var pagesByWebId = [];
        //     // for(var i=0; i<pages.length; i++){
        //     //     if(pages[i].websiteId == websiteId){
        //     //         pagesByWebId.push(pages[i]);
        //     //     }
        //     // }
        //     // return pagesByWebId;
        //     var url = "/api/website/" + websiteId + "/page";
        //     return $http.get(url);
        // }
        //
        // function findPageById(pageId) {
        //     // for (var i = 0; i < pages.length; i++) {
        //     //     if (pages[i]._id == pageId) {
        //     //         return pages[i];
        //     //     }
        //     // }
        //     // return null;
        //     var url = "/api/page/" + pageId;
        //     return $http.get(url);
        // }
        //
        // function updatePage(pageId, page) {
        //     // for (var i = 0; i < pages.length; i++) {
        //     //     if (pages[i]._id == pageId) {
        //     //         pages[i].name = page.name;
        //     //         pages[i].websiteId = page.websiteId;
        //     //         break;
        //     //     }
        //     // }
        //     var url = "/api/page/" + pageId;
        //     return $http.put(url, page);
        // }
        //
        // function deletePage(pageId) {
        //     // for (var i = 0; i < pages.length; i++) {
        //     //     if (pages[i]._id == pageId) {
        //     //         pages.splice(i, 1);
        //     //         break;
        //     //     }
        //     // }
        //     var url = "/api/page/" + pageId;
        //     return $http.delete(url);
        // }
    }
})();