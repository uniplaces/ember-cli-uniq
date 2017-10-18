import Component from '@ember/component';
import layout from '../templates/components/uni-footer-website-row';

export default Component.extend({
  classNames: ['uni-footer-website__row'],
  layout,

  cellComponent: 'uni-footer-website-row-cell'
});
