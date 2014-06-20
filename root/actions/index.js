var nconf = require('nconf'),
    q = require('q');

/**
 * Howdy! Use this file to setup your gebo agent actions
 */
module.exports = function() {

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

