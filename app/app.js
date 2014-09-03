var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

// execute the return value of require with app as argument
require('./db/init.js')(app);

// require('./lib/includes.js')(app);

app.get('/', function(req, res) {
    res.render('main.html');
});

app.listen(3000);
