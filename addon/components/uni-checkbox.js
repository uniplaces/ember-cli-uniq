import Component from '@ember/component';
import layout from '../templates/components/uni-checkbox';

export default Component.extend({
  layout,

  isSelected: false,
  isDisabled: false,
  hasError: false,

  onChange() {},

  change() {
    this.toggleProperty('isSelected');
    this.get('onChange')(this.get('isSelected'));
  }
});

