import Ember from 'ember';
import layout from '../templates/components/uni-dropdown';
import ClickOutsideMixin from 'ember-cli-uniq/mixins/click-outside';

const { Component, computed } = Ember;

export default Component.extend(ClickOutsideMixin, {
  classNames: ['uni-dropdown'],
  classNameBindings: [
    'isOpen:uni-dropdown--active',
    'isAbsolute:uni-dropdown--absolute',
    'selectedSvgs:uni-dropdown--svg'
  ],
  layout,

  selectedAlias: null,
  selectedSvgs: null,
  isOpen: false,
  hasError: false,
  selected: null,
  placeholder: null,
  buttonErrorClass: 'uni-dropdown__button--error',
  options: [],
  btnClass: '',

  errorClass: computed('hasError', function() {
    return this.get('hasError') ? this.get('buttonErrorClass') : '';
  }),

  onChange() {},
  onClick() {},

  onOutsideClick() {
    this.set('isOpen', false);
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
