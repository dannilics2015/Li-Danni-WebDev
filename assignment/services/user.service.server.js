/**
 * Created by LiDanni on 10/25/16.
 */
module.exports = function(app) {
    var users = [
        {username: 'Green', password: 'Arrow', _id: "123", firstname: 'Green', lastname: 'Arrow', email: 'ga@mail.com'},
        {username: 'Jessica', password: 'Jones', _id: "234", firstname: 'Jessica', lastname: 'Jones', email: 'jj@mail.com'},
        {username: 'Dare', password: 'Devil', _id: "345", firstname: 'Dare', lastname: 'Devil', email: 'dd@mail.com'}
    ];

    app.post('/api/user', createUser);
    app.get('/api/user', findUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);

    function createUser(req, res) {
        var user = req.body;
        user._id = users[users.length - 1]._id + 1;
        users.push(user);
        res.send(user);
    }


    function updateUser(req, res) {
        var user = req.body;
        var uid = req.params.uid;
        for (var u in users) {
            if (users[u]._id == uid) {
                users[u] = user;
            }
        }
        res.send('200');
    }


    function findUser(req, res) {
        var query = req.query;
        if(query.username && query.password) {
            findUserByCredentials(req, res);
        } else if (query.username) {
            findUserByUsername(req, res);
        }
    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        for (var u in users) {
            if (users[u].username === username && users[u].password === password) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }


    function findUserByUsername(req, res) {
        var username = req.query.username;
        for (var u in users) {
            if (users[u].username === username) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    function findUserById(req, res) {
        var userId = req.params.uid;
        for (var u in users) {
            if (users[u]._id == userId) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    function deleteUser(req, res) {
        var uid = req.params.uid;
        for (var i=0; i < users.length; i++) {
            if (users[i]._id == uid) {
                users.splice(i, 1);
            }
        }
        res.send('200');
    }
};