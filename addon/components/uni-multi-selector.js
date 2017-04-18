import Ember from 'ember';
import layout from '../templates/components/uni-multi-selector';

const { Component, isEmpty } = Ember;

export default Component.extend({
  layout,

  options: [],
  name: null,
  groupValue: null,
  onChange() {},

  init() {
    this._super(...arguments);

    if (isEmpty(this.get('groupValue'))) {
      this.set('groupValue', this.get('options')[0].value);
    }
  },

  actions: {
    hasChanged(value) {
      this.set('groupValue', value);

      this.get('onChange')();
    }
  }
});
