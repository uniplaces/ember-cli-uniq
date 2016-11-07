import Ember from 'ember';
import layout from '../templates/components/uni-autocomplete';

const {run, computed, isBlank, Component, K} = Ember;

export default Component.extend({
  layout,
  options: [],
  value: '',
  initialValue: '',
  placeholder: '',
  onSelected: K,

  // @Required The function must return an array of strings
  searchTextValues: null,

  valueLowerCase: Ember.computed('value', function() {
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

      return options.filter(({matchedValues}) => Ember.isPresent(matchedValues));
    },

    set(_, value) {
      return value;
    }
  }),

  didInsertElement() {
    this._super(...arguments);

    run.scheduleOnce('afterRender', this, () => {
      this._changeValue(this.get('initialValue'));
    });
  },

  actions: {
    onSelected(option) {
      this._changeValue(option.matchedValues.get('firstObject').capitalize());

      this.get('onSelected')(option);
    }
  },

  _changeValue(newValue) {
    this.set('value', newValue);
    this.set('optionsFiltered', []);
  },
});
