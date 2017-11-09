import Ember from 'ember';
import layout from '../templates/components/uni-header-dropdown';
import ClickOutsideMixin from 'ember-cli-uniq/mixins/click-outside';
const { Component } = Ember;

export default Component.extend(ClickOutsideMixin, {
  tagName: 'span',
  layout,
  isOpen: false,
  componentName: 'uni-header-dropdown-item-simple',

  switch() {},

  actions: {
    switch() {
      this.set('isOpen', false);

      this.get('switch')();
    }
  },

  onOutsideClick() {
    if (!this.isDestroyed) {
      this.set('isOpen', false);
    }
  }
});
