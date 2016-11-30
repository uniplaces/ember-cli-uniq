import Ember from 'ember';
import layout from '../templates/components/uni-signup-picker';

const { Component } = Ember;

export default Component.extend({
  tagName: '',
  layout,
  withEmail: false,

  clickSignupWithEmail() {},
  onSignupCredentials() {},
  onSignupSocial() {},

  actions: {
    signupSocial(provider) {
      this.get('onSignupSocial')(provider);
    },

    signupWithCredentials() {
      let credentials = {};

      this.get('onSignupCredentials')(credentials);
    },

    toggleWithEmail() {
      this.get('clickSignupWithEmail')();
    }
  }
});
