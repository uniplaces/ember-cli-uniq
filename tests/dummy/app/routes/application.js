import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return {
      isOpen: true,
      isSignup: true,
      isLogin: false,
      withEmail: true
    };
  },

  actions: {
    isSignup() {
      this.set('currentModel.isSignup', true);
      this.set('currentModel.isLogin', false);

      this.set('currentModel.isOpen', true);
    },

    isLogin() {
      this.set('currentModel.isSignup', false);
      this.set('currentModel.isLogin', true);

      this.set('currentModel.isOpen', true);
    }
  }
});
