import Ember from 'ember';
import layout from '../templates/components/uni-header-menu';
import headerButtons from '../enums/header-buttons';
import languages from '../enums/languages';

const { Component } = Ember;
const headerOptions = [
  {
    label: 'Account',
    route: '/account' 
  },
  {
    label: 'Billing',
    route: '/billing'
  },
  {
    label: 'Logout',
    route: '/logout'
  }
];

export default Component.extend({
  tagName: '',
  layout,
  headerButtons: headerButtons.values(),
  headerOptions: headerOptions,
  languageOptions: languages.values(),
  exitLabel: 'Exit',

  triggerExit() {},

  actions: {
      triggerExit() {
        this.get('triggerExit')();
      }
  }
});
