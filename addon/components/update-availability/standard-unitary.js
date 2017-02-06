import Ember from 'ember';
import layout from '../../templates/components/update-availability/standard-unitary';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['update-availability-standard-unitary'],
  layout,
  labelFrom: 'From',
  labelTo: 'To',

  // availableFrom: computed.alias('availability.available_from'),
  blockedPeriods: computed.alias('availability.blocked_periods'),

  onSelected() {},

  actions: {
    onAvailableFromSelected(availableFrom) {
      this.set('availability.available_from', availableFrom.format('YYYY-MM-DD'));

      this.get('onSelected')(this.get('availability'));
    }
  }
});
