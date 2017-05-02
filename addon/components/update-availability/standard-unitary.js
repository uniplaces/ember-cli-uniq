import Ember from 'ember';
import layout from '../../templates/components/update-availability/standard-unitary';
import moment from 'moment';

const { Component, computed, isNone, set, get } = Ember;

export default Component.extend({
  classNames: ['update-availability-standard-unitary'],
  layout,
  labelFrom: null,
  labelTo: null,
  labelDelete: null,
  format: 'YYYY-MM-DD',

  blockedPeriods: computed.alias('availability.blocked_periods'),

  onSelected() {},

  actions: {
    onAvailableFromSelected(availableFrom) {
      this.set('availability.available_from', availableFrom.format(this.get('format')));

      this.get('onSelected')(this.get('availability'));
    },

    addBlockedPeriod() {
      this.get('blockedPeriods').addObject(this._createEmptyBlockedPeriod());

      this.get('onSelected')(this.get('availability'));
    },

    deleteBlockedPeriod(index) {
      this.get('blockedPeriods').removeAt(index);
    },

    storeDate(setDateAction, date) {
      setDateAction(date.format(this.get('format')));
    },

    stringToMoment(date) {
      let convertedDate = moment(date);

      return !convertedDate.isValid() ? null : convertedDate;
    },

    getCenter(date) {
      return isNone(date) ? moment() : moment(date);
    },

    changeBlockedPeriodFrom(blockedPeriod, date) {
      let from = date.format(this.get('format'));

      set(blockedPeriod, 'from', from);

      if (date.isAfter(get(blockedPeriod, 'to'))) {
        set(blockedPeriod, 'to', from);
      }
    }
  },

  _createEmptyBlockedPeriod() {
    let defaultDate = this.getWithDefault('availability.available_from', moment().format(this.get('format')));

    return { from: defaultDate, to: defaultDate };
  }
});
