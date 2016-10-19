/**
 * Created by LiDanni on 10/18/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService, $sce) {
        var vm = this;

        var userId =parseInt($routeParams.uid);
        vm.uid = userId;

        var pageId = parseInt($routeParams.pid);
        vm.pid = pageId;

        var websiteId = parseInt($routeParams.wid);
        vm.wid = websiteId;

        var widgetId = parseInt($routeParams.wgid);
        vm.wgid = widgetId;


        function init() {
            vm.widget = WidgetService.findWidgetById(widgetId);
        }
        init();


    }
})();