/**
 * Created by danni on 12/9/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("TradeController", TradeController)

    function TradeController(UserService, $routeParams) {
        var vm = this;
        vm.username = $routeParams.username;

        function init() {

        }
        init();
    }



})();