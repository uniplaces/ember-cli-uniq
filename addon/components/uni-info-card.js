import Component from '@ember/component';
import layout from '../templates/components/uni-info-card';

export default Component.extend({
  tagName: '',
  layout,
  baseCssClass: 'uni-info-card',
  hasSeparator: false,

  isOpen: false
});
