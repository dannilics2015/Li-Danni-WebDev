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
            .when("/website/edit", {
                templateUrl: "views/website/website-edit.view.client.html"
            })
            .when("/website/list", {
                templateUrl: "views/website/website-list.view.client.html"
            })
            .when("/widget", {
                templateUrl: "views/widget/widget-list.view.client.html"
            })
            .when("/widget/chooser", {
                templateUrl: "views/widget/widget-chooser.view.client.html"
            })
            .when("/widget/heading", {
                templateUrl: "views/widget/widget-heading.view.client.html"
            })
            .when("/widget/image", {
                templateUrl: "views/widget/widget-image.view.client.html"
            })
            .when("/widget/youtube", {
                templateUrl: "views/widget/widget-youtube.view.client.html"
            })
            .otherwise({
                redirectTo: "/login"
            });
    }
})();