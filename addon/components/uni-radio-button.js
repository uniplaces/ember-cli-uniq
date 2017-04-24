import Ember from 'ember';
import layout from '../templates/components/uni-radio-button';

const { Component, computed, isPresent } = Ember;

export default Component.extend({
  layout,

  groupValue: null,
  hasChanged() {},
  name: null,
  label: null,
  isDisabled: false,

  checked: computed('value', 'groupValue', function() {
    return this.get('value') === this.get('groupValue');
  }),

  change() {
    this.get('hasChanged')(this.get('value'));
  },

  actions: {
    onClick(value) {
      if (isPresent(this.get('onClick'))) {
        this.get('onClick')();

        return false;
      }

      this.set('value', value);
    }
  }
});
