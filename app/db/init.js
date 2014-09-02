var mongoose = require('mongoose');

var database = process.env.NODE_ENV == 'development' ? 'test' : 'production';
mongoose.connect('mongodb://localhost/' + database);

