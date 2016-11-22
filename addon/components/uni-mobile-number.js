import Ember from 'ember';
import layout from '../templates/components/uni-mobile-number';

const options = [
  {language: 'de', country_code: '+40'},
  {language: 'fr', country_code: '+33'},
  {language: 'es', country_code: '+35'},
  {language: 'it', country_code: '+39'},
  {language: 'uk', country_code: '+44'},
  {language: 'pt', country_code: '+351'},
  {language: 'be', country_code: '+32'}
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
