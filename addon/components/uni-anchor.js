import Ember from 'ember';
import layout from '../templates/components/uni-anchor';

const { Component } = Ember;

export default Component.extend({
  classNames: ['uni-anchor'],
  layout,

  tagName: 'a',
  attributeBindings: ['href', 'target'],
  href: '#'
});
