/**
 * Created by LiDanni on 10/25/16.
 */
module.exports = function(app, model) {

    app.post('/api/user/:uid/website', createWebsite);
    app.get('/api/user/:uid/website', findAllWebsitesForUser);
    app.get('/api/website/:wid', findWebsiteById);
    app.put('/api/website/:wid', updateWebsite);
    app.delete('/api/website/:wid', deleteWebsite);



    function createWebsite(req, res) {
        var website = req.body;
        var uid = req.params.uid;
        model
            .websiteModel
            .createWebsite(uid, website)
            .then(
                function (newweb) {
                // console.log(newweb);
                res.send(newweb);
            },
            function(error) {
                res.sendStatus(400).send(error);
            });
    }

    function findAllWebsitesForUser(req, res) {
        var uid = req.params.uid;
        model.websiteModel.findAllWebsitesForUser(uid)
            .then(
                function(websites){
                    // if(websites){
                        res.send(websites);
                    // }
                    // else{
                    //     res.send('0');
                    // }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.wid;
        model
            .websiteModel
            .findWebsiteById(websiteId)
            .then(
                function(website) {
                    if(website) {
                        res.send(website);
                    }
                    else {
                        res.send('0');
                    }
                },
            function(error) {
                    res.sendStatus(400).send(error);
            });
        }

    function updateWebsite(req, res) {
        var website = req.body;
        var wid = req.params.wid;
        model
            .websiteModel
            .updateWebsite(wid, website)
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }


    function deleteWebsite(req, res) {
        var websiteId = req.params.wid;
        // for (var i=0; i < websites.length; i++) {
        //     if (websites[i]._id == websiteId) {
        //         websites.splice(i, 1);
        //     }
        // }
        // res.send('200');
        model
            .websiteModel
            .deleteWebsite(websiteId)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

};