import Ember from 'ember';
import layout from '../templates/components/uni-input-price';

const { Component, $ } = Ember;

const INPUT_TYPE_NUMBER = 'number';

export default Component.extend({
  classNames: ['uni-input-price'],
  layout,

  value: null,
  minValue: 1,
  offset: 1,
  currency: '€',
  min: '0',
  max: '99999',
  maxLength: 4,
  placeholder: '0',
  isRightSideCurrency: true,
  type: 'number',
  options: null,

  onInvalidInput() {},
  onChange() {},

  actions: {
    onChange() {
      if (!parseFloat(this.get('value')) && this.get('value') < this.get('minValue')) {
        this.get('onInvalidInput')(this.get('options'));
      }
      if (this.get('type') === INPUT_TYPE_NUMBER) {
        this.set('value', parseInt(this.get('value')));
      }
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
