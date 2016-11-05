var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require ("./test/app.js")(app);

require ("./assignment/app.js")(app);



// var websites = [
//     { _id: "100", name: "Facebook",    developerId: "123", description: "a social networking website"},
//     { _id: "101", name: "Tweeter",     developerId: "123", description: "popluar platform to trend hot topics"},
//     { _id: "102", name: "Gizmodo",     developerId: "234", description: "a design technology and science fiction website"},
//     { _id: "103", name: "Tic Tac Toe", developerId: "234", description: "a paper-and-pencil game for two players" },
//     { _id: "104", name: "Checkers",    developerId: "345", description: "a strategy board games for two players" },
//     { _id: "105", name: "Chess",       developerId: "345", description: "a strategy board games for two players" },
//     { _id: "106", name: "Seattle Times", developerId: "123", description: "a news agency for local Seattle area"},
//     { _id: "107", name: "IKEA",        developerId: "123", description: "a popular furniture shopping store"},
//     { _id: "108", name: "Uwajimaya",   developerId: "123", description: "a Japanese Supermarket in Seattle/Bellevue"},
//
// ];
//
// app.get("/websites", function (req, res) {
//     res.send(websites);
// });
//






app.set('ipaddress', (process.env.IP));
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), app.get('ipaddress'));