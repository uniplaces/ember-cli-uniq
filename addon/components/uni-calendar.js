import Ember from 'ember';
import layout from '../templates/components/uni-calendar';

export default Ember.Component.extend({
  layout,
  classNames: ['uni-calendar'],

  minViewMode: 0,
  maxViewMode: 0,
  startView: 0,
  startDate: "10/10/2016"
});
