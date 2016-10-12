/**
 * Created by LiDanni on 10/6/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($scope) {
         $scope.hello = "Hello from Login Controller";
    }

})();