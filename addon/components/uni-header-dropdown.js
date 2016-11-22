import Ember from 'ember';
import layout from '../templates/components/uni-header-dropdown';

const { Component, k } = Ember;

export default Component.extend({
  isOpen: false,
  tagName: '',
  layout,

  actions: {
    toggle() {
      this.toggleProperty('isOpen');
    },
    switch(){}
  }
});
