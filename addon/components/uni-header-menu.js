import Ember from 'ember';
import layout from '../templates/components/uni-header-menu';
import Languages from '../enums/languages';

const { Component } = Ember;
const PLACEHOLDER_USERNAME = 'Uniprovider';
const PLACEHOLDER_LANGUAGE = 'En';

export default Component.extend({
  tagName: '',
  layout,
  languages: Languages.toKeyValueJson(),
  isUserLoggedIn: false,
  language: PLACEHOLDER_LANGUAGE,
  username: PLACEHOLDER_USERNAME,

  actions: {
    onLanguageBtnClick(countryCode) {
      console.log(countryCode);
      console.log('clicked language btn');
    }
  }
});
