import Ember from 'ember';
import layout from '../templates/components/uni-input';

const { Component, computed, isEmpty } = Ember;
const SUCCESS_CLASS = 'uni-input--success';
const ERROR_CLASS = 'uni-input--error';
const WARNING_CLASS = 'uni-input--warning';
const INPUT_TYPE_NUMBER = 'number';
const INPUT_TYPE_EMAIL = 'email';

export default Component.extend({
  layout,

  classNames: ['uni-input-tooltip-container'],
  defaultClass: ['uni-input uni-input--bordered uni-input--small'],
  customClass: '',
  value: null,
  type: 'text',
  name: '',
  placeholder: '',
  maxLength: null,
  tooltipMessage: null,
  showTooltip: false,
  useDefaultErrorValidation: true,
  useDefaultSuccessValidation: false,
  isRequired: false,
  showSuccess: false,
  showError: false,
  showWarning: false,
  onChange() {},

  isValid: computed('value', function() {
    switch (this.get('type')) {
      case INPUT_TYPE_EMAIL:
        return this._isValidEmail();
      case INPUT_TYPE_NUMBER:
        return this.get('isRequired') ? !isNaN(this.get('value')) : true;
      default: return !this.get('isRequired') || (this.get('isRequired') && !isEmpty(this.get('value')));
    }
  }),

  successClass: computed('showSuccess', function() {
    if (this.get('useDefaultSuccessValidation')) {
      return this.get('isValid') ? SUCCESS_CLASS : '';
    }

    return this.get('showSuccess') ? SUCCESS_CLASS : '';
  }),

  errorClass: computed('showError', 'value', function() {
    if (this.get('useDefaultErrorValidation')) {
      return this.get('isValid') ? '' : ERROR_CLASS;
    }

    return this.get('showError') ? ERROR_CLASS : '';
  }),

  warningClass: computed('showWarning', function() {
    return this.get('showWarning') ? WARNING_CLASS : '';
  }),

  /**
   * If type is number converts a value to an integer when possible
   * @public
   */
  computedValue: computed('value', {
    get() {
      return this.get('value');
    },

    set(key, value) {
      let newValue = this._isTypeNumber() && !isNaN(value)
        ? parseInt(value)
        : value;
      this.set('value', newValue);

      return newValue;
    }
  }),

  focusIn() {
    if (this.get('tooltipMessage')) {
      this.set('showTooltip', true);
    }
  },

  focusOut() {
    if (this.get('tooltipMessage')) {
      this.set('showTooltip', false);
    }
  },

  actions: {
    onChange() {
      this.get('onChange')(this.get('value'));
    }
  },

  _isTypeNumber() {
    return this.get('type') === INPUT_TYPE_NUMBER;
  },

  _isValidEmail() {
    return /^.+@.+\..+$/.test(this.get('value'));
  }
});
