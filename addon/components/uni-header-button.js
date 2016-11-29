import Ember from 'ember';
import layout from '../templates/components/uni-header-button';

const { Component } = Ember;

export default Component.extend({
  tagName: 'button',
  classNameBindings: ['isBordered:uni-header__nav__button--bordered'],
  classNames: ['uni-header__nav__button'],
  layout,
  action() {},

  click() {
    this.get('action')();
  }
});
