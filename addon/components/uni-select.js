import Ember from 'ember';
import layout from '../templates/components/uni-select';

const { Component } = Ember;

export default Component.extend({
  layout,
  options: [],
  onChange() {},

  actions: {
    changeSelected({ target }) {
      this.get('onChange')(target.value);
    }
  }
});
