/**
 * Created by LiDanni on 10/11/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($location, $routeParams, WidgetService, $sce) {
        var vm = this;


        var userId =parseInt($routeParams.uid);
        vm.uid = userId;

        var pageId = parseInt($routeParams.pid);
        vm.pid = pageId;

        var websiteId = parseInt($routeParams.wid);
        vm.wid = websiteId;

        vm.checkSafeHtml = checkSafeHtml;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;
        vm.checkSafeImageUrl = checkSafeImageUrl;
        vm.sortWidget= sortWidget;

        //load and execute initially
        function init() {
            var promise = WidgetService.findAllWidgetsForPage(pageId);
            promise
                .success(function(widgets) {
                    vm.widgets = widgets;
                });
            // var allwidgets = $(".wam-widgets")
            //     .sortable({
            //         axis: 'y'
            //     });
            // console.log(allwidgets);
        }

        init();

        function sortWidget(start, end) {
            WidgetService.sortWidget(start, end, vm.pid);
        }

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }
        function checkSafeYouTubeUrl(url) {
            var parts = url.split('/');
            var id = parts[parts.length - 1];
            url = "https://www.youtube.com/embed/"+id;
            return $sce.trustAsResourceUrl(url);
        }
        function checkSafeImageUrl(url) {
            return $sce.trustAsResourceUrl(url);
        }
    }
})();