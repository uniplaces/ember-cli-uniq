import Component from '@ember/component';
import { observer } from '@ember/object';
import $ from 'jquery';
import layout from '../templates/components/uni-modal';

const OVERFLOW_HIDDEN_CLASS = 'overflow-hidden';

export default Component.extend({
  tagName: '',
  layout,
  baseCssClass: 'uni-modal',
  modifierCssClass: '',

  title: null,
  customCssComponentClass: '',
  hasSeparator: true,
  hasCloseButton: true,
  renderInPlace: false,
  isOpen: null,
  onCloseModal() {},

  // This observer is used to bypass the scroll on mobile when a modal is open
  onOpenChangeObserver: observer('isOpen', function() {
    this.get('isOpen') ? $('body').addClass(OVERFLOW_HIDDEN_CLASS) : $('body').removeClass(OVERFLOW_HIDDEN_CLASS);
  }),

  didDestroyElement() {
    this._super(...arguments);
    $('body').removeClass(OVERFLOW_HIDDEN_CLASS);
  },

  actions: {
    onCloseModal() {
      this.get('onCloseModal')();
    }
  }
});
