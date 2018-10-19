import Component from '@ember/component';
import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import layout from '../templates/components/uni-horizontal-tabs';

export default Component.extend({
  layout,
  classNames: ['uni-horizontal-tabs'],

  options: [],
  currentTab: 0,

  onOptionsChanged: computed('options.[]', function() {
    this.set('currentTab', Math.min(this.get('currentTab'), this.get('options.length') - 1));
  }),

  optionSelected: computed('options.[]', 'currentTab', function() {
    if (isEmpty(this.get('options'))) {
      return;
    }

    return this.get('options')[this.get('currentTab')];
  }),
  titles: computed('options', function() {
    return this.get('options').map(this.get('toTitle'));
  }),

  toTitle(option) {
    return option;
  },

  onBtnClick() {},
  onChangeTab() {},

  actions: {
    onBtnClick() {
      this.get('onBtnClick')();
    },

    setTab(index) {
      this.set('currentTab', index);
      this.get('onChangeTab')(this.get('optionSelected'));
    }
  }
});
