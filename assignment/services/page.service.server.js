/**
 * Created by LiDanni on 10/25/16.
 */
module.exports = function(app, model) {

    app.get('/api/website/:wid/page', findAllPagesForWebsite);
    app.post('/api/website/:wid/page', createPage);
    app.get('/api/page/:pid', findPageById);
    app.put('/api/page/:pid', updatePage);
    app.delete('/api/page/:pid', deletePage);


    function createPage(req, res) {
        var page = req.body;
        var wid = req.params.wid;
        model
            .pageModel
            .createPage(wid, page)
            .then(
                function(newPage){
                    res.send(newPage);

                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.wid;
    //     var result = [];
    //     for (var p in pages) {
    //         if(pages[p].websiteId == websiteId) {
    //             result.push(pages[p]);
    //         }
    //     }
    //     res.send(result);
    // }
        model
            .pageModel
            .findAllPagesForWebsite(websiteId)
            .then(
                function(pages){
                    if(pages){
                        res.json(pages);
                    }
                    else{
                        res.send('0');
                    }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findPageById(req, res) {
        var pageId = req.params.pid;
    //     for (var p in pages) {
    //         if(pages[p]._id == pageId) {
    //             res.send(pages[p]);
    //             return;
    //         }
    //     }
    //     res.send('0');
    // }
        model
            .pageModel
            .findPageById(pageId)
            .then(
                function(page){
                    if(page){
                        res.send(page);
                    }
                    else{
                        res.send('0');
                    }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function updatePage(req, res) {
        var page = req.body;
    //     var pid = req.params.pid;
    //     for(var p in pages) {
    //         if(pages[p]._id == pid) {
    //             pages[p] = page;
    //         }
    //     }
    //     res.send('200');
    // }
        var pageId = req.params.pid;
        model
            .pageModel
            .updatePage(pageId, page)
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function deletePage(req, res) {
        var pid = req.params.pid;
    //     for (var i=0; i < pages.length; i++) {
    //         if (pages[i]._id == pid) {
    //             pages.splice(i, 1);
    //         }
    //     }
    //     res.send('200');
    // }
        model
            .pageModel
            .deletePage(pid)
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }
};

