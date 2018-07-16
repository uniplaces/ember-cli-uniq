'use strict';
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const sass = require('node-sass');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    snippetPaths: [
      'tests/dummy/app/templates/snippets'
    ],
    sassOptions: {
      extension: 'scss',
      functions: {
        assetsRootURL: () => new sass.types.String('/')
      }
    },
    svg: {
      paths: [
        'public/assets/images/'
      ]
    }
  });

  return app.toTree();
};
