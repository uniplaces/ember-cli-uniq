import Component from '@ember/component';
import layout from '../templates/components/uni-auth-modal';

export default Component.extend({
  tagName: '',
  layout,
  isOpen: false,
  baseCssClass: 'uni-auth-modal',
  hasSeparator: false,

  onCloseModal() {},

  actions: {
    onCloseModal() {
      this.get('onCloseModal')();
    }
  }
});
