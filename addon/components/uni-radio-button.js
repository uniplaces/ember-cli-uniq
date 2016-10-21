import Ember from 'ember';
import layout from '../templates/components/uni-radio-button';

const {K, computed} = Ember;

export default Ember.Component.extend({
  layout,

  groupValue: null,
  hasChanged: K,
  name: null,
  label: null,

  checked: computed('value', 'groupValue', function() {
    return this.get('value') === this.get('groupValue');
  }),

  change() {
    this.get('hasChanged')(this.get('value'));
  }
});
