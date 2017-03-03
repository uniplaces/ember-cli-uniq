import Ember from 'ember';
import layout from '../templates/components/uni-form';

const { Component } = Ember;

export default Component.extend({
  classNames: ['uni-form'],
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

      this.get('onSubmit')().then(() => this.setIsLoading(false), () => this.setIsLoading(false));
    }
  }
});
