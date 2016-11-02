import Ember from 'ember';
import layout from '../templates/components/uni-alert';

export default Ember.Component.extend({
  classNames: ['uni-alert'],
  classNameBindings: [
      'isFixed:uni-alert--fixed',
      'isSuccess:uni-alert--success',
      'isError:uni-alert--error',
      'isWarning:uni-alert--warning'
  ],
  isFixed: false,
  isSuccess: false,
  isError: false,
  isWarning: false,
  layout
});
