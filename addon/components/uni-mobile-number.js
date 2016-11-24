import Ember from 'ember';
import layout from '../templates/components/uni-mobile-number';

const { Component } = Ember;
const options = [
  { language: 'Germany', country_code: '+40' },
  { language: 'France', country_code: '+33' },
  { language: 'Spain', country_code: '+35' },
  { language: 'Italy', country_code: '+39' },
  { language: 'United Kingdom', country_code: '+44' },
  { language: 'Portugal', country_code: '+351' },
  { language: 'Belgium', country_code: '+32' }
];

export default Component.extend({
  classNames: ['uni-mobile-number'],
  layout,

  isOpen: false,
  options,
  onChange() {},

  actions: {
    changeSelected(option) {
      this.get('onChange')(option);
    }
  }
});
