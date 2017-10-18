import Component from '@ember/component';
import layout from '../templates/components/uni-step-card';

export default Component.extend({
  tagName: 'article',
  classNames: ['uni-step-card'],
  classNameBindings: ['isComplete:uni-step-card--passed', 'isDisabled:uni-step-card--disabled'],
  layout,

  isComplete: false,
  isDisabled: false
});
