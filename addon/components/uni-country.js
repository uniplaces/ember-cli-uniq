import Component from '@ember/component';
import { computed } from '@ember/object';
import { isBlank } from '@ember/utils';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import layout from '../templates/components/uni-country';
import Countries from 'ember-cli-countries/enums/countries';

export default Component.extend({
  layout,
  i18n: service(),

  classNames: ['uni-country'],
  classNameBindings: ['hasError:uni-country--error'],

  countryCode: null,
  countries: A(),
  noResultsText: 'No results for ',
  placeholderText: 'Type your country ',
  pathToTranslateCountry: null,

  onChange() {},

  selectedCountry: computed('countries', 'countryCode', function() {
    if (isBlank(this.get('countryCode'))) {
      return '';
    }

    let country = this.get('countries').findBy('code', this.get('countryCode').toLowerCase());

    return country ? country.name : '';
  }),

  init() {
    this._super(...arguments);

    this.set('countries', this.initializeCountries());
  },

  actions: {
    changeCountryCode({ option } = { option: null }) {
      this.set('countryCode', option ? option.code.toUpperCase() : null);
      this.get('onChange')(this.get('countryCode'));
    },

    countryNames(option) {
      return [option.name];
    }
  },

  initializeCountries() {
    let countries = [];
    Countries.toKeyValueJson().forEach(({ key, value }) => {
      let name = this.get('pathToTranslateCountry')
        ? this.get('i18n').t(`${this.get('pathToTranslateCountry')}${key.toLowerCase()}`).toString().trim()
        : value;

      countries.push({ code: key.toLowerCase(), name });
    });

    return A(countries);
  }
});
