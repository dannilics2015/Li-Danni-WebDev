/**
 * Created by LiDanni on 10/5/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .config(Config);
    // $ indicates it is a variable the framework recognizes
    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html"
            })
            .when("/profile", {
                templateUrl: "views/user/profile.view.client.html"
            })
            .when("/website", {
                templateUrl: "views/website/website-list.view.client.html"
            })
            .when("/website/new", {
                templateUrl: "views/website/website-new.view.client.html"
            })
            .otherwise({
                redirectTo: "/login"
            });
    }
})();