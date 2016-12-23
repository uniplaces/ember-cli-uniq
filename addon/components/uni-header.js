import Ember from 'ember';
import layout from '../templates/components/uni-header';

const { Component } = Ember;

export default Component.extend({
  tagName: 'header',
  layout,
  logoRoute: 'index',
  classNames: ['uni-header'],
  classNameBindings: ['isTransparent:uni-header--transparent', 'isOpen:uni-header--active']
});
