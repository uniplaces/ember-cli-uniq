import Ember from 'ember';
import layout from '../templates/components/uni-auth-modal';

const { Component } = Ember;

export default Component.extend({
  tagName: '',
  layout,
  isOpen: false,
  baseCssClass: 'uni-auth-modal',
  hasSeparator: false,

  onCloseModal() {},

  actions: {
    onCloseModal() {
      this.get('onCloseModal')();
    }
  }
});
