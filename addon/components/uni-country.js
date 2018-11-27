import Component from '@ember/component';
import { computed } from '@ember/object';
import { isBlank } from '@ember/utils';
import layout from '../templates/components/uni-country';
import Countries from 'ember-cli-countries/enums/countries';

export default Component.extend({
  layout,

  classNames: ['uni-country'],
  classNameBindings: ['hasError:uni-country--error'],

  countryCode: null,
  noResultsText: 'No results for ',
  placeholderText: 'Type your country ',
  locale: null,
  autocomplete: 'off',

  countries: computed('locale', function() {
    let countries = [];
    Countries.toKeyValueJson().forEach(({ key, value }) => {
      countries.push({ code: key.toLowerCase(), name: this.get('getTranslatedCountryName')(key, value) });
    });

    return countries;
  }),

  selectedCountry: computed('countries', 'countryCode', function() {
    if (isBlank(this.get('countryCode'))) {
      return '';
    }

    let country = this.get('countries').find(({ code }) => code === this.get('countryCode').toLowerCase());

    return country ? country.name : '';
  }),

  onChange() {},
  getTranslatedCountryName(key, value) {
    return value;
  },

  actions: {
    changeCountryCode({ option } = { option: null }) {
      this.set('countryCode', option ? option.code.toUpperCase() : null);
      this.get('onChange')(this.get('countryCode'));
    },

    countryNames(option) {
      return [option.name];
    }
  }
});
