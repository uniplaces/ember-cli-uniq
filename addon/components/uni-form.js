import Component from '@ember/component';
import layout from '../templates/components/uni-form';

export default Component.extend({
  classNames: ['uni-form'],
  classNameBindings: ['isValid:uni-form--valid:uni-form--invalid'],
  layout,

  isLoading: false,
  isValid: true,

  onSubmit() {},

  isFormDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
  },

  setIsLoading(value) {
    if (!this.isFormDestroyed()) {
      this.set('isLoading', value);
    }
  },

  actions: {
    submit() {
      if (!this.get('isValid') || this.get('isLoading')) {
        return;
      }

      this.set('isLoading', true);

      let promise = this.get('onSubmit')();
      if (promise && typeof promise.then === 'function') {
        promise.then(() => this.setIsLoading(false), () => this.setIsLoading(false));

        return;
      }

      this.setIsLoading(false);
    }
  }
});
