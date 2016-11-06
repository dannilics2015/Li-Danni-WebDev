/**
 * Created by LiDanni on 10/18/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController);

    function NewWidgetController($routeParams, WidgetService, $sce, $location) {
        var vm = this;
        var userId =parseInt($routeParams.uid);
        vm.uid = userId;
        var pageId = parseInt($routeParams.pid);
        vm.pid = pageId;
        var websiteId = parseInt($routeParams.wid);
        vm.wid = websiteId;
        var widgetId = parseInt($routeParams.wgid);
        vm.wgid = widgetId;

        vm.createWidget = createWidget;

        function init() {
            WidgetService.findWidgetById(widgetId)
                .success(function(widget) {
                    if(widget != '0') {
                        vm.widget = widget;
                    }
                });
        }
        init();

        function createWidget(pageId, widget) {
            // if(widget.widgetType == 'HEADER' && widget.size == null) {
            //     widget.size = 3;
            // }
            WidgetService.createWidget(pageId, widget)
                .success(function(widget) {
                    $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widget._id);
                })
                .error(function (error) {
                console.log("create widget error");
            });
        }

    }
})();