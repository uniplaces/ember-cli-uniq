import Ember from 'ember';
import layout from '../templates/components/uni-info-card';

const { Component } = Ember;

export default Component.extend({
  tagName: '',
  layout,
  baseCssClass: 'uni-info-card',
  hasSeparator: false,

  isOpen: false
});
