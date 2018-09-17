import Component from '@ember/component';
import { A } from '@ember/array';
import { isNone, isPresent } from '@ember/utils';
import layout from '../templates/components/uni-select';
import { computed } from '@ember/object';
import { filter } from '@ember/object/computed';

export default Component.extend({
  layout,
  classNames: ['uni-select-wrapper'],
  classNameBindings: ['useAlias:uni-select-wrapper--use-alias'],

  options: [],
  selected: null,
  placeholder: null,
  useAlias: false,
  aliasValue: null,

  groups: filter('options', (option) => {
    return option.hasOwnProperty('options');
  }),

  hasGroups: computed.gt('groups.length', 0),

  onChange() {},

  didReceiveAttrs() {
    this._super(...arguments);

    if (!this.get('useAlias')) {
      return;
    }

    if (this.get('selected')) {
      let group = this.get('hasGroups')
        ? this.get('groups').find(({ options }) => {
          return options.some((option) => option.key === this.get('selected'));
        })
        : null;

      this._changeAliasValue(this.get('selected'), group ? group.key : null);

      return;
    }

    if (isNone(this.get('placeholder'))) {
      let group = this.get('hasGroups') ? this.get('groups')[0].key : null;
      this._changeAliasValue(this._getFirstAvailableValue(), group);
    }
  },

  actions: {
    changeSelected({ target }) {
      if (this.get('useAlias')) {
        let group = this.get('hasGroups') ? target.options[target.selectedIndex].parentNode.getAttribute('key') : null;
        this._changeAliasValue(target.value, group);
      }

      this.get('onChange')(target.value);
    }
  },

  _changeAliasValue(key, group = null) {
    let options = group ? A(this.get('groups')).findBy('key', group).options : this.get('options');
    let option = A(options).findBy('key', key);

    if (isPresent(option)) {
      this.set('aliasValue', option.alias);
    }
  },

  _getFirstAvailableValue() {
    let options = this.get('hasGroups') ? this.get('groups')[0].options : this.get('options');
    let option = A(options).find(({ disabled }) => isNone(disabled));

    return isPresent(option) ? option.key : null;
  }
});
