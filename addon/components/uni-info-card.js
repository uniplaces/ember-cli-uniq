import Ember from 'ember';
import layout from '../templates/components/uni-info-card';

export default Ember.Component.extend({
  classNames: ['uni-info-card'],
  layout,

  isOpen: false
});
