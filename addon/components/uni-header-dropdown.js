import Ember from 'ember';
import layout from '../templates/components/uni-header-dropdown';

const { Component } = Ember;

export default Component.extend({
  tagName: '',
  layout,
  isOpen: false,
  componentName: 'uni-header-dropdown-item-simple',

  switch() {},

  actions: {
    switch() {
      this.get('switch')();
    }
  }
});
