import Ember from 'ember';
import layout from '../templates/components/uni-alert';
import UniAlertTypes from 'ember-cli-uniq/enums/uni-alert-type';

const { Component, computed  } = Ember;

export default Component.extend({
  classNames: ['uni-alert'],
  classNameBindings: [
    'isFixed:uni-alert--fixed',
    'isSuccess:uni-alert--success',
    'isError:uni-alert--error',
    'isWarning:uni-alert--warning'
  ],
  layout,

  isFixed: false,
  isSuccess: computed('type', function() {
    return this.get('type') === UniAlertTypes.SUCCESS;
  }),
  isError: computed('type', function() {
    return this.get('type') === UniAlertTypes.ERROR;
  }),
  isWarning: computed('type', function() {
    return this.get('type') === UniAlertTypes.WARNING;
  })
});
