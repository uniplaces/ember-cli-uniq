import Ember from 'ember';
import layout from '../templates/components/uni-header';
import headerButtons from '../enums/header-buttons';
import headerOptions from '../enums/header-menu';
import languages from '../enums/languages';

export default Ember.Component.extend({
  headerButtons: headerButtons.values(),
  headerOptions: headerOptions.values(),
  languages: languages.values(),
  tagName: '',
  layout
});
