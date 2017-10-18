import Component from '@ember/component';
import layout from '../templates/components/uni-signup';

export default Component.extend({
  tagName: '',
  layout,

  onClickBack() {},

  actions: {
    onClickBack() {
      this.get('onClickBack')();
    }
  }
});
