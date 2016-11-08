import Ember from 'ember';
import layout from '../templates/components/uni-modal';

export default Ember.Component.extend({
  classNames: ['uni-modal'],
  layout,

  isOpen: false
});
