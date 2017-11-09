import Component from '@ember/component';
import layout from '../templates/components/uni-footer-website';

export default Component.extend({
  classNames: ['uni-footer-website'],
  classNameBindings: ['isDark:uni-footer-website--dark'],
  layout,

  rowComponent: 'uni-footer-website-row'
});
