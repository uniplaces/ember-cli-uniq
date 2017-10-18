import Component from '@ember/component';
import layout from '../templates/components/uni-header';

export default Component.extend({
  tagName: 'header',
  layout,
  logoRoute: 'index',
  classNames: ['uni-header'],
  classNameBindings: ['isTransparent:uni-header--transparent', 'isOpen:uni-header--active']
});
