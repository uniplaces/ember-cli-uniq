import Component from '@ember/component';
import { computed } from '@ember/object';
import { isPresent, isEmpty } from '@ember/utils';
import layout from '../templates/components/uni-input';
import InputTypes from 'ember-cli-uniq/enums/input-type';

const SUCCESS_CLASS = 'uni-input--success';
const ERROR_CLASS = 'uni-input--error';
const WARNING_CLASS = 'uni-input--warning';

export default Component.extend({
  layout,

  classNames: ['uni-input-tooltip-container'],
  defaultClass: 'uni-input uni-input--bordered',
  customClass: 'uni-input--small',

  value: null,
  type: InputTypes.TEXT,
  name: '',
  placeholder: '',
  maxLength: null,
  readonly: false,

  tooltipMessage: null,
  showTooltip: false,

  showErrorDefault: true,
  showSuccessDefault: false,
  isRequired: false,
  showSuccess: null,
  showError: null,
  showWarning: null,

  onChange() {},
  onKeyUp() {},
  onKeyDown() {},

  isValid: computed('value', function() {
    switch (this.get('type')) {
      case InputTypes.EMAIL:
        return this._isValidEmail();
      case InputTypes.NUMBER:
        return this.get('isRequired') ? !isNaN(this.get('value')) : true;
      default:
        return !this.get('isRequired') || (this.get('isRequired') && !isEmpty(this.get('value')));
    }
  }),

  successClass: computed('showSuccess', 'value', function() {
    if (isPresent(this.get('showSuccess'))) {
      return this.get('showSuccess') ? SUCCESS_CLASS : '';
    }

    if (this.get('showSuccessDefault')) {
      return this.get('isValid') ? SUCCESS_CLASS : '';
    }

    return '';
  }),

  errorClass: computed('showError', 'value', function() {
    if (isPresent(this.get('showError'))) {
      return this.get('showError') ? ERROR_CLASS : '';
    }

    if (this.get('showErrorDefault')) {
      return this.get('isValid') ? '' : ERROR_CLASS;
    }

    return '';
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
      let newValue = value;

      if (this._isTypeNumber()) {
        let number = parseInt(value, 10);

        newValue = isNaN(number) ? null : number;
      }

      this.set('value', newValue);

      return newValue;
    }
  }),

  focusIn() {
    if (isPresent(this.get('tooltipMessage'))) {
      this.set('showTooltip', true);
    }
  },

  focusOut() {
    if (isPresent(this.get('tooltipMessage'))) {
      this.set('showTooltip', false);
    }
  },

  actions: {
    onChange() {
      this.get('onChange')(this.get('value'), this.get('isValid'));
    },

    onKeyUp() {
      this.get('onKeyUp')(this.get('value'), this.get('isValid'));
    },

    onKeyDown() {
      this.get('onKeyDown')(this.get('value'), this.get('isValid'));
    }
  },

  _isTypeNumber() {
    return this.get('type') === InputTypes.NUMBER;
  },

  _isValidEmail() {
    return /^.+@.+\..+$/.test(this.get('value'));
  }
});
