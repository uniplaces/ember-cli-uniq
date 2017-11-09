/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    sassOptions: {
      extension: 'scss'
    },
    svg: {
      paths: [
        'public/assets/images/'
      ]
    }
  });

  return app.toTree();
};
