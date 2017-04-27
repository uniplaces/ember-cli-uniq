import Ember from 'ember';
import layout from '../templates/components/uni-input-range';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['uni-input-range'],
  layout,

  value: 0,
  offset: 1,
  max: Number.MAX_SAFE_INTEGER,
  min: 0,
  placeholder: 'placeholder',

  onChange() {},

  isDecrementDisabled: computed('value', function() {
    return this.get('value') <= this.get('min');
  }),
  isIncrementDisabled: computed('value', function() {
    return this.get('value') >= this.get('max');
  }),

  actions: {
    decrement() {
      this.get('onChange')(Math.max(this.get('value') - this.get('offset'), this.get('min')));
    },

    increment() {
      this.get('onChange')(Math.min(this.get('value') + this.get('offset'), this.get('max')));
    }
  }
});
