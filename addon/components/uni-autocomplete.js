import { computed } from '@ember/object';
import { isPresent, isBlank, isEmpty } from '@ember/utils';
import Component from '@ember/component';
import layout from '../templates/components/uni-autocomplete';
import KeyCodes from 'ember-cli-uniq/enums/key-codes-type';
import { A } from '@ember/array';
import { capitalize } from '@ember/string';

export default Component.extend({
  classNames: ['uni-autocomplete'],
  layout,
  noResultsComponent: 'uni-autocomplete-no-results',
  options: [],
  value: '',
  showOptions: false,
  hasError: false,
  highlighted: 0,
  maxOptionsToShow: 4,
  autocomplete: 'off',
  noResultsText: 'No results for ',
  placeholderText: '',

  // @deprecated for placeholderText
  placeholder: null,

  onSelected() {},

  // @Required The function must return an array of strings
  searchTextValues: null,

  valueLowerCase: computed('value', function() {
    return this.get('value').toLowerCase();
  }),

  optionsFiltered: computed('value', 'options', {
    get() {
      if (isBlank(this.get('value'))) {
        return [];
      }

      const options = this.options.map((option) => {
        const matchedValues = this.filterFunction(this.searchTextValues, option);
        const { firstObject: text } = matchedValues;
        const { value: currentValue } = option;

        if (isPresent(text) && isPresent(currentValue)) {
            const currentInput = new RegExp(`(${this.value})`, 'gi');
            const matchedOptionText = currentValue.replace(currentInput, '<span style="color:#00adef">$1</span>');

            return { option, matchedValues, matchedOptionText };
        }

        return { option, matchedValues };
      });

      return A(options.filter(({ matchedValues }) => isPresent(matchedValues)).slice(0, this.get('maxOptionsToShow')));
    },

    set(_, value) {
      return value;
    }
  }),

  autocompleteOption: computed('optionsFiltered', 'highlighted', function() {
    let options = this.get('optionsFiltered');

    return isEmpty(options) ? null : options.objectAt(this.get('highlighted'));
  }),

  onFocusOut() {},

  actions: {
    onSelected(option) {
      this.selectOption(option);
    },

    keyPress(ev) {
      this._handleKeyPress(ev);
    },

    setHighlighted(index) {
      this.set('highlighted', index);
    },

    showOptions() {
      this.set('highlighted', 0);
      this.set('showOptions', true);
    },

    selectHighlightedOption() {
      let highlightedOption = this.get('autocompleteOption');
      if (isPresent(highlightedOption)) {
        this.selectOption(highlightedOption);
      }
    },

    onFocusOut() {
      this.get('onFocusOut')();
    }
  },

  selectOption(option) {
    this.set('value', capitalize(option.matchedValues.get('firstObject')));

    this.get('onSelected')(option);
    this.set('showOptions', false);
  },

  filterFunction(getSearchTextValues, option) {
    const options = getSearchTextValues(option).map((x) => x.toLowerCase());
    const matchedValues = A(options.filter((el) => el.includes(this.get('valueLowerCase'))));

    return matchedValues;
  },

  _handleKeyPress(ev) {
    let { keyCode } = ev;

    if (keyCode === KeyCodes.UP_ARROW || keyCode === KeyCodes.DOWN_ARROW) {
      ev.preventDefault();

      return this._handleKeyUpDown(keyCode === KeyCodes.DOWN_ARROW ? 1 : -1);
    }

    if (keyCode === KeyCodes.ENTER) {
      return this._handleKeyEnter();
    }

    if (keyCode === KeyCodes.ESCAPE) {
      return this._handleKeyESC();
    }

    this.set('highlighted', 0);
    this.get('onSelected')();
  },

  _handleKeyUpDown(increment) {
    let maxOptions = this.get('maxOptionsToShow');
    let highlightedOption = this.get('highlighted') + increment;

    // Allows to do a circular mod with positive and negative values: ((f % n) + n) % n.
    this.set('highlighted', ((highlightedOption % maxOptions) + maxOptions) % maxOptions);
  },

  _handleKeyEnter() {
    this.selectOption(this.get('optionsFiltered').objectAt(this.get('highlighted')));

    this.element.querySelector('input').blur();
  },

  _handleKeyESC() {
    this.set('showOptions', false);

    this.element.querySelector('input').blur();
  }
});
