import Ember from 'ember';
import { getAllCountryNames, getCountryName, getCountryCallingCode } from 'ember-cli-countries/utils/countries';
import layout from '../templates/components/uni-mobile-number';

const { Component } = Ember;

const SEPARATOR = '--------------------------------';

export default Component.extend({
  classNames: ['uni-mobile-number'],
  classNameBindings: ['hasError:uni-mobile-number--error'],
  layout,
  number: null,
  language: null,
  maxLength: '15',
  countrySelected: null,
  selectPlaceholder: null,
  isInputDisabled: false,
  isOpen: false,
  options: [],
  preferredCountries: [], // e.g. ['PT', 'GB', 'DE']

  onChangeSelect() {},
  onChangeInput() {},

  init() {
    this._super(...arguments);

    let countries = [];
    let preferredCountries = this.get('preferredCountries');

    if (preferredCountries.length > 0) {
      countries.push(...preferredCountries.map((key) => this._getOption(key)));
      countries.push({ key: '', value: SEPARATOR, disabled: true });
    }

    countries.push(...getAllCountryNames().map(({ key }) => {
      if (preferredCountries.indexOf(key) < 0) {
        return this._getOption(key);
      }
    }).sort(this.sortByName));

    this.set('options', countries);
  },

  _getOption(key) {
    return { key, value: `${getCountryName(key)} (${getCountryCallingCode(key)})` };
  },

  sortByName(nameA, nameB) {
    let a = nameA.value.toUpperCase();
    let b = nameB.value.toUpperCase();

    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  },

  actions: {
    onChangeSelect(option) {
      this.get('onChangeSelect')(option);
      this.set('isInputDisabled', false);
      this.$().find('input')[0].focus();
    },
    onChangeInput() {
      this.get('onChangeInput')();
    }
  }
});
