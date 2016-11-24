import Ember from 'ember';
import layout from '../templates/components/uni-info-card';

const { Component } = Ember;

export default Component.extend({
  classNames: ['uni-info-card'],
  layout,

  isOpen: false
});
