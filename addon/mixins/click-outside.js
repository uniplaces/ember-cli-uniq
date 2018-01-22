import $ from 'jquery';
import Mixin from '@ember/object/mixin';
import { next, cancel } from '@ember/runloop';
import { on } from '@ember/object/evented';
import EmberClickOutside from 'ember-click-outside/mixins/click-outside';

export default Mixin.create(EmberClickOutside, {
  exceptSelector: null,

  // This is the function that should be overridden to add the wanted behaviour
  onOutsideClick() {},

  clickOutside(e) {
    if (this.isDestroying || this.isDestroyed) {
      return;
    }

    let exceptSelector = this.get('exceptSelector');
    if (exceptSelector && $(e.target).closest(exceptSelector).length > 0) {
      return;
    }

    let onOutsideClick = this.get('onOutsideClick');
    if (typeof onOutsideClick !== 'undefined') {
      onOutsideClick(e);
    }
  },

  _attachClickOutsideHandler: on('didInsertElement', function() {
    this._cancelOutsideListenerSetup = next(this, this.addClickOutsideListener);
  }),

  _removeClickOutsideHandler: on('willDestroyElement', function() {
    cancel(this._cancelOutsideListerSetup);
    this.removeClickOutsideListener();
  })
});
