/**
 * Created by LiDanni on 10/5/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("WidgetService",WidgetService);

    function WidgetService($http){
        // var widgets = [
        //     { _id: "123", widgetType: "HEADER", pageId: "321", size: 2, text: "GIZMODO"},
        //     { _id: "234", widgetType: "HEADER", pageId: "321", size: 4, text: "Lorem ipsum"},
        //     { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%",
        //         url: "http://lorempixel.com/400/200/"},
        //     { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
        //     { _id: "567", widgetType: "HEADER", pageI: "321", size: 4, text: "Lorem ipsum"},
        //     { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%",
        //         url: "https://youtu.be/eFqj-jgA6Mg" },
        //     { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
        // ]

        var api = {
            createWidget : createWidget,
            // findWidgetByPageId : findWidgetByPageId,
            findAllWidgetsForPage : findAllWidgetsForPage,
            findWidgetById : findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            sortWidget: sortWidget
        };
        return api;

        function sortWidget(start, end, pageId) {
            var url = "/api/page/" + pageId + "/widget?start=" + start + "&end=" + end;
            return $http.put(url);
        }

        function createWidget(pageId, widget){
            // var last_widget_id = widgets[widgets.length-1]._id;
            // widget._id = last_widget_id + 1 ;
            // widget.pageId = pageId;
            // widgets.push(widget);
            // return widget;
            var url = "/api/page/" + pageId + "/widget";
            return $http.post(url, widget);
        }

        // function findWidgetByPageId(pageId){
        //     var page_widgets = [];
        //     for(var i=0; i<widgets.length; i++){
        //         if(widgets[i].pageId == pageId){
        //             page_widgets.push(widgets[i]);
        //         }
        //     }
        //     return page_widgets;
        // }

        function findAllWidgetsForPage(pageId) {
            var url = "/api/page/" + pageId + "/widget";
            return $http.get(url);
        }

        function findWidgetById(widgetId){
            // for (var i=0; i < widgets.length; i++) {
            //     if(widgets[i]._id == widgetId) {
            //         return widgets[i];
            //     }
            // }
            // return null;
            var url = "/api/widget/" + widgetId;
            return $http.get(url);
        }

        function updateWidget(widgetId, widget){
            // for (var i=0; i <widgets.length; i++) {
            //     if (widgets[i]._id == widgetId) {
            //         widgets[i].size = widget.size;
            //         widgets[i].text = widget.text;
            //     }
            // }
            var url = "/api/widget/" + widgetId;
            return $http.put(url, widget);
        }
        function deleteWidget(widgetId){
            // for (var i=0; i<widgets.length; i++) {
            //     if (widgets[i]._id == widgetId) {
            //         widgets.splice(i, 1);
            //         break;
            //     }
            // }
            var url = "/api/widget/" + widgetId;
            return $http.delete(url);
        }
    }
})();