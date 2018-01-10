import Component from '@ember/component';
import layout from '../templates/components/uni-autocomplete-no-results';

export default Component.extend({
  layout,

  value: null,
  translatedText: 'No results for '
});
