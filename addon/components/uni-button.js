import Component from '@ember/component';
import layout from '../templates/components/uni-button';

export default Component.extend({
  tagName: 'div',
  ariaRole: 'button',
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
      return result.then(() => this.trySetLoading(false), () => this.trySetLoading(false));
    }

    this.set('isLoading', false);
  },

  isComponentDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
  },

  trySetLoading(value) {
    return this.isComponentDestroyed() ||  this.set('isLoading', value);
  }
});
