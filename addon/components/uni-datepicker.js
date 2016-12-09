import Ember from 'ember';
import moment from 'moment';
import layout from '../templates/components/uni-datepicker';

const { Component, computed } = Ember;

export default Component.extend({
  layout,

  center: moment(),
  selected: moment(),
  minDate: moment(),
  maxDate: moment().add(2, 'years'),
  weekdayFormat: 'min',
  dateFormat: 'MMMM YYYY',
  showDaysAround: false,
  isFirstMonth: computed('center', function() {
    return this.get('center').isSame(this.get('minDate'), 'month');
  }),
  isLastMonth: computed('center', function() {
    return this.get('center').isSame(this.get('maxDate'), 'month');
  }),

  onSelect() {},
  onCenter() {},

  actions: {
    nextMonth() {
      this.get('onCenter')(this.get('center').clone().add(1, 'month'));
    },

    prevMonth() {
      this.get('onCenter')(this.get('center').clone().add(-1, 'month'));
    }
  }
});
