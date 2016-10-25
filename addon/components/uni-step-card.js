import Ember from 'ember';
import layout from '../templates/components/uni-step-card';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['uni-step-card'],
  classNameBindings: ['isComplete:uni-step-card--passed', 'isDisabled:uni-step-card--disabled'],
  layout,

  step: 'First Step',
  isComplete: false,
  isDisabled: false,
  percentage: 0
});
