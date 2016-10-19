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
            vm.widget = WidgetService.findWidgetById(widgetId);
        }
        init();

        function createWidget(pageId, widget) {
            var newWidget = WidgetService.createWidget(pageId, widget);
            $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + newWidget._id);
        }

    }
})();