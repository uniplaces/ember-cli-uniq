import Component from '@ember/component';
import layout from '../templates/components/uni-datepicker-range';
import moment from 'moment';

export default Component.extend({
  layout,
  classNames: ['uni-datepicker-range'],

  center: moment(),
  minDate: moment(),
  maxDate: moment().add(3, 'years'),
  weekdayFormat: 'min',
  titleFormat: 'MMMM YYYY',
  showDaysAround: true,
  disabledDates: [],
  highlightedDates: [],
  minimumStay: null,
  proximitySelection: false,

  onSelect() {},
  onCenter() {},
  onMouseOver() {},
  onMouseOut() {},
  onDisabledClick() {},

  actions: {
    nextMonth() {
      this.set(
        'center',
        this.get('center')
          .clone()
          .add(1, 'months')
      );
      this.get('onCenter')(this.get('center'));
    },

    previousMonth() {
      this.set(
        'center',
        this.get('center')
          .clone()
          .subtract(1, 'months')
      );
      this.get('onCenter')(this.get('center'));
    }
  }
});
