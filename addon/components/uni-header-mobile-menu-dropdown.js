import Ember from 'ember';
import layout from '../templates/components/uni-header-mobile-menu-dropdown';

const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: '',
  isOpen: false,
  options: [],
  selected: null,

  toggleDropdown() {}
});
