import Ember from 'ember';
import layout from '../templates/components/uni-datepicker-input';
import ClickOutsideMixin from 'ember-cli-uniq/mixins/click-outside';
import moment from 'moment';

const { Component, computed, isNone, isPresent } = Ember;

export default Component.extend(ClickOutsideMixin, {
  classNames: ['uni-datepicker-input'],
  layout,
  showDatepicker: false,
  selected: moment(),
  center: moment(),
  format: 'll',
  minDate: moment(),
  maxDate: moment().add(2, 'years'),
  placeholder: null,
  label: null,
  isReadOnly: true,

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
  onOutsideClick() {
    this.set('showDatepicker', false);
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
