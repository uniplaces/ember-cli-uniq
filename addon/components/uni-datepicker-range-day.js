import { isPresent, isEmpty } from 'ember-utils';
import layout from '../templates/components/uni-datepicker-range-day';
import { getProperties } from 'ember-metal/get';
import RangeDaysComponent from 'ember-power-calendar/components/power-calendar-range/days';

export default RangeDaysComponent.extend({
  layout,
  classNames: ['uni-datepicker-range-day'],
  minimumStay: null,
  highlightedDates: [],

  buildDay(dayMoment, today, calendar) {
    let day = this._super(...arguments);

    let { end } = getProperties(calendar.selected || { end: null }, 'end');

    day.isMinimumStay = isPresent(this.get('minimumStay')) && end !== null
      ? dayMoment.isSame(end, 'day') && this.get('minimumStay').isSame(end, 'day')
      : false;

    day.isHighlighted = this.dayIsHighlighted(dayMoment.clone());
    day.isFirstHighlighted = this._isFirstDayHighlighted(dayMoment.clone());
    day.isLastHighlighted = this._isLastDayHighlighted(dayMoment.clone());

    return day;
  },

  dayIsHighlighted(date) {
    let highlightedDates = this.get('highlightedDates');

    if (isPresent(highlightedDates)) {
      let highlightedInRange = highlightedDates.some((day) => {
        return date.isSame(day, 'day');
      });

      if (highlightedInRange) {
        return true;
      }
    }

    return false;
  },

  _isFirstDayHighlighted(date) {
    if (isEmpty(this.get('highlightedDates')) || this.get('highlightedDates.length') < 2) {
      return;
    }

    return this.get('highlightedDates.firstObject').isSame(date, 'day');
  },

  _isLastDayHighlighted(date) {
    if (isEmpty(this.get('highlightedDates')) || this.get('highlightedDates.length') < 2) {
      return;
    }

    return this.get('highlightedDates.lastObject').isSame(date, 'day');
  },

  onMouseOver() {},
  onMouseOut() {},
  onDisabledClick() {},

  actions: {
    onMouseOver(ev, day) {
      this.get('onMouseOver')(ev, day);
    },
    onMouseOut(ev, day) {
      this.get('onMouseOut')(ev, day);
    },
    onDisabledClick() {
      this.get('onDisabledClick')();
    }
  }
});
