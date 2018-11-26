import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import moment from 'moment';
import layout from '../templates/components/uni-datepicker';
import MessageType from 'ember-cli-uniq/enums/uni-datepicker-message-type';

export default Component.extend({
  layout,

  classNames: ['uni-datepicker'],

  center: moment(),
  selected: moment(),
  minDate: moment(),
  maxDate: moment().add(2, 'years'),
  weekdayFormat: 'min',
  dateFormat: 'MMMM YYYY',
  showDaysAround: true,
  disabledDates: [],
  messages: [],

  isFirstMonth: computed('center', function() {
    return this.get('center').isSame(this.get('minDate'), 'month') ? 'disabled' : '';
  }),
  isLastMonth: computed('center', function() {
    return this.get('center').isSame(this.get('maxDate'), 'month') ? 'disabled' : '';
  }),
  selectedMessage: computed('messages', function() {
    let messagesArray = this.get('messages');

    if (isEmpty(messagesArray)) {
      return null;
    }

    return messagesArray.sort(function(a, b) {
      if (a.type === b.type) {
        return 0;
      }

      return a.type === MessageType.INFORMATION ? 1 : -1;
    })[0];
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
