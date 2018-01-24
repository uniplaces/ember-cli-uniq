import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import layout from '../templates/components/uni-dropdown';
import ClickOutsideMixin from 'ember-cli-uniq/mixins/click-outside';

export default Component.extend(ClickOutsideMixin, {
  media: service(),

  classNames: ['uni-dropdown'],
  classNameBindings: [
    'isOpen:uni-dropdown--active',
    'isAbsolute:uni-dropdown--absolute',
    'selectedSvgs:uni-dropdown--svg'
  ],
  layout,

  useAlias: false,
  selectedAlias: null,
  selectedSvgs: null,
  isOpen: false,
  hasError: false,
  selected: null,
  placeholder: null,
  buttonErrorClass: 'uni-dropdown__button--error',
  options: [],
  btnClass: '',
  isNativeOnMobile: false,

  errorClass: computed('hasError', function() {
    return this.get('hasError') ? this.get('buttonErrorClass') : '';
  }),

  onChange() {},
  onClick() {},

  onOutsideClick() {
    if (this.isComponentDestroyed()) {
      return;
    }

    this.set('isOpen', false);
  },

  isComponentDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
  },

  actions: {
    buttonClick() {
      this.toggleProperty('isOpen');

      this.get('onClick')();
    },

    optionClick(option) {
      this.toggleProperty('isOpen');

      this.get('onChange')(option);
    }
  }
});
