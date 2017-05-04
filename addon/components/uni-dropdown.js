import Ember from 'ember';
import layout from '../templates/components/uni-dropdown';
import ClickOutsideMixin from 'ember-cli-uniq/mixins/click-outside';

const { Component } = Ember;

export default Component.extend(ClickOutsideMixin, {
  classNames: ['uni-dropdown'],
  classNameBindings: [
    'isOpen:uni-dropdown--active',
    'isAbsolute:uni-dropdown--absolute'
  ],
  layout,

  isOpen: false,
  selected: null,
  placeholder: null,
  options: [],
  btnClass: '',

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
