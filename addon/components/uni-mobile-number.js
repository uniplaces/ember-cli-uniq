import Ember from 'ember';
import layout from '../templates/components/uni-mobile-number';

const options = [
  {language: 'de', countryCode: '+40'},
  {language: 'fr', countryCode: '+33'},
  {language: 'es', countryCode: '+35'},
  {language: 'it', countryCode: '+39'},
  {language: 'uk', countryCode: '+44'},
  {language: 'pt', countryCode: '+351'},
  {language: 'be', countryCode: '+32'}
];

export default Ember.Component.extend({
  classNames: ['uni-mobile-number'],
  layout,

  isOpen: false,
  options: options,
  onChange: Ember.K,

  actions: {
    changeSelected(option) {
      this.get('onChange')(option);
    }
  }
});
