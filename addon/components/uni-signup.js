import Component from '@ember/component';
import layout from '../templates/components/uni-signup';

export default Component.extend({
  classNames: ['uni-signup'],
  tagName: '',
  layout,

  onClickBack() {},

  actions: {
    onClickBack() {
      this.get('onClickBack')();
    }
  }
});
