import Ember from 'ember';
import { getAllCountryNames, getCountryName, getCountryCallingCode } from 'ember-cli-countries/utils/countries';
import layout from '../templates/components/uni-mobile-number';

const { Component } = Ember;
const options = getOptions();
const MAX_LENGTH = '15';

function getOptions() {
  return getAllCountryNames().map((country) => {
    let { key } = country;

    return { key, value: `${getCountryName(key)} (${getCountryCallingCode(key)})` };
  });
}

export default Component.extend({
  classNames: ['uni-mobile-number'],
  classNameBindings: ['hasError:uni-mobile-number--error'],
  layout,
  number: null,
  language: null,
  maxLength: MAX_LENGTH,
  countrySelected: null,
  selectPlaceholder: null,

  isOpen: false,
  options,
  onChangeSelect() {},

  actions: {
    onChangeSelect(option) {
      this.get('onChangeSelect')(option);
    }
  }
});
