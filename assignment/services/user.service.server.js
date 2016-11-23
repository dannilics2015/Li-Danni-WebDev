/**
 * Created by LiDanni on 10/25/16.
 */

module.exports = function(app, model) {

    var passport      = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var FacebookStrategy = require('passport-facebook').Strategy;
    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
    var cookieParser  = require('cookie-parser');
    var session       = require('express-session');
    var bcrypt = require("bcrypt-nodejs");

    app.use(session({
        secret: 'this is the secret',
        resave: true,
        saveUninitialized: true
    }));

    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(localStrategy));
    //passport.use(new GoogleStrategy(googleConfig, googleStrategy));
    //passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    app.post('/api/user', createUser);
    app.get('/api/user', findUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', authenticate, updateUser);
    app.delete('/api/user/:uid', authenticate, deleteUser);
    app.post('/api/login', passport.authenticate('local'), login);
    app.post('/api/checkLogin', checkLogin);
    app.post('/api/logout', logout);
    app.post('/api/register', register);
    app.get ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    function createUser(req, res) {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);
        model
            .userModel
            .createUser(user)
            .then(
                function (newUser) {
                    res.send(newUser);
                },
                function(error) {
                    res.sendStatus(400).send(error);
                }
            );
    }


    function updateUser(req, res) {
        var user = req.body;
        var uid = req.params.uid;
        model
            .userModel
            .updateUser(uid, user)
            .then(
                function(status) {
                    res.send(200);
                },
                function(error) {
                    res.sendStatus(400).send(error);
                }
            );
    }


    function findUser(req, res) {
        var params = req.params;
        var query = req.query;
        if(query.password && query.username) {
            findUserByCredentials(req, res);
        }
        else if(query.username) {
            findUserByUsername(req, res);
        }
    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        model
            .userModel
            .findUserByCredentials(username, password)
            .then(
                function (users) {
                    if(users) {
                        res.json(users[0]);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }


    function findUserByUsername(req, res) {
        var username = req.query.username;
        model
            .userModel
            .findUserByUsername(username)
            .then(
                function (user) {
                    if(user) {
                        res.send(user);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function findUserById(req, res) {
        var userId = req.params.uid;
        model
            .userModel
            .findUserById(userId)
            .then(
                function (user) {
                    if(user) {
                        res.send(user);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function deleteUser(req, res) {
        var uid = req.params.uid;
        model.userModel.deleteUser(uid)
            .then(
                function(status) {

                },
                function(error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    // function login(req, res) {
    //     var user = req.body;
    //     var username = user.username;
    //     var password = user.password;
    //     model
    //         .userModel
    //         .findUserByCredentials(username, password)
    //         .then(
    //             function (users) {
    //                 if(users) {
    //                     res.json(users[0]);
    //                 } else {
    //                     res.send('0');
    //                 }
    //             },
    //             function (error) {
    //                 res.sendStatus(400).send(error);
    //             }
    //         );
    // }


    function checkLogin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        model.userModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    function localStrategy(username, password, done) {
        model
            .userModel
            // .findUserByCredentials(username, password)
            .findUserByUsername(username)
            .then(
                function (user) {
                    // if (!user) {
                    //     return done(null, false);
                    // }
                    // return done(null, user);
                    if(user && bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logout();
        res.send(200);
    }

    function register (req, res) {
        var user = req.body;
        var username = user.username;
        user.password = bcrypt.hashSync(user.password);
        model.userModel
            .findUserByUsername(username)
            .then (
                function(user) {
                    if (user) {
                        res.status(400).send("Username already exist");
                        return;
                    }
                    else {
                        return model.userModel.createUser(req.body)
                    }
                    res.send(200);
                },
                    function(error) {
                        res.status(400).send(error);
                    })
                    .then(
                        function(user) {
                            if(user) {
                                req.login(user, function(err) {
                                    if(err) {
                                        res.status(400).send(err);
                                    } else {
                                        res.json(user);
                                    }
                                })
                            }
                        }
                    )

        //     .createUser(user)
        //     .then(
        //     function(user){
        //         if(user){
        //             req.login(user, function(err) {
        //                 if(err) {
        //                     res.status(400).send(err);
        //                 } else {
        //                     res.json(user);
        //                 }
        //             });
        //         }
        //     }
        // );
    }

    function googleStrategy(token, refreshToken, profile, done) {
        model.userModel
            .findUserByGoogleId(profile.id)
            .then(
                function(user) {
                    if(user) {
                        return done(null, user);
                    } else {
                        var email = profile.emails[0].value;
                        var emailParts = email.split("@");
                        var newGoogleUser = {
                            username:  emailParts[0],
                            firstName: profile.name.givenName,
                            lastName:  profile.name.familyName,
                            email:     email,
                            google: {
                                id:    profile.id,
                                token: token
                            }
                        };
                        return model.userModel.createUser(newGoogleUser);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            )
            .then(
                function(user){
                    return done(null, user);
                },
                function(err){
                    if (err) { return done(err); }
                }
            );
    }


    function authenticate(req, res, next) {
        console.log(req.user);
        res.send(200);
        console.log(req.isAuthenticated());
        if(!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    }

};