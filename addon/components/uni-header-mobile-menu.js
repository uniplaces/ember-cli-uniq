import Component from '@ember/component';
import layout from '../templates/components/uni-header-mobile-menu';

export default Component.extend({
  layout,
  classNames: ['uni-header-mobile-menu'],
  buttonComponent: 'uni-header-mobile-menu-button',
  separatorComponent: 'uni-header-mobile-menu-separator',
  dropdownComponent: 'uni-header-mobile-menu-dropdown',

  isOpen: false
});
