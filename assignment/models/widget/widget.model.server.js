/**
 * Created by LiDanni on 11/15/16.
 */
module.exports = function(){
    var mongoose = require("mongoose");
    var WidgetSchema = require("./widget.schema.server")();
    var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

    var api = {
        createWidget: createWidget,
        findAllWidgetsForPage: findAllWidgetsForPage,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        // updateHeader: updateHeader,
        // updateImage: updateImage,
        deleteWidget: deleteWidget,
        sortWidget: sortWidget

    };
    return api;

    function createWidget(pageId, widget){
        widget._page = pageId;
        if(widget.type == "HEADER" && widget.size == null) {
            widget.size = 3;
        }
        return WidgetModel.create(widget);
    }

    function findAllWidgetsForPage(pageId){
        return WidgetModel.find({
                _page: pageId
            });
    }

    function findWidgetById(widgetId){
        return WidgetModel
            .findById(widgetId);
    }

    function updateWidget(widgetId, widget) {
        switch (widget.type) {
            case 'HEADER':
                return WidgetModel
                    .update(
                        {_id: widgetId},
                        {name: widget.name, text: widget.text, size: widget.size}
                    ); break;

            case "IMAGE":
                return WidgetModel
                    .update(
                        {_id: widgetId},
                        {name: widget.name, text: widget.text, url: widget.url, width: widget.width,}
                    ); break;
            case "YOUTUBE":
                return WidgetModel
                    .update(
                        {_id: widgetId},
                        {name: widget.name, text: widget.text, url: widget.url, width: widget.width,}
                    ); break;
            case "HTML":
                return WidgetModel
                    .update(
                        {_id: widgetId},
                        {text: widget.text},
                        {name: widget.name}
                    ); break;
            case "TEXT":
                return WidgetModel
                    .update(
                        {_id: widgetId},
                        {text: widget.text, rows: widget.rows, placeholder: widget.placeholder, formatted: widget.formatted}
                    ); break;
        }
        return WidgetModel
            .update(
                {_id: widgetId});
    }


    function deleteWidget(widgetId){
        return WidgetModel
            .remove({_id: widgetId})
    }

    function sortWidget(pageId, start, end) {
        return WidgetModel
            .find({_page: pageId}, function(error, res) {
                res.splice(end, 0, res.splice(start, 1)[0]);
                });
    }


};
