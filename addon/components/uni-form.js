import Component from '@ember/component';
import layout from '../templates/components/uni-form';

export default Component.extend({
  classNames: ['uni-form'],
  layout,

  isLoading: false,
  isValid: true,

  autocomplete: 'on',

  onSubmit() {},

  setIsLoading(value) {
    if (!this._isComponentDestroyed()) {
      this.set('isLoading', value);
    }
  },

  _isComponentDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
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
