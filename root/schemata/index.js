'use strict';

var geboMongoose = require('gebo-mongoose-connection');

/**
 * This is an example of how you might define a schema 
 */
module.exports = function() {

    var mongoose = geboMongoose.get();

    exports.connection = mongoose.connection;

    var greetingSchema = new mongoose.Schema({
        text: { type: String, required: true, unique: false },
      });

    try {
        var greetingModel = mongoose.model('Greeting', greetingSchema);
        exports.greetingModel = greetingModel;
    }
    catch (error) {}

    return exports;
};
