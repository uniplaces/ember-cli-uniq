import Ember from 'ember';
import layout from '../../templates/components/update-availability/standard';
import AvailabilityTypes from 'ember-cli-uniq/enums/availability-options-type';
import moment from 'moment';

const { Component, computed } = Ember;
const PAST = 'past';

export default Component.extend({
  classNames: ['update-availability-standard'],
  layout,
  monthLabel: 'month.label',
  yearIndex: 0,
  options: [],
  AvailabilityTypes,

  labelAvailable: null,
  labelNotAvailable: null,
  labelLimitedAvailability: null,

  years: computed.alias('availability.years'),
  monthlyAvailability: computed.alias('currentYear.monthly_availability'),
  isFirst: computed.equal('yearIndex', 0),
  isLast: computed('yearIndex', function() {
    return this.get('yearIndex') === (this.get('years').length - 1);
  }),
  currentYear: computed('yearIndex', function() {
    return this.get('years')[this.get('yearIndex')];
  }),

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

      this._updateYears(years);
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

    setYearAvailability(type) {
      this.set('monthlyAvailability', new Array(12).fill(type));
    }
  },

  _updateYears(years) {
    this.get('onChange')(years);

    this.notifyPropertyChange('monthlyAvailability');
  },

  _isDateBeforeCurrentMonthAndYear(month, year) {
    return moment().year() < year ? false : moment().month() > month;
  }
});
