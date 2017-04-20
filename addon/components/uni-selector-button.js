import Ember from 'ember';
import layout from '../templates/components/uni-selector-button';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  classNames: ['uni-multi-selector__button'],
  classNameBindings: [
    'showWarning:uni-multi-selector__button--warning',
    'showError:uni-multi-selector__button--error'
  ],

  groupValue: null,
  name: null,
  label: null,
  warning: false,
  error: false,

  checked: computed('value', 'groupValue', function() {
    return this.get('value') === this.get('groupValue');
  }),
  showWarning: computed.and('checked', 'warning'),
  showError: computed.and('checked', 'error'),
  hasChanged() {},

  change() {
    this.get('hasChanged')(this.get('value'));
  }
});
