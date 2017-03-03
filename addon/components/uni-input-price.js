import Ember from 'ember';
import layout from '../templates/components/uni-input-price';

const { Component, $ } = Ember;

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

  actions: {
    onChange() {
      if (!parseFloat(this.get('value')) && this.get('value') < this.get('minValue')) {
        this.get('onInvalidInput')(this.get('options'));
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
