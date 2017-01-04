import Ember from 'ember';
import { getAllCountryNames, getCountryName, getCountryCallingCode } from 'ember-cli-countries/utils/countries';
import layout from '../templates/components/uni-mobile-number';

const { Component } = Ember;
const options = getOptions().sort(sortByName);

function getOptions() {

  return getAllCountryNames().map((country) => {
    let { key } = country;

    return { key, value: `${getCountryName(key)} (${getCountryCallingCode(key)})` };
  });
}

function sortByName(nameA, nameB) {
  let a = nameA.toUpperCase();
  let b = nameB.toUpperCase();

  if (a.value < b.value) {
    return -1;
  }

  if (a.value > b.value) {
    return 1;
  }

  return 0;
}

export default Component.extend({
  classNames: ['uni-mobile-number'],
  classNameBindings: ['hasError:uni-mobile-number--error'],
  layout,
  number: null,
  language: null,
  maxLength: '15',
  countrySelected: null,
  selectPlaceholder: null,

  isOpen: false,
  options,
  onChangeSelect() {},
  onChangeInput() {},

  actions: {
    onChangeSelect(option) {
      this.get('onChangeSelect')(option);
    },
    onChangeInput() {
      this.get('onChangeInput')();
    }
  }
});
