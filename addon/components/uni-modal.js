import Component from '@ember/component';
import { observer } from '@ember/object';
import $ from 'jquery';
import layout from '../templates/components/uni-modal';

export default Component.extend({
  tagName: '',
  layout,
  baseCssClass: 'uni-modal',
  modifierCssClass: '',
  customCssComponentClass: '',
  bodyOverflowClass: 'overflow-hidden',
  title: null,
  hasSeparator: true,
  hasCloseButton: true,
  renderInPlace: false,
  isOpen: null,

  onCloseModal() {},

  // This observer is used to bypass the scroll on mobile when a modal is open
  onOpenChangeObserver: observer('isOpen', function() {
    this.get('isOpen')
      ? $('body').addClass(this.get('bodyOverflowClass'))
      : $('body').removeClass(this.get('bodyOverflowClass'));
  }),

  didDestroyElement() {
    this._super(...arguments);

    $('body').removeClass(this.get('bodyOverflowClass'));
  },

  actions: {
    onCloseModal() {
      this.get('onCloseModal')();
    }
  }
});
