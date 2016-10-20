/**
 * Created by LiDanni on 10/18/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService, $sce, $location) {
        var vm = this;

        var userId =parseInt($routeParams.uid);
        vm.uid = userId;
        var pageId = parseInt($routeParams.pid);
        vm.pid = pageId;

        var websiteId = parseInt($routeParams.wid);
        vm.wid = websiteId;

        var widgetId = parseInt($routeParams.wgid);
        vm.wgid = widgetId;

        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;
        vm.createWidget = createWidget;


        function updateWidget(widgetId, widget) {
            WidgetService.updateWidget(widgetId, widget);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" );
        }

        function createWidget(pageId, widget) {
            if(widget.widgetType == 'HEADER' && widget.size == null) {
                widget.size = 3;
            }
            var newWidget = WidgetService.createWidget(pageId, widget);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" );
            vm.widget = newWidget;
        }

        function deleteWidget(widgetId) {
            WidgetService.deleteWidget(widgetId);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" );
        }


        function init() {
            vm.widget = WidgetService.findWidgetById(widgetId);

        }
        init();


    }
})();