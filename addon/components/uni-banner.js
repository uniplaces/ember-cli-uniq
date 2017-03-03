import Ember from 'ember';
import layout from '../templates/components/uni-banner';

const { Component } = Ember;

export default Component.extend({
  tagName: '',
  layout,

  isOpen: true,

  onDismiss() {},

  actions: {
    dismiss() {
      this.set('isOpen', false);
      this.get('onDismiss')();
    }
  }
});
