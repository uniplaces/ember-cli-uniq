import Ember from 'ember';
import layout from '../templates/components/uni-textarea';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['uni-textarea'],
  layout,

  rows: '3',
  value: '',
  maxLength: 300,
  count: computed('value', function() {
    if (this.get('value')) {
      return this.get('maxLength') - this.get('value').length;
    }

    return this.get('maxLength');
  })
});
