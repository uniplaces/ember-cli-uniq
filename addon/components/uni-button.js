import Ember from 'ember';
import layout from '../templates/components/uni-button';

export default Ember.Component.extend({
  tagName: 'button',
  classNameBindings: ['isPrimary:uni-button--primary', 'isDisabled:uni-button--disabled'],
  classNames: ['uni-button'],
  layout,

  isPrimary: false,
  isDisabled: false
});
