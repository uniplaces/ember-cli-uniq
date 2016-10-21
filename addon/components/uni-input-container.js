import Ember from 'ember';
import layout from '../templates/components/uni-input-container';

export default Ember.Component.extend({
  classNames: ['uni-input-container', 'uni-input-container--bordered'],
  classNameBindings: ['isChecked:uni-input-container--focused'],
  layout,

  isChecked: false
});
