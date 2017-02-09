import Ember from 'ember';
import layout from '../../templates/components/update-availability/fixed';
import AvailabilityTypes from 'ember-cli-uniq/enums/availability-options-type';
import moment from 'moment';

const { Component, computed, $ } = Ember;

export default Component.extend({
  classNames: ['update-availability-fixed'],
  layout,
  dateFormat: 'D MMMM Y',
  displayNewOptionSection: false,
  startDate: moment(),
  endDate: moment(),
  labelOption: null,
  labelFrom: null,
  labelTo: null,
  labelAdd: null,
  labelEmpty: null,
  labelPer: null,
  options: [],

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
    },

    deleteOption(index) {
      this.get('availabilityOptions').removeAt(index);
    },

    addOption() {
      let { startDate, endDate, contractValue } = this.getProperties('startDate', 'endDate', 'contractValue');

      this.get('availabilityOptions').addObject(this._createEmptyOption(startDate, endDate, contractValue));

      this.toggleProperty('displayNewOptionSection');
    }
  },

  _createEmptyOption(startDate, endDate, contractValue) {
    return {
      start_date: startDate,
      end_date: endDate,
      contract_value: contractValue,
      status: AvailabilityTypes.MEDIUM
    };
  },

  _createPlaceholder(startMonth, endMonth) {
    let boldSpan = $('<span>').css('font-weight', 'bold');

    return [
      this.get('labelFrom'),
      boldSpan.html(startMonth).prop('outerHTML'),
      this.get('labelTo'),
      boldSpan.html(endMonth).prop('outerHTML')
    ].join(' ');
  }
});
