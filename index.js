/* jshint node: true */
/* global require, module */

'use strict';

let Funnel = require('broccoli-funnel');
let mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-uniq',

  included(/* app */) {
    this._super.included.apply(this, arguments);
  },

  treeForPublic(tree) {
    let assetsTree = new Funnel('public');

    return mergeTrees([tree, assetsTree], {
      overwrite: true
    });
  }
};
