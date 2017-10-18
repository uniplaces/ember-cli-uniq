import { and } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/uni-selector-button';

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
  showWarning: and('checked', 'warning'),
  showError: and('checked', 'error'),

  hasChanged() {},

  change() {
    this.get('hasChanged')(this.get('value'));
  }
});
