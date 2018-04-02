/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-uniq',

  included() {
    this._super.included && this._super.included.apply(this, arguments);

    let addonOptions = (this.parent && this.parent.options) || (this.app && this.app.options) || {};
    let config = addonOptions[this.name] || {};

    this.excludeAssets = config.excludeAssets;
  },

  treeForPublic() {
    let tree = this._super.treeForPublic.apply(this, arguments);

    if (this.excludeAssets) {
      return new Funnel(tree, {
        exclude: this.excludeAssets.map((assetPath) => {
          return `public/assets/${assetPath}`;
        })
      });
    }

    return tree;
  }
};
