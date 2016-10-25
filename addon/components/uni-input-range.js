import Ember from 'ember';
import layout from '../templates/components/uni-input-range';

const { computed } = Ember;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

export default Ember.Component.extend({
  classNames: ['uni-input-range'],
  layout,

  value: 0,
  offset: 1,
  max: MAX_SAFE_INTEGER,
  min: 0,
  placeholder: "placeholder",

  isDecrementDisabled: computed('value', function() {
    return this.get('value') <= this.get('min');
  }),
  isIncrementDisabled: computed.gte('value', function() {
    return this.get('value') >= this.get('max');
  }),

  actions: {
    decrement() {
      if (this.get('isDecrementDisabled')) {
        return;
      }

      this.decrementProperty('value', this.get('offset'));
    },

    increment() {
      if (this.get('isIncrementDisabled')) {
        return;
      }

      this.incrementProperty('value', this.get('offset'));
    }
  }
});
