import Ember from 'ember';
import layout from '../templates/components/uni-banner';

const { Component } = Ember;

export default Component.extend({
  tagName: '',
  layout,

  show: true,

  actions: {
    dismiss() {
      this.set('show', false);
    }
  }
});
