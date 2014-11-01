/**
 * https://github.com/RaphaelDeLaGhetto/grunt-init-gebo-action
 *
 * Copyright 2014 Daniel Bidulock
 * MIT license
 */

'use strict';

// Basic template description.
exports.description = 'A vanilla gebo agent action module with nodeunit unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'Be sure to install project dependencies with _npm ' +
    'install_. After that, you may execute project tasks with _grunt_. For ' +
    'more information about installing and configuring Grunt, see ' +
    'the Getting Started guide:' +
    '\n\n' +
    'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({}, [
            // Prompt for these values.
            init.prompt('name'),
            init.prompt('description'),
            init.prompt('version', '0.0.0'),
            init.prompt('repository'),
            init.prompt('homepage'),
            init.prompt('bugs'),
            init.prompt('licenses'),
            init.prompt('author_name'),
            init.prompt('author_email'),
            init.prompt('author_url'),
            init.prompt('node_version'),
            init.prompt('main', 'index.js'),
            init.prompt('npm_test', 'grunt nodeunit')
        ],
        function(err, props) {
            props.main = props.name + '.js';

            // Remove hyphens from name and convert to camel case
            props.camelCasedName = props.name.replace(/-([a-z])/g,
                    function (g) { return g[1].toUpperCase(); });

            props.keywords = [
                    'gebo',
                    'agent',
                    'action',
                ];
            props.dependencies = {
                    'gebo-mongoose-connection': '*',
                    'gebo-utils': '*',
                    'nconf': '*',
                    'winston': '*',
                    'q': '*'
                };
            props.devDependencies = {
                    'grunt': '*',
                    'grunt-contrib-nodeunit': '*'
                };
        
            // Files to copy (and process).
            var files = init.filesToCopy(props);
        
            // Add properly-named license files.
            init.addLicenseFiles(files, props.licenses);
        
            // Actually copy (and process) files.
            init.copyAndProcess(files, props);
        
            // Remove the camelCasedName, because we
            // don't really need it anymore
            delete props.camelCasedName;

            // Generate package.json file.
            init.writePackageJSON('package.json', props);
        
            // All done!
            done();
      });
  };

