import Ember from 'ember';
import layout from '../templates/components/uni-checkbox';

const { Component } = Ember;

export default Component.extend({
  layout,

  isSelected: false,
  onChange() {},

  click() {
    this.get('onChange')(!this.get('isSelected'));
  }
});
