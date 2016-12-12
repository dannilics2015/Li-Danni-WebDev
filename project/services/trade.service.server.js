/**
 * Created by danni on 12/5/16.
 */

module.exports = function(app, model) {


    app.get('/api/website/:name', findAllCollectionsByName);

    function findAllCollectionsByName(req, res) {


    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.wid;
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
};

