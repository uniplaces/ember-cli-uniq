import Component from '@ember/component';
import { observer } from '@ember/object';
import { on } from '@ember/object/evented';
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
  firstLoad: true,

  onCloseModal() {},

  setBodyOverflowClass(state) {
    let body = document.querySelector('body');
    state
      ? body.classList.add(this.get('bodyOverflowClass'))
      : body.classList.remove(this.get('bodyOverflowClass'));
  },

  // This observer is used to bypass the scroll on mobile when a modal is open
  onOpenChangeObserver: on('init', observer('isOpen', function() {
    if (this.get('firstLoad')) {
      this.set('firstLoad', false);

      if (!this.get('isOpen')) {
        return;
      }
    }

    this.setBodyOverflowClass(this.get('isOpen'));
  })),

  willDestroyElement() {
    this._super(...arguments);

    // This assumes only one modal is open at all times
    if (this.get('isOpen')) {
      this.setBodyOverflowClass(false);
    }
  },

  actions: {
    onCloseModal() {
      this.get('onCloseModal')();
    }
  }
});
