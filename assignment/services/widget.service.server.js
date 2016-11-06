/**
 * Created by LiDanni on 10/25/16.
 */
module.exports = function(app) {

    var multer = require('multer'); //a nodeJs module to parse files have multi parts/requests
    var upload = multer({ dest: __dirname+'/../../public/uploads' });




    var widgets = [
        { _id: "123", widgetType: "HEADER", pageId: "321", size: 2, text: "GIZMODO"},
        { _id: "234", widgetType: "HEADER", pageId: "321", size: 4, text: "Lorem ipsum"},
        { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%",
            url: "http://lorempixel.com/400/200/"},
        // { _id: "456", widgetType: "H", pageId: "321", text: "<p>Lorem ipsum</p>"},
        { _id: "567", widgetType: "HEADER", pageI: "321", size: 4, text: "Lorem ipsum"},
        { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%",
            url: "https://youtu.be/eFqj-jgA6Mg" },
        // { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
    ];

    app.post ("/api/uploads", upload.single('myFile'), uploadImage);
    app.post('/api/page/:pid/widget', createWidget);
    app.get('/api/page/:pid/widget', findAllWidgetsForPage);
    app.get('/api/widget/:wgid', findWidgetById);
    app.put('/api/widget/:wgid', updateWidget);
    app.delete('/api/widget/:wgid', deleteWidget);
    app.put('/api/page/:pid/widget', sortWidget);

    function createWidget(req, res) {
        var widget = req.body;
        var pid = req.params.pid;
        widget._id = widgets[widgets.length-1]._id + 1;
        widget.pageId = pid;
        widgets.push(widget);
        res.send(widget);
    }

    function findAllWidgetsForPage(req, res) {
        var pid = req.params.pid;
        var result = [];
        for (var w in widgets) {
            if(widgets[w].pageId == pid) {
                result.push(widgets[w]);
            }
        }
        res.send(result);
    }

    function findWidgetById(req, res) {
        var widgetId = req.params.wgid;
        for (var w in widgets) {
            if(widgets[w]._id == widgetId) {
                res.send(widgets[w]);
                return;
            }
        }
        res.send('0');
    }

    function updateWidget(req, res) {
        var widget = req.body;
        var widgetId = req.params.wgid;
        for(var w in widgets) {
            if(widgets[w]._id == widgetId) {
                widgets[w] = widget;
                res.send(widgets[w]);
                return;
            }
        }
        res.send('0');
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.wgid;
        for (var i = 0; i < widgets.length; i++) {
            if(widgets[i]._id == widgetId) {
                widgets.splice(i, 1);
            }
        }
        res.send('200');
    }

    function uploadImage(req, res) {
        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;
        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;
        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in uploads folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        var url = '../assignment/index.html#/user/' + userId + '/website/' + websiteId + '/page/'
        + pageId + '/widget/' + widgetId;

        res.redirect(url);
        // res.send(myFile);
    }

    function sortWidget(req, res) {
        var pageId = req.params.pid;
        var start = req.query.start;
        var end = req.query.end;
        var pageWidgets = -1;
        for(var w in widgets) {
            if(widgets[w].pageId == pageId) {
                pageWidgets++;
                if(start == pageWidgets) {
                    var startIndex = w;
                }
                if(end == pageWidgets) {
                    var endIndex = w;
                }
            }
        }
        var order = widgets.splice(startIndex, 1)[0];
        widgets.splice(endIndex, 0, order);
        res.send('200');
    }
    // function sortWidget(req, res) {
    //     var pageId = req.params.pid;
    //     var start = req.query.start;
    //     var end = req.query.end;
    //
    //     widgets.splice(end, 0, widgets.splice(start, 1)[0]);
    //     res.send('200');
    // }

}