import Ember from 'ember';
import layout from '../templates/components/uni-tooltip';

const { Component } = Ember;

export default Component.extend({
  tagName: 'span',
  classNames: ['uni-tooltip'],
  classNameBindings: ['isActive:uni-tooltip--active'],
  layout,

  isInformation: false,
  isQuestion: false,
  isActive: false,

  click() {
    this.set('isActive', !this.get('isActive'));

    this.get('onClick')();
  }
});
