var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var base_schema = new Schema({
    children: [Schema.Types.ObjectId],
    display_name: String,
    shortcut: Number,
    parent: Schema.Types.ObjectId,
});

var Base = mongoose.model('BaseNode', base_schema);
