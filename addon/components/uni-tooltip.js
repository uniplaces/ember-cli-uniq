import Ember from 'ember';
import layout from '../templates/components/uni-tooltip';

const { Component } = Ember;

export default Component.extend({
  tagName: 'span',
  classNames: ['uni-tooltip'],
  classNameBindings: ['isActive:uni-tooltip--active', 'isAlternative:uni-tooltip--alternative'],
  layout,

  isInformation: false,
  isQuestion: false,
  isActive: false,
  isAlternative: false,
  yieldContent: false,

  onClick() {},

  click() {
    if (!this.get('isAlternative')) {
      this.set('isActive', !this.get('isActive'));
    }

    this.get('onClick')();
  }
});
