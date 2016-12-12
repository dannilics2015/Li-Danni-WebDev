/**
 * Created by LiDanni on 10/5/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .config(Config)
        .directive('flexslider', flexslider);
    // $ indicates it is a variable the framework recognizes
    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            //about
            .when("/about", {
                templateUrl: "views/about/about.view.client.html",
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "register"
            })
            //login user's profile
            .when("/user", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //login user's homepage
            .when("/homepage/:username", {
                templateUrl: "views/user/homepage.view.client.html",
                controller: "HomepageController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //trade-page
            .when("/homepage/:username/trade", {
                templateUrl: "views/trade/trade-list.view.client.html",
                controller: "TradeController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //login user's collection page
            .when("/homepage/:username/collection", {
                templateUrl: "views/collection/collection-list.view.client.html",
                controller: "CollectionListController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //login user add new collection
            .when("/homepage/:username/collection/new", {
                templateUrl: "views/collection/collection-new.view.client.html",
                controller: "CollectionNewController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //login user's collection edit
            .when("/homepage/:username/collection/:cid", {
                templateUrl: "views/collection/collection-edit.view.client.html",
                controller: "CollectionEditController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //login user search other users' collections
            .when("/homepage/:username/search", {
                templateUrl: "views/collection/collection-search.view.client.html",
                controller: "CollectionSearchController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //check other user profile
            .when("/user/:username/search/:ownername", {
                templateUrl: "views/user/user.view.client.html",
                controller: "UserController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //login user's message list
            .when("/homepage/:username/message", {
                templateUrl: "views/message/message-list.view.client.html",
                controller: "MessageListController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //login user reply message
            .when("/homepage/:username/message/reply/:fromusername", {
                templateUrl: "views/message/message-reply.view.client.html",
                controller: "MessageReplyController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //top 50 game page
            .when("/homepage/:username/hot", {
                templateUrl: "views/hot/website-new.view.client.html",
                controller: "WebsiteNewController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //game details page
            .when("/user/homepage/:username/page/:gameId", {
                templateUrl: "views/hot/website-edit.view.client.html",
                controller: "WebsiteEditController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //all collections
            .when("/homepage/:username/search/all", {
                templateUrl: "views/collection/collection-all.view.client.html",
                controller: "CollectionAllController",
                controllerAs: "model",
                resolve: {
                    checkLogin: checkLogin
                }
            })
            //admin register
            .when("/admin/register", {
                templateUrl: "views/user/admin-register.view.client.html",
                controller: "RegisterController",
                controllerAs: "register"
            })
            //admin page
            .when("/admin/:username", {
                templateUrl: "views/administrator/admin-page.view.client.html",
                controller: "AdminController",
                controllerAs: "model",
                resolve: {
                    checkAdmin: checkAdmin
                }
            })
            .otherwise({
                redirectTo: "/login"
            });

        function checkLogin($q, UserService, $location) {
                var deferred = $q.defer();
                UserService
                    .checkLogin()
                    .success(
                        function (user) {
                            if(user != '0') {
                                deferred.resolve();
                            } else {
                                deferred.reject();
                                $location.url("/login");
                            }
                        }
                    );
                return deferred.promise
        }

        function checkAdmin($q, UserService, $location) {
            var deferred = $q.defer();
            UserService
                .checkAdmin()
                .success(
                    function (user) {
                        if(user != '0') {
                            deferred.resolve();
                        } else {
                            deferred.reject();
                            $location.url("/login");
                        }
                    }
                );
            return deferred.promise
        }
    }
    function flexslider() {
        return {
            link: function (scope, element, attrs) {

                element.flexslider({
                    animation: "slide"
                });
            }
        }
    }
})();