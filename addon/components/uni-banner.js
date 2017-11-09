import Component from '@ember/component';
import layout from '../templates/components/uni-banner';

export default Component.extend({
  tagName: '',
  layout,

  isOpen: true,

  onDismiss() {},

  actions: {
    dismiss() {
      this.set('isOpen', false);
      this.get('onDismiss')();
    }
  }
});
