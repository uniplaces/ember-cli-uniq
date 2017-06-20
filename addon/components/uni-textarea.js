import Ember from 'ember';
import layout from '../templates/components/uni-textarea';

const { computed, Component, isPresent } = Ember;

export default Component.extend({
  classNames: ['uni-textarea'],
  classNameBindings: ['hasError:uni-textarea--error'],
  layout,

  rows: '3',
  value: '',
  maxLength: 300,

  tooltipMessage: null,
  showTooltip: false,

  count: computed('value', function() {
    if (this.get('value')) {
      return this.get('maxLength') - this.get('value').length;
    }

    return this.get('maxLength');
  }),

  focusIn() {
    if (isPresent(this.get('tooltipMessage'))) {
      this.set('showTooltip', true);
    }
  },

  focusOut() {
    if (isPresent(this.get('tooltipMessage'))) {
      this.set('showTooltip', false);
    }
  }
});
