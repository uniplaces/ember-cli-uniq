import Ember from 'ember';
import layout from '../templates/components/uni-input-price';

const { Component } = Ember;

export default Component.extend({
  classNames: ['uni-input-price'],
  layout,

  value: 0,
  minValue: 1,
  offset: 1,
  maxLength: 4,
  placeholder: '0',
  isRightSideCurrency: true,
  type: 'text',
  options: null,
  onInvalidInput() {},

  actions: {
    onChange() {
      if (!parseFloat(this.get('value')) && this.get('value') < this.get('minValue')) {
        this.get('onInvalidInput')(this.get('options'));
      }
    }
  }
});
