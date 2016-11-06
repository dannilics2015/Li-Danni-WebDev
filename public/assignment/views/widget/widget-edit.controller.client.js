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


        function init() {
            WidgetService.findWidgetById(widgetId)
                .success(function(widget) {
                    vm.widget = widget;
                });

        }
        init();

        function updateWidget() {
            WidgetService.updateWidget(widgetId, vm.widget)
                .success(function() {
                    $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" );
                });
        }

        function createWidget(pageId, widget) {
            // if(widget.widgetType == 'HEADER' && widget.size == null) {
            //     widget.size = 3;
            // }
            // var newWidget = WidgetService.createWidget(pageId, widget);
            // $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" );
            // vm.widget = newWidget;
            WidgetService.createWidget(pageId, widget)
                .success(function(widget) {
                    $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
                })
                .error(function (error) {
                    console.log("create widget error");
                });
        }

        function deleteWidget() {
            WidgetService.deleteWidget(widgetId)
                .success(function() {
                    $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" );
                })
        }





    }
})();