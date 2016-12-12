/**
 * Created by danni on 12/9/16.
 */
module.exports = function(app, model) {

    app.post("/api/user/:ownername/message", sendUserMessage);
    app.get("/api/user/:username/message", correctUser, findAllMessagesForUser);

    function sendUserMessage(req, res) {
        var message = req.body;
        var ownername = req.params.ownername;
        model
            .messageModel
            .sendUserMessage(ownername, message)
            .then(
                function(status) {
                    res.send(200);
                },
                function(error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findAllMessagesForUser(req, res) {
        var username = req.params.username;
        model
            .messageModel
            .findAllMessagesForUser(username)
            .then(
                function(messages) {
                    res.send(messages);
                },
                function(error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    //check if it is the same log in user before proceed the operation
    function correctUser(req, res, next) {
        var loggedin = req.isAuthenticated();
        var username = req.params.username;
        var self = username == req.user.username;
        if(self && loggedin) {
            next();
        } else {
            res.send(400, "You are not authorized to see other user's message");
        }
    }
};