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
       // widget.isType = false;
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
                        {
                            _id: widgetId
                        },
                        {
                            name: widget.name,
                            text: widget.text,
                            size: widget.size
                        }
                    );

            case "IMAGE":
                return WidgetModel
                    .update(
                        {
                            _id: widgetId
                        },
                        {
                            name: widget.name,
                            text: widget.text,
                            url: widget.url,
                            width: widget.width,
                        }
                    );
            case "YOUTUBE":
                return WidgetModel
                    .update(
                        {
                            _id: widgetId
                        },
                        {
                            name: widget.name,
                            text: widget.text,
                            url: widget.url,
                            width: widget.width,
                        }
                    );
        }
        return WidgetModel
            .update(
                {
                    _id: widgetId
                });
    }


    function deleteWidget(widgetId){
        return WidgetModel
            .remove({
                _id: widgetId
            })
    }

    function sortWidget(pageId, start, end) {

    }


};
