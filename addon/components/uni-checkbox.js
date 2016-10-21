import Ember from 'ember';
import layout from '../templates/components/uni-checkbox';

export default Ember.Component.extend({
  layout,

  isSelected: false,
  onChange: Ember.K,

  click() {
    this.get('onChange')(!this.get('isSelected'));
  }
});
