import Ember from 'ember';
import layout from '../../templates/components/update-availability/fixed';
import AvailabilityTypes from 'ember-cli-uniq/enums/availability-options-type';
import moment from 'moment';
import { v4 } from 'ember-uuid';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['update-availability-fixed'],
  layout,
  dateFormat: 'D MMMM Y',
  displayNewOptionSection: false,
  allowEditOptions: true,
  startDate: moment(),
  endDate: moment(),
  labelOption: null,
  labelFrom: null,
  labelTo: null,
  labelAdd: null,
  labelEmpty: null,
  labelPer: null,
  labelOk: null,
  options: [],
  optionsPlaceholder: '',

  availabilityOptions: computed.alias('availability.options'),

  actions: {
    updateAvailability(index, { key }) {
      let availabilityOptions = this.set(`availabilityOptions.${index}.status`, key);

      return availabilityOptions;
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
      status: AvailabilityTypes.MEDIUM,
      id: v4()
    };
  }
});
