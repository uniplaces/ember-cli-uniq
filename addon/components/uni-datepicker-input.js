import Component from '@ember/component';
import { computed } from '@ember/object';
import { isPresent, isNone } from '@ember/utils';
import layout from '../templates/components/uni-datepicker-input';
import moment from 'moment';
import { inject as service } from '@ember/service';

export default Component.extend({
  media: service(),

  classNames: ['uni-datepicker-input'],
  layout,
  showDatepicker: false,
  selected: moment(),
  center: moment(),
  format: 'll',
  placeholder: null,
  label: null,
  disabledDates: [],
  showAbove: false,

  formattedDate: computed('selected', function() {
    let selected = this.get('selected');

    if (isNone(selected) && isPresent(this.get('placeholder'))) {
      return '';
    }

    return isNone(selected)
      ? moment().format(this.get('format'))
      : moment(selected).format(this.get('format'));
  }),

  onSelected() {},

  isComponentDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
  },

  actions: {
    onSelect(date) {
      this.get('onSelected')(date);

      this.toggleProperty('showDatepicker');
    },

    toggleDatepicker() {
      this.toggleProperty('showDatepicker');
    }
  }
});
