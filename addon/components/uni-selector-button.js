import Ember from 'ember';
import layout from '../templates/components/uni-selector-button';

const { Component, computed } = Ember;

export default Component.extend({
  layout,

  classNames: ['uni-selector-button'],
  groupValue: null,
  name: null,
  label: null,

  checked: computed('value', 'groupValue', function() {
    return this.get('value') === this.get('groupValue');
  }),
  hasChanged() {},

  change() {
    this.get('hasChanged')(this.get('value'));
  }
});
