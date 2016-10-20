/**
 * Created by LiDanni on 10/11/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WidgetService, $sce) {
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

        //load and execute initially
        function init() {
            vm.widgets = WidgetService.findWidgetByPageId(pageId);
        }
        init();

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