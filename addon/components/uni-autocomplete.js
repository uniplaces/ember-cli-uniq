import Ember from 'ember';
import layout from '../templates/components/uni-autocomplete';
import ClickOutside from '../mixins/click-outside';

const {run, computed, isBlank, isPresent, Component, K} = Ember;

export default Component.extend(ClickOutside, {
  classNames: ['uni-autocomplete'],
  layout,
  options: [],
  value: '',
  placeholder: '',
  onSelected: K,
  noResultsComponent: 'uni-autocomplete-no-results',
  showOptions: false,

  // @Required The function must return an array of strings
  searchTextValues: null,

  valueLowerCase: computed('value', function() {
    return this.get('value').toLowerCase();
  }),

  optionsFiltered: computed('value', {
    get() {
      if (isBlank(this.get('value'))) {
        return [];
      }

      let options = this.get('options').map(option => {
        const options = this.get('searchTextValues')(option).map(x => x.toLowerCase());
        const matchedValues = options.filter(el => el.startsWith(this.get('valueLowerCase')));

        return {option, matchedValues};
      });

      return options.filter(({matchedValues}) => isPresent(matchedValues));
    },

    set(_, value) {
      return value;
    }
  }),

  actions: {
    onSelected(option) {
      this._changeValue(option.matchedValues.get('firstObject').capitalize());

      this.get('onSelected')(option);
      this.set('showOptions', false);
    }
  },

  onOutsideClick() {
    this.set('showOptions');
  },

  _changeValue(value) {
    this.set('value', value);
  },
});
