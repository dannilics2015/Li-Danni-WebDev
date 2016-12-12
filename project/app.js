/**
 * Created by LiDanni on 10/25/16.
 */
module.exports = function(app) {

    var model = require("./models/model.server")();
    require("./services/user.service.server.js")(app, model);
    require("./services/collection.service.server.js")(app, model);
    require("./services/message.service.server.js")(app, model);
};

