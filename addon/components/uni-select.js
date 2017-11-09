import Component from '@ember/component';
import { A } from '@ember/array';
import { isNone } from '@ember/utils';
import layout from '../templates/components/uni-select';

export default Component.extend({
  layout,
  classNames: ['uni-select-wrapper'],
  classNameBindings: ['useAlias:uni-select-wrapper--use-alias'],

  options: [],
  selected: null,
  placeholder: null,
  useAlias: false,
  aliasValue: null,

  onChange() {},

  didReceiveAttrs() {
    this._super(...arguments);

    if (isNone(this.get('useAlias'))) {
      return;
    }

    if (this.get('selected')) {
      this._changeAliasValue(this.get('selected'));

      return;
    }

    if (isNone(this.get('placeholder'))) {
      this._changeAliasValue(this._getFirstAvailableValue());
    }
  },

  actions: {
    changeSelected({ target }) {
      if (!isNone(this.get('useAlias'))) {
        this._changeAliasValue(target.value);
      }

      this.get('onChange')(target.value);
    }
  },

  _changeAliasValue(key) {
    let option = A(this.get('options')).findBy('key', key);
    this.set('aliasValue', option.alias);
  },

  _getFirstAvailableValue() {
    let option = A(this.get('options')).find(({ disabled }) => isNone(disabled));

    return !isNone(option) ? option.key : null;
  }
});
