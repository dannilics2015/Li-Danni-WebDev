/**
 * Created by LiDanni on 11/5/16.
 */
(function() {
    angular
        .module("jgaDirectives", [])
        .directive("jgaSortable", jgaSortable);

    function jgaSortable() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                var start = -1;
                var end = -1;
                $(element)
                    .sortable({
                        sort: function(event, ui) {
                            start = ui.item.index();
                        },
                        stop: function(event, ui) {
                            end = ui.item.index();
                            if(start >= end) {
                                start--;
                            }
                            scope.jgaSortableCallback({start: start, end: end});
                        }
                    });
            },
            scope: {
                jgaSortableCallback: "&"
            }
        }
    }
        // var allwidgets = $(".wam-widgets")
        //     .sortable({
        //         axis: 'y'
        //     });
        // console.log(allwidgets);


    //      function link(scope, element, attrs) {
    //         var start = -1;
    //         var end = -1;
    //         element
    //             .sortable({
    //                 start: function(event, ui) {
    //                     start = $(ui.item).index();
    //                 },
    //                 stop: function(event, ui) {
    //                     end = $(ui.item).index();
    //                     scope.sortableController.sort(start, end);
    //                 }
    //             });
    //     }
    //     return {
    //         scope: {},
    //         link: link,
    //         controller: sortableController,
    //         controllerAs: 'sortableController'
    //     };
    // }
    // function sortableController(WidgetService) {
    //     var vm = this;
    //     vm.sort = sort;
    //     function sort(start, end, pageId) {
    //         WidgetService.sort([start, end]);
    //     }
    // }

})();