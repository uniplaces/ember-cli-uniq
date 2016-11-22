import Ember from 'ember';
import layout from '../templates/components/uni-header-menu';
import headerButtons from '../enums/header-buttons';
import headerOptions from '../enums/header-menu';
import languages from '../enums/languages';

const { Component } = Ember;

export default Component.extend({
  headerButtons: headerButtons.values(),
  headerOptions: headerOptions.values(),
  languageOptions: languages.values(),
  exitLabel: 'Exit',
  tagName: '',
  layout,

  actions: {
    triggerExit() {}
  }
});
