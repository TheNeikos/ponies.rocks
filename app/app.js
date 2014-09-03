var express = require('express');
var app = express();

// execute the return value of require with app as argument
require('./db/init.js')(app);

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(3000);
