import Ember from 'ember';
import layout from '../templates/components/uni-radio-button';

const { Component, computed, isPresent } = Ember;

export default Component.extend({
  layout,

  groupValue: null,
  name: null,
  label: null,
  tooltip: null,
  isDisabled: false,

  onClick: null,
  onClickPreventDefault: true,

  hasChanged() {},

  checked: computed('value', 'groupValue', function() {
    return this.get('value') === this.get('groupValue');
  }),

  change() {
    this.get('hasChanged')(this.get('value'));
  },

  actions: {
    onClick(e) {
      if (isPresent(this.get('onClick'))) {
        this.get('onClick')();

        if (this.get('onClickPreventDefault')) {
          e.preventDefault();
        }
      }
    }
  }
});
