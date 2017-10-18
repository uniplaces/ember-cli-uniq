import Component from '@ember/component';
import layout from '../templates/components/uni-header-mobile-menu-dropdown';

export default Component.extend({
  layout,
  tagName: '',
  isOpen: false,
  options: [],
  selected: null,

  toggleDropdown() {}
});
