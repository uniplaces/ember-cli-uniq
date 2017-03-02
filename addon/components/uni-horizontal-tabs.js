import Ember from 'ember';
import layout from '../templates/components/uni-horizontal-tabs';

const { Component, computed, isEmpty } = Ember;

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

  optionSelected: computed('options', 'currentTab', function() {
    if (isEmpty(this.get('options'))) {
      return;
    }

    return this.get('options')[this.get('currentTab')];
  }),
  titles: computed('options', function() {
    return this.get('options').map(this.toTitle);
  }),

  actions: {
    setTab(index) {
      this.set('currentTab', index);
    }
  }
});
