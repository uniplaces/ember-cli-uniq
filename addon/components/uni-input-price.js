import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import layout from '../templates/components/uni-input-price';

const INPUT_TYPE_NUMBER = 'number';

export default Component.extend({
  classNames: ['uni-input-price'],
  classNameBindings: ['isDisabled:uni-input-price--disabled'],
  layout,

  value: null,
  minValue: 1,
  offset: 1,
  currency: '€',
  min: '0',
  max: '99999',
  maxLength: 4,
  placeholder: 0,
  isRightSideCurrency: true,
  type: INPUT_TYPE_NUMBER,
  options: null,
  isDisabled: false,

  /**
   * Converts a value to an integer when able, or leaves it as a string
   * @public
   */
  numberAsInt: computed('value', {
    get() {
      return this.get('value');
    },

    set(_, value) {
      let newValue = isNaN(value) || isEmpty(value) ? null : parseInt(value);
      this.set('value', newValue);

      return newValue;
    }
  }),

  onInvalidInput() {},
  onChange() {},

  actions: {
    onChange() {
      if (!parseFloat(this.get('value')) && this.get('value') < this.get('minValue')) {
        this.get('onInvalidInput')(this.get('options'));
      }

      this.get('onChange')(this.get('value'));
    },

    onFocusIn() {
      document.getElementById(this.get('elementId')).classList.add('uni-input-price--focused');
    },

    onFocusOut() {
      document.getElementById(this.get('elementId')).classList.remove('uni-input-price--focused');
    }
  }
});
