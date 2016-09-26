/**
 * Created by vano on 26.09.16.
 */



var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

var session = require('express-session');
var SessionStore = require('express-mysql-session');


//var Item = require('./item');
//var User = require('./model/User');
//var Account = require('./model/Account');

var User = require('./model').User;
var Item = require('./model').Item;

var AuthRouter = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.set('public', path.join(__dirname, 'public'));
/*app.set('public engine', 'html');*/

app.use(express.static(__dirname + '/public'));


//Item


app.use('/auth', AuthRouter);


app.get('/items', function (req, res) {
    //res.sendFile(__dirname + '/index.html');
    Item.findAll({}).then(function (data) {
        res.json(data);
    });
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
});


const {sequelize} = require('./model');

sequelize.sync().then(function () {
    http.listen(3000, function () {
        console.log('listening on *:3000');
    });
});
