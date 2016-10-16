/**
 * Created by LiDanni on 10/5/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService",PageService);

    function PageService (){

        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "100" },
            { "_id": "432", "name": "Post 2", "websiteId": "100" },
            { "_id": "543", "name": "Post 3", "websiteId": "100" }
        ];

        var api = {
            createPage : createPage,
            findPageByWebsiteId : findPageByWebsiteId,
            findPageById : findPageById,
            updatePage : updatePage,
            deletePage: deletePage
        };
        return api;

        function createPage(websiteId, page){
            var last_page_id = parseInt(pages[pages.length - 1]._id);
            page._id = last_page_id + 1;
            page.websiteId = websiteId;
            pages.push(page);
        }

        function findPageByWebsiteId(websiteId){
            var pagesByWebId = [];
            for(var i=0; i<pages.length; i++){
                if(pages[i].websiteId == websiteId){
                    pagesByWebId.push(pages[i]);
                }
            }
            return pagesByWebId;
        }

        function findPageById(pageId){
            for(var i=0; i<pages.length; i++){
                if(pages[i]._id == pageId){
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
        function deletePage(pageId){
            for(var i=0; i<pages.length; i++){
                if(pages[i]._id == pageId){
                    pages.splice(i,1);
                    break;
                }
            }
        }
    }
})();