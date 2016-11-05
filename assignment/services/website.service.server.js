/**
 * Created by LiDanni on 10/25/16.
 */
module.exports = function(app) {
    var websites = [
        { _id: "100", name: "Facebook",    developerId: "123", description: "a social networking website"},
        { _id: "101", name: "Tweeter",     developerId: "123", description: "popluar platform to trend hot topics"},
        { _id: "102", name: "Gizmodo",     developerId: "234", description: "a design technology and science fiction website"},
        { _id: "103", name: "Tic Tac Toe", developerId: "234", description: "a paper-and-pencil game for two players" },
        { _id: "104", name: "Checkers",    developerId: "345", description: "a strategy board games for two players" },
        { _id: "105", name: "Chess",       developerId: "345", description: "a strategy board games for two players" },
        { _id: "106", name: "Seattle Times", developerId: "123", description: "a news agency for local Seattle area"},
        { _id: "107", name: "IKEA",        developerId: "123", description: "a popular furniture shopping store"},
        { _id: "108", name: "Uwajimaya",   developerId: "123", description: "a Japanese Supermarket in Seattle/Bellevue"},
    ];

    app.post('/api/user/:uid/website', createWebsite);
    app.get('/api/user/:uid/website', findAllWebsitesForUser);
    app.get('/api/website/:wid', findWebsiteById);
    app.put('/api/website/:wid', updateWebsite);
    app.delete('/api/website/:wid', deleteWebsite);



    function createWebsite(req, res) {
        var website = req.body;
        website._id = websites[websites.length - 1]._id + 1;
        websites.push(website);
        res.send(website);
    }

    function findAllWebsitesForUser(req, res) {
        var uid = req.params.uid;
        var result = [];
        for (var w in websites) {
            if(websites[w].developerId == uid) {
                result.push(websites[w]);
            }
        }
        res.json(result);
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.wid;
        for (var w in websites) {
            if (websites[w]._id == websiteId) {
                res.send(websites[w]);
                return;
            }
        }
        res.send('0');
    }

    function updateWebsite(req, res) {
        var website = req.body;
        var websiteId = req.params.wid;
        for (var w in websites) {
            if (websites[w]._id == websiteId) {
                websites[w] = website;
            }
        }
        res.send('200');
    }


    function deleteWebsite(req, res) {
        var websiteId = req.params.wid;
        for (var i=0; i < websites.length; i++) {
            if (websites[i]._id == websiteId) {
                websites.splice(i, 1);
            }
        }
        res.send('200');
    }

};