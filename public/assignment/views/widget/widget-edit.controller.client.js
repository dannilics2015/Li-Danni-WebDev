/**
 * Created by LiDanni on 10/18/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService, $sce, $location) {
        var vm = this;

        var userId = $routeParams.uid;
        vm.uid = userId;
        var pageId = $routeParams.pid;
        vm.pid = pageId;

        var websiteId = $routeParams.wid;
        vm.wid = websiteId;

        var widgetId = $routeParams.wgid;
        vm.wgid = widgetId;

        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;
        vm.createWidget = createWidget;
        // vm.updateHeader = updateHeader;
        // vm.updateImage = updateImage;
        // vm.updateYoutube = updateYoutube;

        function init() {
            WidgetService.findWidgetById(widgetId)
                .success(function(widget) {
                    vm.widget = widget;
                });

        }
        init();

        function updateWidget() {
            var newWidget = {};
            if(vm.widget.type == "HEADER") {
                newWidget.name = document.getElementById('name').value;
                newWidget.text = document.getElementById('text').value;
                newWidget.size = document.getElementById('size').value;
            }
            else if(vm.widget.type == "IMAGE") {
                newWidget.name = document.getElementById('name').value;
                newWidget.text = document.getElementById('text').value;
                newWidget.width = document.getElementById('width').value;
                var imageurl = document.getElementById('url').value;
                newWidget.url = imageurl;

            }
            else if(vm.widget.type == "YOUTUBE") {
                newWidget.name = document.getElementById('name').value;
                newWidget.text = document.getElementById('text').value;
                newWidget.url = document.getElementById('url').value;
                newWidget.width = document.getElementById('width').value;
            }

            newWidget.type = vm.widget.type;
            newWidget._id = vm.wgid;
                newWidget.pageId = vm.pid;
                WidgetService
                    .updateWidget(vm.wgid, newWidget)
                    .success(function(widget) {
                        $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" );

                    })
                    .catch(function(error){
                        console.log(error);
                    });
        }

        // function updateHeader() {
        //     var newWidget = {};
        //     newWidget.name = document.getElementById('name').value;
        //     newWidget.text = document.getElementById('text').value;
        //     newWidget.size = document.getElementById('size').value;
        //     newWidget.id = vm.wgid;
        //     newWidget.pageId = vm.pid;
        //     WidgetService
        //         .updateHeader(vm.wgid, newWidget)
        //         .success(function(widget) {
        //             $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" );
        //
        //         })
        //         .catch(function(error){
        //             console.log(error);
        //         });
        // }
        //
        // function updateImage() {
        //     var newWidget = {};
        //     newWidget.name = document.getElementById('name').value;
        //     newWidget.text = document.getElementById('text').value;
        //     newWidget.width = document.getElementById('width').value;
        //     var imageurl = document.getElementById('url').value;
        //     newWidget.id = vm.wgid;
        //     newWidget.pageId = vm.pid;
        //     newWidget.url = imageurl;
        //     WidgetService
        //         .updateImage(vm.wgid, newWidget)
        //         .success(function(widget) {
        //             $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" );
        //
        //         })
        //         .catch(function(error){
        //             console.log(error);
        //         });
        // }
        //
        // function updateYoutube() {
        //     var newWidget = {};
        //     newWidget.name = document.getElementById('name').value;
        //     newWidget.text = document.getElementById('text').value;
        //     newWidget.url = document.getElementById('url').value;
        //     newWidget.width = document.getElementById('width').value;
        //     newWidget.id = vm.wgid;
        //     newWidget.pageId = vm.pid;
        //     WidgetService
        //         .updateYoutube(vm.wgid, newWidget)
        //         .success(function(widget) {
        //             $location.url("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" );
        //
        //         })
        //         .catch(function(error){
        //             console.log(error);
        //         });
        // }

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