import Ember from 'ember';
import layout from '../templates/components/uni-input-price';

const { Component, $, computed } = Ember;

const INPUT_TYPE_NUMBER = 'number';

export default Component.extend({
  classNames: ['uni-input-price'],
  layout,

  value: '',
  minValue: 1,
  offset: 1,
  currency: '€',
  min: '0',
  max: '99999',
  maxLength: 4,
  placeholder: '0',
  isRightSideCurrency: true,
  type: INPUT_TYPE_NUMBER,
  options: null,

  /**
   * Converts a value to an integer when able, or leaves it as a string
   * @public
   */
  numberAsInt: computed('value', {
    get() {
      return this.get('value');
    },

    set(_, value) {
      if (this.get('type') !== INPUT_TYPE_NUMBER) {
        this.set('value', value);

        return value;
      }

      let newValue = isNaN(value) ? value : parseInt(value);
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
      $('input').focus(function() {
        $(this).parent('.uni-input-price').addClass('uni-input-price--focused');
      }).blur(function() {
        $(this).parent('.uni-input-price').removeClass('uni-input-price--focused');
      });
    }
  }
});
