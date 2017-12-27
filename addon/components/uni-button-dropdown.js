import Component from '@ember/component';
import layout from '../templates/components/uni-button-dropdown';
import ClickOutsideMixin from 'ember-cli-uniq/mixins/click-outside';

export default Component.extend(ClickOutsideMixin, {
  tagName: 'span',
  layout,
  isOpen: false,
  componentName: 'uni-button-dropdown-item',

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
