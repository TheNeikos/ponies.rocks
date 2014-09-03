var mongoose = require('mongoose');
var mongoose_extend = require('mongoose-schema-extend');

require('./node/model.js');


module.exports = function(app) {
    // Require routes using this app as base point
    require('./user/routes.js')(app);
};
