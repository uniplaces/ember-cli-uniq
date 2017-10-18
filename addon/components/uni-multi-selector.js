import Component from '@ember/component';
import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import layout from '../templates/components/uni-multi-selector';

export default Component.extend({
  layout,
  classNames: ['uni-multi-selector'],
  classNameBindings: ['isStatic:uni-multi-selector--static'],

  options: [],
  name: null,
  groupValue: null,
  errorOptions: [],
  warningOptions: [],
  hasDefaultState: true,
  isStatic: false,

  hasWarning: computed('groupValue', 'warningOptions', function() {
    return this.get('warningOptions').includes(this.get('groupValue'));
  }),
  hasError: computed('groupValue', 'errorOptions', function() {
    return this.get('errorOptions').includes(this.get('groupValue'));
  }),
  onChange() {},

  didReceiveAttrs() {
    this._super(...arguments);

    if (isEmpty(this.get('groupValue')) && this.get('hasDefaultState')) {
      this.set('groupValue', this.get('options')[0].value);
    }
  },

  actions: {
    hasChanged(value) {
      this.set('groupValue', value);

      this.get('onChange')();
    }
  }
});
