import Component from '@ember/component';
import { isEmpty } from '@ember/utils';
import { observer, computed } from '@ember/object';
import layout from '../templates/components/uni-horizontal-tabs';

export default Component.extend({
  layout,
  classNames: ['uni-horizontal-tabs'],

  options: [],
  currentTab: 0,

  /**
   * @public
   * @param {Option} option The option data provided to the component
   *
   * This method can be redefined if you need to create a custom title
   */
  toTitle(option) {
    return option;
  },

  onOptionsChanged: observer('options.[]', function() {
    this.set('currentTab', Math.min(this.get('currentTab'), this.get('options.length') - 1));
  }),

  optionSelected: computed('options.[]', 'currentTab', function() {
    if (isEmpty(this.get('options'))) {
      return;
    }

    return this.get('options')[this.get('currentTab')];
  }),
  titles: computed('options.@each.title', function() {
    return this.get('options').map(this.get('toTitle'));
  }),

  onBtnClick() {},

  actions: {
    onBtnClick() {
      this.get('onBtnClick')();
    },

    setTab(index) {
      this.set('currentTab', index);
    }
  }
});
