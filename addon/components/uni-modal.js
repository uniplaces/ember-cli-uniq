import Ember from 'ember';
import layout from '../templates/components/uni-modal';

const { Component } = Ember;

export default Component.extend({
  classNames: ['uni-modal'],
  layout,

  isOpen: false
});
