import Ember from 'ember';
import layout from '../../templates/components/update-availability/standard';
import moment from 'moment';

const { Component, computed } = Ember;
const PAST = 'past';

export default Component.extend({
  classNames: ['update-availability-standard'],
  layout,

  monthLabel: 'month.label',
  years: computed.alias('availability.years'),
  yearIndex: 0,
  options: [
    { key: 'medium', value: 'Medium' },
    { key: 'low', value: 'Low' },
    { key: 'none', value: 'None' }
  ],

  isFirst: computed.equal('yearIndex', 0),
  isLast: computed('yearIndex', function() {
    return this.get('yearIndex') === (this.get('years').length - 1);
  }),
  currentYear: computed('yearIndex', function() {
    return this.get('years')[this.get('yearIndex')];
  }),
  monthlyAvailability: computed.alias('currentYear.monthly_availability'),

  onChange() {},

  actions: {
    updateAvailability(currentMonth, year, { key }) {
      let years = this.get('years').map((availabilityYear) => {
        if (availabilityYear.year !== year) {
          return availabilityYear;
        }

        availabilityYear.monthly_availability[currentMonth] = key;

        return availabilityYear;
      });

      this.get('onChange')(years);

      this.notifyPropertyChange('monthlyAvailability');
    },

    isDisabled(month, year) {
      return this._isDateBeforeCurrentMonthAndYear(month, year);
    },

    checkStatus(availability, month, year) {
      return this._isDateBeforeCurrentMonthAndYear(month, year) ? PAST : availability;
    },

    monthAbreviation(currentMonth) {
      return moment().month(currentMonth).format('MMM');
    },

    increment(property) {
      this.incrementProperty(property);
    },

    decrement(property) {
      this.decrementProperty(property);
    }
  },

  _isDateBeforeCurrentMonthAndYear(month, year) {
    return moment().year() < year ? false : moment().month() > month;
  }
});
