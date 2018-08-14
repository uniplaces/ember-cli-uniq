import Component from '@ember/component';
import layout from '../templates/components/uni-form';

export default Component.extend({
  layout,
  classNames: ['uni-form'],
  classNameBindings: ['isValid:uni-form--valid:uni-form--invalid'],

  isLoading: false,
  isValid: true,

  autocomplete: 'on',

  onSubmit() {},

  setIsLoading(value) {
    if (this._isComponentDestroyed()) {
      return;
    }

    this.set('isLoading', value);
  },

  _isComponentDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
  },

  actions: {
    submit() {
      if (!this.get('isValid') || this.get('isLoading')) {
        return;
      }

      this.setIsLoading(true);

      let promise = this.get('onSubmit')();
      if (promise && typeof promise.then === 'function') {
        promise.then(() => this.setIsLoading(false), () => this.setIsLoading(false));

        return;
      }

      this.setIsLoading(false);
    }
  }
});
