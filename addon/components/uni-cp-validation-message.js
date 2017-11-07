import Ember from 'ember';
import layout from '../templates/components/uni-cp-validation-message';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: ['uni-cp-validation-message'],

  model: null,
  attribute: ''
});
