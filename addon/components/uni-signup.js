import Ember from 'ember';
import layout from '../templates/components/uni-signup';

const { Component } = Ember;

export default Component.extend({
  tagName: '',
  layout,
  onClickBack() {},
  onClickLogin() {},

  actions: {
    onClickBack() {
      this.get('onClickBack')();
    },

    onClickLogin() {
      this.get('onClickLogin')();
    }
  }
});
