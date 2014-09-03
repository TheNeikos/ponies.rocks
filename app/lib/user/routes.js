var mongoose = require('mongoose');
var User = mongoose.Model('User');

function get_all_users(req, res) {
    req.write('{ users: []}');
}


module.exports = function(app) {
    app.get('/api/v1/user/all', get_all_users);
};

