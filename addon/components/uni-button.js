import Ember from 'ember';
import layout from '../templates/components/uni-button';

const { Component } = Ember;

export default Component.extend({
  tagName: 'button',
  classNameBindings: [
    'isPrimary:uni-button--primary',
    'isDisabled:uni-button--disabled',
    'isSecondary:uni-button--secondary',
    'isLoading:uni-button--loading'
  ],
  classNames: ['uni-button'],
  layout,

  isPrimary: false,
  isDisabled: false,
  isSecondary: false,
  isLoading: false,

  action() {},

  click() {
    this.set('isLoading', true);

    let result = this.get('action')();
    if (result && result.then) {
      return result.then(() => this.set('isLoading', false), () => this.set('isLoading', false));
    }

    this.set('isLoading', false);
  }
});
