/**
 * Created by vano on 26.09.16.
 */

var express = require('express');
var router = express.Router();
var User = require('../model').User;


router.get('/auth', function (req, res) {
    res.json('bla');
});


router.get('/users', function (req, res) {
    User.findAll({}).then(function (users) {
        //console.log(users);
        res.json(users);
    });
});


module.exports = router;

