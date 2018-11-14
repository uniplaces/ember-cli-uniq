import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/uni-input-range';

export default Component.extend({
  classNameBindings: ['isEditable:uni-input-range--editable', 'isSmall:uni-input-range--small'],
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
    onChange(value) {
      let val = Math.min(Math.max(value, this.get('min')), this.get('max'));

      this.get('onChange')(val);
    },

    decrement() {
      this.get('onChange')(Math.max(this.get('value') - this.get('offset'), this.get('min')));
    },

    increment() {
      this.get('onChange')(Math.min(this.get('value') + this.get('offset'), this.get('max')));
    }
  }
});
