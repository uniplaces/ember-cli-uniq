import Ember from 'ember';
import layout from '../../templates/components/update-availability/standard-unitary';
import moment from 'moment';

const { Component, computed, isNone, isPresent, set, get } = Ember;

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

    changeBlockedPeriodFrom(blockedPeriod, date) {
      set(blockedPeriod, 'from', date.format(this.get('momentFormat')));

      if (moment(get(blockedPeriod, 'to')).isBefore(get(blockedPeriod, 'from'))) {
        set(blockedPeriod, 'to', date.format(this.get('momentFormat')));
      }
    },

    storeDate(setDateAction, date) {
      setDateAction(date.format(this.get('momentFormat')));
    },

    stringToMoment(date) {
      let convertedDate = moment(date);

      return !convertedDate.isValid() ? null : convertedDate;
    },

    getCenter(date) {
      return isNone(date) ? moment() : moment(date);
    }
  },

  _createEmptyBlockedPeriod() {
    let hasAvailableFrom = isPresent(this.get('availability.available_from'));
    let today = moment().format(this.get('format'));
    let defaultDate = hasAvailableFrom ? this.get('availability.available_from') : today;

    return { from: defaultDate, to: defaultDate };
  }
});
