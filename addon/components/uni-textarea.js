import Ember from 'ember';
import layout from '../templates/components/uni-textarea';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['uni-textarea'],
  layout,

  rows: '3',
  value: '',
  limitChars: 300,
  count: computed('value', function () {
    return this.get('limitChars') - this.get('value').length;
  })
});
