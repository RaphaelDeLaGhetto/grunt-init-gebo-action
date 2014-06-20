'use strict';

/**
 * Ensure that the connection is made to the test database
 */
var mongoose = require('gebo-mongoose-connection').get(true);

var actionModule = require('..');

/**
 * hello
 */
exports.hello = {
    setUp: function(callback) {

        /**
         * Add a greeting to the schema
         */
        var greeting = new actionModule.schemata.greetingModel({ text: 'Hello, friendo' });

        greeting.save(function(err) {
            if (err) {
              console.log(err);
            }
            callback();
          });
    },

    tearDown: function(callback) {
        actionModule.schemata.connection.db.dropDatabase(function(err) {
            if (err) {
              console.log(err);
            }
            callback();
          });
    },

    'Return a greeting to an agent with execute permission': function(test) {
        test.expect(1);
        actionModule.actions.hello({ resource: 'hello', execute: true }, {}).
            then(function(greeting) {
                test.equal(greeting, 'Hello, friendo');
                test.done();
              }).
            catch(function(err) {
                test.ok(false, err);      
                test.done();
              });
    },

    'Reject an agent with inadequate permission': function(test) {
        test.expect(1);
        actionModule.actions.hello({ resource: 'hello' }, {}).
            then(function(greeting) {
                test.ok(false, 'Shouldn\'t get here');
                test.done();
              }).
            catch(function(err) {
                test.equal(err, 'You are not permitted to request or propose that action');
                test.done();
              });
    },
};
