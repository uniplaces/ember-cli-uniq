import Ember from 'ember';
import { getAllCountriesNames, getCountryName, getCountryCallingCode } from 'ember-cli-countries';
import layout from '../templates/components/uni-mobile-number';

const { Component } = Ember;
const options = getOptions();

function getOptions() {
  return getAllCountriesNames().keys(this).map((key) => {
    return { key, value: `${getCountryName(key)} (${getCountryCallingCode(key)})` };
  });
}

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
