import Ember from 'ember';
import layout from '../templates/components/uni-autocomplete';
import ClickOutside from '../mixins/click-outside';
import KeyCodes from 'ember-cli-uniq/enums/key-codes-type';

const { computed, isBlank, isPresent, Component } = Ember;

export default Component.extend(ClickOutside, {
  classNames: ['uni-autocomplete'],
  layout,
  noResultsComponent: 'uni-autocomplete-no-results',
  options: [],
  value: '',
  placeholder: '',
  showOptions: false,
  highlighted: 0,
  maxOptionsToShow: 4,
  onSelected() {},

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

      let options = this.get('options').map((option) => {
        let options = this.get('searchTextValues')(option).map((x) => x.toLowerCase());
        let matchedValues = options.filter((el) => el.startsWith(this.get('valueLowerCase')));

        return { option, matchedValues };
      });

      return options.filter(({ matchedValues }) => isPresent(matchedValues)).slice(0, this.get('maxOptionsToShow'));
    },

    set(_, value) {
      return value;
    }
  }),

  actions: {
    onSelected(option) {
      this.selectOption(option);
    },

    keyDown(_, ev) {
      let { keyCode } = ev;

      switch (keyCode) {
        case KeyCodes.UP_ARROW:
          this._handleKeyUp(ev);
          break;
        case KeyCodes.DOWN_ARROW:
          this._handleKeyDown(ev);
          break;
        case KeyCodes.ENTER:
          this._handleKeyEnter();
          break;
        case KeyCodes.ESCAPE:
          this._handleKeyESC();
          break;
        default:
          this.get('onSelected')({});
      }
    },

    setHighlighted(index) {
      this.set('highlighted', index);
    },

    showOptions() {
      this.set('highlighted', 0);
      this.set('showOptions', true);
    }
  },

  selectOption(option) {
    this.set('value', option.matchedValues.get('firstObject').capitalize());

    this.get('onSelected')(option);
    this.set('showOptions', false);
  },

  onOutsideClick() {
    this.set('showOptions', false);
  },

  _handleKeyUp(ev) {
    ev.preventDefault();

    if (this.get('highlighted') > 0) {
      this.decrementProperty('highlighted');
    }
  },

  _handleKeyDown(ev) {
    ev.preventDefault();

    if (this.get('highlighted') < (this.get('maxOptionsToShow') - 1)) {
      this.incrementProperty('highlighted');
    }
  },

  _handleKeyEnter() {
    this.selectOption(this.get('optionsFiltered').objectAt(this.get('highlighted')));

    this.$('input').blur();
  },

  _handleKeyESC() {
    this.set('showOptions', false);

    this.$('input').blur();
  }
});
