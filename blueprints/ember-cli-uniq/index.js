/* eslint-env node */
'use strict';

module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  beforeInstall() {
    return this.addAddonToProject('ember-responsive');
  },

  afterInstall() {
    return this.addBowerPackageToProject('uniq');
  }
};
