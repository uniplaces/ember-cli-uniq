import Ember from 'ember';
import layout from '../templates/components/uni-mobile-number';

const { Component } = Ember;
const options = [
  { key: 'DE', value: 'Germany (+40)' },
  { key: 'FR', value: 'France (+33)' },
  { key: 'PT', value: 'Portugal (+351)' }
];

export default Component.extend({
  classNames: ['uni-mobile-number'],
  layout,
  number: null,
  language: null,

  isOpen: false,
  options,
  onChangeSelect() {},

  actions: {
    onChangeSelect(option) {
      this.get('onChangeSelect')(option);

      this.set('language', option);
    }
  }
});
