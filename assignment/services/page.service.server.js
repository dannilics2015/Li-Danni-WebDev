/**
 * Created by LiDanni on 10/25/16.
 */
module.exports = function(app) {
    var pages = [
        {_id: "321", name: "Post 1", websiteId: "100"},
        {_id: "432", name: "Post 2", websiteId: "100"},
        {_id: "543", name: "Post 3", websiteId: "100"}
    ];

    app.get('/api/website/:wid/page', findAllPagesForWebsite);
    app.post('/api/website/:wid/page', createPage);
    app.get('/api/page/:pid', findPageById);
    app.put('/api/page/:pid', updatePage);
    app.delete('/api/page/:pid', deletePage);


    function createPage(req, res) {
        var page = req.body;
        var wid = req.params.wid;
        if(pages.length == 0) {
            page._id = 1;
        }
        else page._id = (pages[pages.length - 1])._id + 1;
        page.websiteId = wid;
        pages.push(page);
        res.send(page);
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.wid;
        var result = [];
        for (var p in pages) {
            if(pages[p].websiteId == websiteId) {
                result.push(pages[p]);
            }
        }
        res.send(result);
    }

    function findPageById(req, res) {
        var pageId = req.params.pid;
        for (var p in pages) {
            if(pages[p]._id == pageId) {
                res.send(pages[p]);
                return;
            }
        }
        res.send('0');
    }

    function updatePage(req, res) {
        var page = req.body;
        var pid = req.params.pid;
        for(var p in pages) {
            if(pages[p]._id == pid) {
                pages[p] = page;
            }
        }
        res.send('200');
    }

    function deletePage(req, res) {
        var pid = req.params.pid;
        for (var i=0; i < pages.length; i++) {
            if (pages[i]._id == pid) {
                pages.splice(i, 1);
            }
        }
        res.send('200');
    }
};

