import Ember from 'ember';
import layout from '../templates/components/uni-header-mobile-menu-separator';

const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: 'uni-header__mobile-nav__separator'
});
