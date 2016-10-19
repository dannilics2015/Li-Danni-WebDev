/**
 * Created by LiDanni on 10/5/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("WidgetService",WidgetService);

    function WidgetService(){
        var widgets = [
            { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/eFqj-jgA6Mg" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ]

        var api = {
            createWidget : createWidget,
            findWidgetByPageId : findWidgetByPageId,
            findWidgetById : findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };
        return api;


        function createWidget(){
            var last_widget_id = widgets[widgets.length-1]._id;
            last_widget_id.toString.
                widget["_id"] = last_widget_id + 1 ;
            widgets.push(widget);
        }

        function findWidgetByPageId(pageId){
            var page_widgets = [];
            for(var i=0; i<widgets.length; i++){
                if(widgets[i].pageId == pageId){
                    page_widgets.push(widgets[i]);
                }
            }
            return page_widgets;
        }

        function findWidgetById(widgetId){
            for (var i=0; i < widgets.length; i++) {
                if(widgets[i]._id == widgetId) {
                    return widgets[i];
                }
            }
            return null;
        }

        function updateWidget(widgetId, widget){
            for (var i=0; i <widgets.length; i++) {
                if (widgets[i]._id == widgetId) {
                    widgets[i].update(widget);
                }
            }
        }
        function deleteWidget(widgetId){
            for (var i=0; i<widgets.length; i++) {
                if (widgets[i]._id = widgetId) {
                    widgets.splice(i, 1);
                    break;
                }
            }
        }
    }
})();