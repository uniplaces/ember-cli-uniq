import $ from 'jquery';
import Mixin from '@ember/object/mixin';
import { on } from '@ember/object/evented';

export default Mixin.create({
  onOutsideClick() {},

  handleOutsideClick(event) {
    let $element = this.$();
    let $target = $(event.target);

    if (!$target.closest($element).length) {
      this.onOutsideClick(event);
    }
  },

  setupOutsideClickListener: on('didInsertElement', function() {
    let clickHandler = this.get('handleOutsideClick').bind(this);

    ['click', 'touchend'].forEach((e) => document.addEventListener(e, clickHandler));
  }),

  removeOutsideClickListener: on('willDestroyElement', function() {
    let clickHandler = this.get('handleOutsideClick').bind(this);

    ['click', 'touchend'].forEach((e) => document.removeEventListener(e, clickHandler));
  })
});
