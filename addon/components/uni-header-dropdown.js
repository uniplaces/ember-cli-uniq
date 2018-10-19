import Component from '@ember/component';
import layout from '../templates/components/uni-header-dropdown';
import ClickOutsideMixin from 'ember-cli-uniq/mixins/click-outside';

export default Component.extend(ClickOutsideMixin, {
  classNames: ['uni-header-dropdown'],
  tagName: 'span',
  layout,
  isOpen: false,
  componentName: 'uni-header-dropdown-item-simple',

  switch() {},

  actions: {
    switch() {
      this.set('isOpen', false);

      this.get('switch')();
    }
  },

  onOutsideClick() {
    if (this.isComponentDestroyed()) {
      return;
    }

    this.set('isOpen', false);
  },

  isComponentDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
  }
});
