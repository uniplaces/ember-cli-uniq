import Ember from 'ember';
import layout from '../templates/components/uni-dropdown';

const { Component } = Ember;

export default Component.extend({
  classNames: ['uni-dropdown'],
  classNameBindings: ['isOpen:uni-dropdown--active'],
  layout,

  isOpen: false,
  selected: null,
  options: [],
  btnClass: '',
  onChange() {},

  actions: {
    click(option) {
      this.toggleProperty('isOpen');
      this.set('selected', option);

      this.get('onChange')();
    }
  }
});
