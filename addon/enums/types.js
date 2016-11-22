import Ember from 'ember';

export default Ember.Object.extend({
  toKeyValueJson() {
    return Object.keys(this).map(key => {
      return {key: key, value: this[key]};
    });
  },

  values() {
    return Object.keys(this).map(key => this[key]);
  }
});
