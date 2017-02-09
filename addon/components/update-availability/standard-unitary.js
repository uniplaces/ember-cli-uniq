import Ember from 'ember';
import layout from '../../templates/components/update-availability/standard-unitary';
import moment from 'moment';

const { Component, computed } = Ember;

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
    }
  },

  _createEmptyBlockedPeriod() {
    return {
      from: moment().format(this.get('format')),
      to: moment().format(this.get('format'))
    };
  }
});
