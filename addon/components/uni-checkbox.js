import Component from '@ember/component';
import layout from '../templates/components/uni-checkbox';

export default Component.extend({
  layout,

  isSmall: false,
  isSelected: false,
  isDisabled: false,
  hasError: false,

  onChange() {},

  change() {
    this.get('onChange')(!this.get('isSelected'), ...arguments);
  }
});
