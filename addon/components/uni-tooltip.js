import Ember from 'ember';
import layout from '../templates/components/uni-tooltip';

const { Component } = Ember;

export default Component.extend({
  tagName: 'span',
  classNames: ['uni-tooltip'],
  classNameBindings: ['isOpen:uni-tooltip--active'],
  layout,

  informationIcon: false,
  questionIcon: false,
  isOpen: false,

  click() {
    this.set('isOpen', !this.get('isOpen'));
  }
});
