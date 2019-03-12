'use strict';

const Funnel = require('broccoli-funnel');
const path = require('path');

const componentDependencies = {
  'uni-auth-modal': ['uni-modal'],
  'uni-autocomplete': ['uni-autocomplete-no-results'],
  'uni-checkbox': ['uni-input-container'],
  'uni-country': ['uni-autocomplete'],
  'uni-datepicker-input': ['uni-datepicker'],
  'uni-file-upload': ['uni-button'],
  'uni-form': ['uni-button'],
  // @TODO: Check if 'uni-info-card' is still used in any platform
  // If not, kill it with fire.
  'uni-info-card': ['uni-modal'],
  'uni-mobile-number': ['uni-select', 'uni-tooltip'],
  'uni-modal': ['uni-title'],
  'uni-multi-selector': ['uni-selector-button'],
  'uni-radio-button': ['uni-input-container'],
  'uni-textarea': ['uni-tooltip'],
  'uni-title': ['uni-subtitle']
}

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    let app = this._findHost();

    this.app = app;

    this.options = app.options[this.name] || {};
    this.whitelist = this.generateWhitelist(this.options.only);
  },

  treeForAddon() {
    var tree = this._super.treeForAddon.apply(this, arguments);

    return this.filterComponents(tree);
  },

  treeForAddonTemplates() {
    var tree = this._super.treeForAddonTemplates.apply(this, arguments);

    return this.filterComponents(tree);
  },

  filterComponents(tree) {
    const whitelist = this.whitelist;

    if (this.whitelist.length === 0) {
      return tree;
    }

    return new Funnel(tree, {
      exclude: [(name) => this.excludeComponent(name, whitelist)]
    });
  },

  excludeComponent(name, whitelist) {
    let regex = /(templates\/)?components\//;
    let isComponent = regex.test(name);
    if (!isComponent) {
      return false;
    }

    let baseName = path.basename(name);
    baseName = baseName.split('.').shift();

    let isWhitelisted = whitelist.indexOf(baseName) !== -1;

    return !isWhitelisted;
  },

  // https://github.com/kaliber5/ember-bootstrap/blob/master/index.js#L325
  generateWhitelist(whitelist) {
    let whitelisted = [];

    if (!whitelist) {
      return whitelisted;
    }

    function _addToWhitelist(item) {
      if (whitelisted.indexOf(item) === -1) {
        whitelisted.push(item);

        if (componentDependencies[item]) {
          componentDependencies[item].forEach(_addToWhitelist);
        }
      }
    }

    whitelist.forEach(_addToWhitelist);

    return whitelisted;
  }
};
