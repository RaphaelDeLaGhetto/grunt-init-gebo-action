var nconf = require('nconf'),
    q = require('q'),
    winston = require('winston');

/**
 * Howdy! Use this file to setup your gebo agent actions
 */
module.exports = function() {

    // Logging stuff           
    nconf.file({ file: './gebo.json' });
    var logLevel = nconf.get('logLevel');
    var logger = new (winston.Logger)({ transports: [ new (winston.transports.Console)({ colorize: true }) ] });

    // Database
    var db = require('../schemata')();

    /**
     * The following provides an example of the basic pattern of
     * every gebo action
     */
    exports.hello = function(verified, message) {
        var deferred = q.defer();
    
        if (verified.admin || verified.execute) {
          db.greetingModel.findOne({}, function(err, greeting) {
                if (err) {
                  deferred.reject(err);
                }
                else {
                  deferred.resolve(greeting.text);
                }
            });
        }
        else {
          deferred.reject('You are not permitted to request or propose that action');
        }
        return deferred.promise;
      };

    return exports;
};

