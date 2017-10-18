import Component from '@ember/component';
import { observer } from '@ember/object';
import $ from 'jquery';
import layout from '../templates/components/uni-modal';

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
    let overflowClass = 'overflow-hidden';

    this.get('isOpen') ? $('body').addClass(overflowClass) : $('body').removeClass(overflowClass);
  }),

  actions: {
    onCloseModal() {
      this.get('onCloseModal')();
    }
  }
});
