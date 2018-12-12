import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import moment from 'moment';
import MessageType from 'ember-cli-uniq/enums/uni-datepicker-message-type';
import { inject as service } from '@ember/service';
import layout from '../templates/components/uni-datepicker';

export default Component.extend({
  media: service(),

  layout,

  classNames: ['uni-datepicker'],
  classNameBindings: ['showAbove'],

  center: moment(),
  selected: moment(),
  minDate: moment(),
  maxDate: moment().add(2, 'years'),
  weekdayFormat: 'min',
  dateFormat: 'MMMM YYYY',
  showDaysAround: true,
  disabledDates: [],
  messages: [],
  isFullScreen: false,
  showAbove: false,

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

      if (a.type === MessageType.INFORMATION) {
        return 1;
      }

      return -1;
    })[0];
  }),

  onSelect() {},
  onCenter() {},
  onClose() {},

  actions: {
    nextMonth() {
      this.get('onCenter')(this.get('center').clone().add(1, 'month'));
    },

    prevMonth() {
      this.get('onCenter')(this.get('center').clone().add(-1, 'month'));
    },

    onClose() {
      this.get('onClose')();
    }
  }
});
