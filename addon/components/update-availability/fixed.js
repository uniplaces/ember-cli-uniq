import Ember from 'ember';
import layout from '../../templates/components/update-availability/fixed';
import moment from 'moment';

const { Component, computed, $ } = Ember;

export default Component.extend({
  classNames: ['update-availability-fixed'],
  layout,
  dateFormat: 'D MMMM Y',
  fromLabel: 'from',
  toLabel: 'to',
  options: [
    { key: 'medium', value: 'Available' },
    { key: 'low', value: 'Limited availability' },
    { key: 'none', value: 'Not available' }
  ],
  availabilityOptions: computed.alias('availability.options'),

  actions: {
    updateAvailability(index, { key }) {
      let availabilityOptions = this.set(`availabilityOptions.${index}.status`, key);

      return availabilityOptions;
    },

    placeholder(option) {
      let startMonth = moment(option.start_date).format(this.get('dateFormat'));
      let endMonth = moment(option.end_date).format(this.get('dateFormat'));

      return this._createPlaceholder(startMonth, endMonth);
    }
  },

  _createPlaceholder(startMonth, endMonth) {
    let boldSpan = $('<span>').css('font-weight', 'bold');

    return [
      this.get('fromLabel'),
      boldSpan.html(startMonth).prop('outerHTML'),
      this.get('toLabel'),
      boldSpan.html(endMonth).prop('outerHTML')
    ].join(' ');
  }
});
