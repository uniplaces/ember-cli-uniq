/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-uniq',

  included: function(/* app */) {
    this._super.included.apply(this, arguments);
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('uniq');
  }
};
