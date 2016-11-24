import Ember from 'ember';

const { $, Mixin, run, on, K } = Ember;

export default Mixin.create({
  onOutsideClick: K,

  handleOutsideClick(event) {
    let $element = this.$();
    let $target = $(event.target);

    if (!$target.closest($element).length) {
      this.onOutsideClick();
    }
  },

  setupOutsideClickListener: on('didInsertElement', function() {
    let clickHandler = this.get('handleOutsideClick').bind(this);

    return $(document).on('click', clickHandler);
  }),

  removeOutsideClickListener: on('willDestroyElement', function() {
    let clickHandler = this.get('handleOutsideClick').bind(this);

    return $(document).off('click', run.cancel(this, clickHandler));
  })
});
