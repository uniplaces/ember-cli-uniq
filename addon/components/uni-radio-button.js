import Component from '@ember/component';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import layout from '../templates/components/uni-radio-button';

export default Component.extend({
  layout,

  groupValue: null,
  name: null,
  label: null,
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
