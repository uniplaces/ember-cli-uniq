import Ember from 'ember';
import moment from 'moment';
import layout from '../templates/components/uni-datepicker';

export default Ember.Component.extend({
  layout,

  center: moment(),
  selected: moment(),
  minDate: moment(),
  maxDate: moment().add(1, 'years'),
  onSelect: Ember.K,
});
