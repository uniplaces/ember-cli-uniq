import { computed } from '@ember/object';
import { isPresent, isBlank, isEmpty } from '@ember/utils';
import Component from '@ember/component';
import layout from '../templates/components/uni-autocomplete';
import ClickOutside from '../mixins/click-outside';
import KeyCodes from 'ember-cli-uniq/enums/key-codes-type';
import { A } from '@ember/array';
import { capitalize } from '@ember/string';

export default Component.extend(ClickOutside, {
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

  optionsFiltered: computed('value', {
    get() {
      if (isBlank(this.get('value'))) {
        return [];
      }

      let options = this.get('options').map((option) => {
        let options = this.get('searchTextValues')(option).map((x) => x.toLowerCase());
        let matchedValues = A(options.filter((el) => el.startsWith(this.get('valueLowerCase'))));

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

  autocompleteText: computed('autocompleteOption', 'value', function() {
    let option = this.get('autocompleteOption');

    if (isEmpty(option)) {
      return '';
    }

    let value = this.get('value');
    let optionText = option.matchedValues.get('firstObject');
    let matchingLetters = optionText.slice(0, value.length);

    return optionText.replace(matchingLetters, value);
  }),

  actions: {
    onSelected(option) {
      this.selectOption(option);
    },

    keyPress(_, ev) {
      this._handleKeyPress(ev);
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
    this.set('value', capitalize(option.matchedValues.get('firstObject')));

    this.get('onSelected')(option);
    this.set('showOptions', false);
  },

  isComponentDestroyed() {
    return this.get('isDestroyed') || this.get('isDestroying');
  },

  onOutsideClick() {
    if (this.isComponentDestroyed() || !this.get('showOptions')) {
      return;
    }

    let option = this.get('autocompleteOption');

    return isEmpty(option)
      ? this.set('showOptions', false)
      : this.selectOption(option);
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

    this.$('input').blur();
  },

  _handleKeyESC() {
    this.set('showOptions', false);

    this.$('input').blur();
  }
});
